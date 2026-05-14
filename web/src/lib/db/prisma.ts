// src/lib/db/prisma.ts
// Prisma client singleton for server usage
import type { PortfolioSummary } from "@/features/portfolio/types";

type SnapshotRecord = {
  totalValueUsd: string;
  balances: PortfolioSummary["balances"];
  createdAt: Date;
};

type WalletRecord = {
  address: string;
  snapshots: SnapshotRecord[];
};

type PrismaLike = {
  wallet: {
    findUnique: (args: unknown) => Promise<WalletRecord | null>;
  };
};

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require("@prisma/client") as {
  PrismaClient: new (options?: { log?: string[] }) => PrismaLike;
};

type PrismaClientInstance = InstanceType<typeof PrismaClient>;

const globalForPrisma = globalThis as unknown as { prisma: PrismaClientInstance | undefined };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// Use this prisma instance in server code only.
