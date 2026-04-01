// src/features/wallet/schemas/address-schema.ts
// Zod schema for wallet address validation.
import { z } from "zod";

export const addressSchema = z.string().regex(/^0x[a-fA-F0-9]{40}$/, "Invalid wallet address");

export type WalletAddress = z.infer<typeof addressSchema>;

// Example: Validate address
// const parsed = addressSchema.safeParse(address)
// if (!parsed.success) throw new Error(parsed.error.message);
