// src/lib/schemas/env-schema.ts
// Zod schema for environment variable validation.
// Runtime validation is critical in Web3/finance to prevent misconfiguration and security issues.
import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  DATABASE_URL: z.string().url(),
  WALLET_RPC_URL: z.string().url(),
  MARKET_API_BASE_URL: z.string().url(),
  FEATURE_FLAGS: z.string().optional(),
});

export type EnvVars = z.infer<typeof envSchema>;

// Example usage:
// const parsed = envSchema.safeParse(process.env);
// if (!parsed.success) throw new Error(parsed.error.message);
