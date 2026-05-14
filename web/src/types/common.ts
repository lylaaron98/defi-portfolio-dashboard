// src/types/common.ts
// Common, reusable types for the domain layer.

export type Address = string;
export type TokenSymbol = string;
export type Timestamp = number; // Unix epoch (ms)

export interface TokenBalance {
  token: TokenSymbol;
  amount: string; // Use string for big numbers
  address: Address;
}

export interface TransactionRecord {
  txHash: string;
  from: Address;
  to: Address;
  value: string;
  token: TokenSymbol;
  timestamp: Timestamp;
  status: "pending" | "confirmed" | "failed";
}
