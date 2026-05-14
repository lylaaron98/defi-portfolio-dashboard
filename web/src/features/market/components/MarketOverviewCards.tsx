// src/features/market/components/MarketOverviewCards.tsx
"use client";
import { MarketTicker } from "../types/marketTicker";
import { Card } from "@/components/ui/Card";
import Image from "next/image";

interface Props {
  tickers: MarketTicker[];
}

export function MarketOverviewCards({ tickers }: Props) {
  if (!tickers.length) return null;
  const top = tickers[0];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Card>
        <div className="text-lg font-semibold">Top Token</div>
        <div className="flex items-center gap-2 mt-2">
          {top.logoUrl ? (
            <Image alt={top.symbol} className="w-8 h-8" height={32} src={top.logoUrl} width={32} />
          ) : null}
          <span>
            {top.name} ({top.symbol})
          </span>
        </div>
        <div className="mt-2 text-2xl font-bold">${top.price.toLocaleString()}</div>
        <div className={top.priceChangePct24h >= 0 ? "text-green-500" : "text-red-500"}>
          {top.priceChangePct24h >= 0 ? "+" : ""}
          {top.priceChangePct24h.toFixed(2)}%
        </div>
      </Card>
      <Card>
        <div className="text-lg font-semibold">24h Volume</div>
        <div className="mt-2 text-2xl font-bold">${top.volume24h.toLocaleString()}</div>
      </Card>
      <Card>
        <div className="text-lg font-semibold">Market Cap</div>
        <div className="mt-2 text-2xl font-bold">${top.marketCap.toLocaleString()}</div>
      </Card>
    </div>
  );
}
