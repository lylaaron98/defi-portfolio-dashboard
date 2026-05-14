// src/server/repositories/prisma-portfolio-repository.ts
// Prisma-backed implementation of PortfolioRepository
import { prisma } from "@/lib/db/prisma";
import type { PortfolioSummary } from "@/features/portfolio/types";
import type { PortfolioRepository } from "./portfolio-repository";

export class PrismaPortfolioRepository implements PortfolioRepository {
  async getPortfolioSummary(address: string): Promise<PortfolioSummary | null> {
    // Example: fetch latest snapshot for a wallet
    const wallet = await prisma.wallet.findUnique({
      where: { address },
      include: {
        snapshots: { orderBy: { createdAt: "desc" }, take: 1 },
      },
    });
    if (!wallet || wallet.snapshots.length === 0) return null;
    const snap = wallet.snapshots[0];
    // Map DB record to domain model
    return {
      address: wallet.address,
      totalValueUsd: snap.totalValueUsd,
      balances: snap.balances as PortfolioSummary["balances"],
      updatedAt: snap.createdAt.getTime(),
    };
  }
}

// This class can be swapped in for the mock repo with no changes to feature code.
