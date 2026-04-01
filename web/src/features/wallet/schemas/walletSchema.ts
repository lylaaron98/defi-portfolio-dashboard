// src/features/wallet/schemas/walletSchema.ts
import { z } from "zod";

export const walletInfoSchema = z
  .object({
    address: z.string().min(1).optional(),
    connector: z.any().optional(), // wagmi Connector, runtime validation not strict
    status: z.enum(["disconnected", "connecting", "connected", "error"]),
    chainId: z.number(),
    isWrongNetwork: z.boolean(),
    error: z.instanceof(Error).optional(),
  })
  .superRefine((value, ctx) => {
    if (value.status === "connected" && !value.address) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Connected wallet info must include an address",
        path: ["address"],
      });
    }
  });

export type WalletInfoSchema = typeof walletInfoSchema;
