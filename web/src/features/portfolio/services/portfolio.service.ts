// Service layer for portfolio data (mocked for now, replace with real API later)
import type { PortfolioSummary } from "../types";

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

export async function fetchPortfolio(_address: string): Promise<PortfolioSummary> {
  void _address;
  // Simulate network delay
  await new Promise((r) => setTimeout(r, 800));
  // In production, fetch from API/DB here
  return MOCK_PORTFOLIO;
}
