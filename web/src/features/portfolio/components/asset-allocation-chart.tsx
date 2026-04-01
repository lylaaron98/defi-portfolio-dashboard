// Asset allocation chart (placeholder, replace with chart lib later)
import React from "react";
import type { PortfolioSummary } from "../types";

export function AssetAllocationChart({ summary }: { summary: PortfolioSummary }) {
  // In production, use a chart library (e.g., recharts, chart.js)
  return (
    <div className="bg-white dark:bg-gray-900 rounded shadow p-4 mb-6">
      <div className="font-semibold mb-2">Asset Allocation</div>
      <div className="flex flex-wrap gap-4">
        {summary.balances.map((b) => (
          <div key={b.token} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-400 inline-block" />
            <span>
              {b.token}: {b.amount}
            </span>
          </div>
        ))}
      </div>
      <div className="text-gray-400 text-xs mt-2">(Chart coming soon)</div>
    </div>
  );
}
