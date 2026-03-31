// src/types/index.ts
// Central place for global TypeScript types and interfaces.
// Extend for wallet, API, and i18n types as needed.

export type Theme = 'light' | 'dark' | 'system';

// Example: Asset type for dashboard
export interface Asset {
  symbol: string;
  balance: number;
  value: number;
}
