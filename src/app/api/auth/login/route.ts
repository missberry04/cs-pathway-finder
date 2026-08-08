import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { createSessionCookie } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body?.password === "string" ? body.password : "";

  const genericError = NextResponse.json({ error: "Incorrect email or password." }, { status: 401 });

  if (!email || !password) return genericError;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return genericError;

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return genericError;

  await createSessionCookie({ userId: user.id, email: user.email });

  return NextResponse.json({ id: user.id, email: user.email, name: user.name });
}
