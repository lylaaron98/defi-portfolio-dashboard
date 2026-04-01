// src/features/market/types/index.ts
// Market ticker and price types.

export interface MarketTicker {
  symbol: string;
  priceUsd: string;
  change24h: string;
  volume24h: string;
  lastUpdated: number;
}
