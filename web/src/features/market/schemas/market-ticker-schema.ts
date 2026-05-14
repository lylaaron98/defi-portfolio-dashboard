// src/features/market/schemas/market-ticker-schema.ts
// Zod schema for market ticker API response validation.
import { z } from "zod";

export const marketTickerSchema = z.object({
  symbol: z.string(),
  priceUsd: z.string(),
  change24h: z.string(),
  volume24h: z.string(),
  lastUpdated: z.number(),
});

export type MarketTicker = z.infer<typeof marketTickerSchema>;

// Example: Validate API response
// const parsed = marketTickerSchema.safeParse(apiResponse.data)
// if (!parsed.success) throw new Error(parsed.error.message);
