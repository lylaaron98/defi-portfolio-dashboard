// src/lib/errors/error-codes.ts
// Centralized error codes for maintainability and type safety.

export const ERROR_CODES = {
  UNKNOWN: "Unknown error",
  NOT_FOUND: "Resource not found",
  INVALID_INPUT: "Invalid input",
  UNAUTHORIZED: "Unauthorized",
  RATE_LIMITED: "Rate limited",
  NETWORK_ERROR: "Network error",
  WALLET_ERROR: "Wallet error",
  MARKET_DATA_ERROR: "Market data error",
  TRADE_ERROR: "Trade error",
  // Add more as needed
} as const;

export type ErrorCode = keyof typeof ERROR_CODES;
