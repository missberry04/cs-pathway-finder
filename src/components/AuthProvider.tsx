"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { useProgressStore } from "@/store/progress";

type User = { id: string; email: string; name: string | null };

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  refresh: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const mergedRef = useRef(false);

  const fetchMe = useCallback(async () => {
    const res = await fetch("/api/auth/me");
    const data = await res.json();
    setUser(data.user);
    return data.user as User | null;
  }, []);

  useEffect(() => {
    (async () => {
      const currentUser = await fetchMe();
      if (currentUser && !mergedRef.current) {
        mergedRef.current = true;
        const localItems = useProgressStore.getState().allLocalItems();
        try {
          const res = await fetch("/api/progress/merge", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: localItems }),
          });
          const data = await res.json();
          if (Array.isArray(data.items)) {
            useProgressStore.getState().hydrateFromServer(data.items);
          }
        } catch {
          // offline or API error: keep local progress as-is
        }
      }
      setLoading(false);
    })();
  }, [fetchMe]);

  const logout = useCallback(async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    mergedRef.current = false;
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, refresh: async () => { await fetchMe(); }, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
