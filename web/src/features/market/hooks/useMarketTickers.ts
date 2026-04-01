// src/features/market/hooks/useMarketTickers.ts
"use client";
import { useQuery } from "@tanstack/react-query";
import { getMarketTickers } from "../services/marketService";
import { MarketTicker } from "../types/marketTicker";

export function useMarketTickers() {
  return useQuery<MarketTicker[], Error>({
    queryKey: ["market", "tickers"],
    queryFn: getMarketTickers,
    staleTime: 60 * 1000, // 1 minute
    refetchInterval: 60 * 1000,
  });
}
