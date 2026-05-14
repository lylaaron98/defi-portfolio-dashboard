// src/features/trading/schemas/trade-form-schema.ts
// Zod schema for trade form input validation.
import { z } from "zod";

export const tradeFormSchema = z.object({
  side: z.enum(["buy", "sell"]),
  symbol: z.string(),
  amount: z.string().regex(/^\d+(\.\d+)?$/, "Amount must be a number"),
  price: z.string().regex(/^\d+(\.\d+)?$/, "Price must be a number"),
});

export type TradeFormInput = z.infer<typeof tradeFormSchema>;

// Example: Validate form input
// const parsed = tradeFormSchema.safeParse(formData)
// if (!parsed.success) return parsed.error.format();
