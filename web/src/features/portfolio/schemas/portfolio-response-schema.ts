// src/features/portfolio/schemas/portfolio-response-schema.ts
// Zod schema for portfolio API response validation.
import { z } from "zod";

export const tokenBalanceSchema = z.object({
  token: z.string(),
  amount: z.string(),
  address: z.string(),
});

export const portfolioSummarySchema = z.object({
  address: z.string(),
  totalValueUsd: z.string(),
  balances: z.array(tokenBalanceSchema),
  updatedAt: z.number(),
});

export type PortfolioSummary = z.infer<typeof portfolioSummarySchema>;

// Example: Validate API response
// const parsed = portfolioSummarySchema.safeParse(apiResponse.data)
// if (!parsed.success) throw new Error(parsed.error.message);
