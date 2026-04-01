// src/features/wallet/hooks/useWallet.ts
"use client";
import { useAccount, useChainId } from "wagmi";
import { useMemo } from "react";
import { WalletStatus, WalletInfo } from "../types/wallet";
import { walletInfoSchema } from "../schemas/walletSchema";

export function useWallet(): WalletInfo {
  const { address, isConnected, connector, isConnecting, isDisconnected } = useAccount();
  const chainId = useChainId();

  // Determine wallet status
  let walletStatus: WalletStatus = "disconnected";
  if (isConnecting) walletStatus = "connecting";
  else if (isConnected) walletStatus = "connected";
  else if (isDisconnected) walletStatus = "disconnected";

  const info: WalletInfo = useMemo(
    () => ({
      address: address ?? undefined,
      connector: connector ?? undefined,
      status: walletStatus,
      chainId,
      isWrongNetwork: false, // Add logic for supported chains if needed
    }),
    [address, connector, walletStatus, chainId],
  );

  // Runtime validation (dev only)
  if (process.env.NODE_ENV === "development") {
    walletInfoSchema.parse(info);
  }

  return info;
}
