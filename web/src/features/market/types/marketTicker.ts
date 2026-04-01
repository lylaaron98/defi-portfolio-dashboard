// src/features/market/types/marketTicker.ts

export interface MarketTicker {
  symbol: string;
  name: string;
  price: number;
  priceChange24h: number;
  priceChangePct24h: number;
  volume24h: number;
  marketCap: number;
  logoUrl?: string;
}
