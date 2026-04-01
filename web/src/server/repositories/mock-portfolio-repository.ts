// Mock repository for portfolio data
// In production, replace with a real DB (e.g., Prisma/PostgreSQL)
import type { PortfolioSummary } from "@/features/portfolio/types";

const MOCK_PORTFOLIO: PortfolioSummary = {
  address: "0x1234...abcd",
  totalValueUsd: "25000",
  balances: [
    { token: "ETH", amount: "1.5", address: "0x1234...abcd" },
    { token: "BTC", amount: "0.3", address: "0x1234...abcd" },
    { token: "USDC", amount: "10000", address: "0x1234...abcd" },
  ],
  updatedAt: Date.now(),
};

export class MockPortfolioRepository {
  // Simulate async DB call
  async getPortfolioSummary(address: string): Promise<PortfolioSummary | null> {
    // In production, query the DB here
    if (address === MOCK_PORTFOLIO.address) return MOCK_PORTFOLIO;
    return null;
  }
}

// This repository pattern makes it easy to swap out the data source for real DBs or APIs.
