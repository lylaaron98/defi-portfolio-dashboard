// src/features/trading/types/index.ts
// Trade order and related types.
import type { TokenSymbol, Address, Timestamp } from "@/types/common";

export type OrderSide = "buy" | "sell";
export type OrderStatus = "pending" | "filled" | "cancelled" | "failed";

export interface TradeOrder {
  id: string;
  user: Address;
  side: OrderSide;
  symbol: TokenSymbol;
  amount: string;
  price: string;
  status: OrderStatus;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
