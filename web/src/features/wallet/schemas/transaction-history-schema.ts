// src/features/wallet/schemas/transaction-history-schema.ts
// Zod schema for transaction history item validation.
import { z } from "zod";

export const transactionHistoryItemSchema = z.object({
  txHash: z.string(),
  from: z.string(),
  to: z.string(),
  value: z.string(),
  token: z.string(),
  timestamp: z.number(),
  status: z.enum(["pending", "confirmed", "failed"]),
});

export type TransactionHistoryItem = z.infer<typeof transactionHistoryItemSchema>;

// Example: Validate transaction item
// const parsed = transactionHistoryItemSchema.safeParse(item)
// if (!parsed.success) throw new Error(parsed.error.message);
