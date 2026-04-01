// src/lib/constants/routes.ts
// Strongly typed route paths for maintainability and refactoring safety.

export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  MARKETS: "/dashboard/markets",
  TRADING: "/dashboard/trading",
  WALLET: "/dashboard/wallet",
  LOANS: "/dashboard/loans",
  VAULTS: "/dashboard/vaults",
  PORTFOLIO: "/dashboard/portfolio",
  LIQUIDITY_POOLS: "/dashboard/liquidity-pools",
  SWAP: "/dashboard/swap",
  TRADES: "/dashboard/trades",
  SETTINGS: "/dashboard/settings",
  LOGIN: "/login",
  API: "/api",
  // Add more as needed
} as const;

export type RouteKey = keyof typeof ROUTES;

// Using constants for routes prevents typos and enables IDE autocompletion.
