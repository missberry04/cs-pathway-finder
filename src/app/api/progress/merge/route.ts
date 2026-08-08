import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

/** Merges locally-tracked (anonymous, localStorage) progress into the signed-in user's account. */
export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Not signed in." }, { status: 401 });

  const body = await request.json().catch(() => null);
  const items: unknown[] = Array.isArray(body?.items) ? body.items : [];

  const valid: { pathwaySlug: string; milestoneId: string }[] = items.filter(
    (item: unknown): item is { pathwaySlug: string; milestoneId: string } =>
      typeof item === "object" &&
      item !== null &&
      typeof (item as Record<string, unknown>).pathwaySlug === "string" &&
      typeof (item as Record<string, unknown>).milestoneId === "string"
  );

  if (valid.length > 0) {
    await prisma.progressItem.createMany({
      data: valid.map((item) => ({
        userId: session.userId,
        pathwaySlug: item.pathwaySlug,
        milestoneId: item.milestoneId,
      })),
      skipDuplicates: true,
    });
  }

  const allItems = await prisma.progressItem.findMany({
    where: { userId: session.userId },
    select: { pathwaySlug: true, milestoneId: true },
  });

  return NextResponse.json({ items: allItems });
}
