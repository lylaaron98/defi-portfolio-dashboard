// Summary cards for portfolio overview
import React from "react";
import type { PortfolioSummary } from "../types";

export function PortfolioSummaryCards({ summary }: { summary: PortfolioSummary }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="bg-white dark:bg-gray-900 rounded shadow p-4">
        <div className="text-gray-500 text-xs">Total Value</div>
        <div className="text-2xl font-bold">${summary.totalValueUsd}</div>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded shadow p-4">
        <div className="text-gray-500 text-xs">Assets</div>
        <div className="text-2xl font-bold">{summary.balances.length}</div>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded shadow p-4">
        <div className="text-gray-500 text-xs">Last Updated</div>
        <div className="text-lg">{new Date(summary.updatedAt).toLocaleString()}</div>
      </div>
    </div>
  );
}
