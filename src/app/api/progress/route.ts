import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Not signed in." }, { status: 401 });

  const items = await prisma.progressItem.findMany({
    where: { userId: session.userId },
    select: { pathwaySlug: true, milestoneId: true },
  });

  return NextResponse.json({ items });
}

export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Not signed in." }, { status: 401 });

  const body = await request.json().catch(() => null);
  const pathwaySlug = typeof body?.pathwaySlug === "string" ? body.pathwaySlug : "";
  const milestoneId = typeof body?.milestoneId === "string" ? body.milestoneId : "";
  const completed = Boolean(body?.completed);

  if (!pathwaySlug || !milestoneId) {
    return NextResponse.json({ error: "pathwaySlug and milestoneId are required." }, { status: 400 });
  }

  if (completed) {
    await prisma.progressItem.upsert({
      where: { userId_pathwaySlug_milestoneId: { userId: session.userId, pathwaySlug, milestoneId } },
      create: { userId: session.userId, pathwaySlug, milestoneId },
      update: {},
    });
  } else {
    await prisma.progressItem.deleteMany({
      where: { userId: session.userId, pathwaySlug, milestoneId },
    });
  }

  return NextResponse.json({ ok: true });
}
