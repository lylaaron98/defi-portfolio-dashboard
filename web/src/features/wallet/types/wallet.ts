// src/features/wallet/types/wallet.ts
import { Connector } from "wagmi";

export type WalletStatus = "disconnected" | "connecting" | "connected" | "error";

export interface WalletInfo {
  address?: string;
  connector?: Connector;
  status: WalletStatus;
  chainId: number;
  isWrongNetwork: boolean;
  error?: Error;
}
