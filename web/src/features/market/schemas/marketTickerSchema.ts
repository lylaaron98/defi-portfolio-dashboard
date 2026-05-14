// src/features/market/schemas/marketTickerSchema.ts
import { z } from "zod";

export const marketTickerSchema = z.object({
  symbol: z.string(),
  name: z.string(),
  price: z.number(),
  priceChange24h: z.number(),
  priceChangePct24h: z.number(),
  volume24h: z.number(),
  marketCap: z.number(),
  logoUrl: z.string().url().optional(),
});

export const marketTickerListSchema = z.array(marketTickerSchema);
