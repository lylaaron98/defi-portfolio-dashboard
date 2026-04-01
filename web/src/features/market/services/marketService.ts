// src/features/market/services/marketService.ts
import { fetchJson } from "../lib/apiClient";
import { marketTickerListSchema } from "../schemas/marketTickerSchema";
import { MarketTicker } from "../types/marketTicker";

// Example API endpoint (replace with real one)
const MARKET_API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

// Transform raw API response to MarketTicker[]
function toNumber(value: unknown): number {
  return typeof value === "number" ? value : Number(value ?? 0);
}

function transformMarketTickers(raw: Array<Record<string, unknown>>): MarketTicker[] {
  return raw.map((item) => ({
    symbol: String(item.symbol ?? "").toUpperCase(),
    name: String(item.name ?? ""),
    price: toNumber(item.current_price),
    priceChange24h: toNumber(item.price_change_24h),
    priceChangePct24h: toNumber(item.price_change_percentage_24h),
    volume24h: toNumber(item.total_volume),
    marketCap: toNumber(item.market_cap),
    logoUrl: String(item.image ?? ""),
  }));
}

export async function getMarketTickers(): Promise<MarketTicker[]> {
  const raw = await fetchJson<Array<Record<string, unknown>>>(MARKET_API_URL);
  const tickers = transformMarketTickers(raw);
  // Validate with Zod before returning
  return marketTickerListSchema.parse(tickers);
}
