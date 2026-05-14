// Table of token balances
import React from "react";
import { t } from "@/lib/i18n";
import type { PortfolioSummary } from "../types";

export function TokenBalanceTable({ summary }: { summary: PortfolioSummary }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded shadow p-4">
      <div className="font-semibold mb-2">{t("portfolio.tokens")}</div>
      <table className="min-w-full text-sm">
        <thead>
          <tr>
            <th className="text-left">{t("portfolio.tokens")}</th>
            <th className="text-left">{t("portfolio.balance")}</th>
            <th className="text-left">Address</th>
          </tr>
        </thead>
        <tbody>
          {summary.balances.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-gray-500 text-center py-4">
                {t("portfolio.noTokens")}
              </td>
            </tr>
          ) : (
            summary.balances.map((b) => (
              <tr key={b.token}>
                <td>{b.token}</td>
                <td>{b.amount}</td>
                <td className="truncate max-w-xs">{b.address}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
