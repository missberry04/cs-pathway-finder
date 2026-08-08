"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/components/AuthProvider";

export function Header() {
  const { user, loading, logout } = useAuth();
  const [loggingOut, setLoggingOut] = useState(false);

  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          🧭 PathwayCS
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/pathways" className="hover:underline">
            Pathways
          </Link>
          {loading ? null : user ? (
            <div className="flex items-center gap-3">
              <span className="text-black/60 dark:text-white/60">{user.email}</span>
              <button
                onClick={async () => {
                  setLoggingOut(true);
                  await logout();
                  setLoggingOut(false);
                }}
                disabled={loggingOut}
                className="rounded-md border border-black/15 px-3 py-1.5 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
              >
                {loggingOut ? "Signing out…" : "Sign out"}
              </button>
            </div>
          ) : (
            <Link
              href="/sign-in"
              className="rounded-md border border-black/15 px-3 py-1.5 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
            >
              Sign in
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
