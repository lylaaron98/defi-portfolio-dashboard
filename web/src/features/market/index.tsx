// src/features/market/index.tsx
"use client";
import { useMarketTickers } from "./hooks/useMarketTickers";
import { MarketOverviewCards } from "./components/MarketOverviewCards";
import { TokenPriceList } from "./components/TokenPriceList";

export function MarketFeature() {
  const { data = [], isLoading, isError } = useMarketTickers();

  return (
    <div className="space-y-8">
      <MarketOverviewCards tickers={data} />
      <TokenPriceList tickers={data} isLoading={isLoading} isError={isError} />
    </div>
  );
}
