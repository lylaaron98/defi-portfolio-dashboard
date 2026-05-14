// src/features/market/components/TokenPriceList.tsx
"use client";
import { MarketTicker } from "../types/marketTicker";
import { Skeleton } from "@/components/ui/Skeleton";
import Image from "next/image";

interface Props {
  tickers: MarketTicker[];
  isLoading: boolean;
  isError: boolean;
}

export function TokenPriceList({ tickers, isLoading, isError }: Props) {
  if (isLoading) {
    return <Skeleton className="h-64 w-full" />;
  }
  if (isError) {
    return <div className="text-red-500">Failed to load token prices.</div>;
  }
  if (!tickers.length) {
    return <div className="text-gray-500">No token prices found.</div>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr>
            <th className="text-left">Token</th>
            <th className="text-right">Price</th>
            <th className="text-right">24h Change</th>
            <th className="text-right">Volume</th>
            <th className="text-right">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {tickers.map((t) => (
            <tr key={t.symbol}>
              <td className="flex items-center gap-2 py-2">
                {t.logoUrl ? (
                  <Image
                    alt={t.symbol}
                    className="w-5 h-5"
                    height={20}
                    src={t.logoUrl}
                    width={20}
                  />
                ) : null}
                <span>
                  {t.name} ({t.symbol})
                </span>
              </td>
              <td className="text-right">${t.price.toLocaleString()}</td>
              <td
                className={
                  t.priceChangePct24h >= 0 ? "text-green-500 text-right" : "text-red-500 text-right"
                }
              >
                {t.priceChangePct24h >= 0 ? "+" : ""}
                {t.priceChangePct24h.toFixed(2)}%
              </td>
              <td className="text-right">${t.volume24h.toLocaleString()}</td>
              <td className="text-right">${t.marketCap.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
