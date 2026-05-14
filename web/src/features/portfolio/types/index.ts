// src/features/portfolio/types/index.ts
// Portfolio domain types.
import type { TokenBalance } from "@/types/common";

export interface PortfolioSummary {
  address: string;
  totalValueUsd: string;
  balances: TokenBalance[];
  updatedAt: number;
}
