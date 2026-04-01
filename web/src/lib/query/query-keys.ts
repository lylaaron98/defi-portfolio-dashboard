// src/lib/query/query-keys.ts
// Centralized, typed query keys for TanStack Query

export const QUERY_KEYS = {
  portfolio: (address: string) => ["portfolio", address] as const,
  // Add more feature keys here
};

// Centralizing query keys prevents typos and enables refactoring.
export type PortfolioQueryKey = ReturnType<typeof QUERY_KEYS.portfolio>;
