// src/features/wallet/components/WalletProvider.tsx
"use client";
import { ReactNode } from "react";
import { WagmiProvider } from "wagmi";
import {
  RainbowKitProvider,
  darkTheme,
  lightTheme,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit";
import { wagmiConfig } from "@/lib/web3/connectors";
import { mainnet } from "wagmi/chains";

export function WalletProvider({ children }: { children: ReactNode }) {
  // wagmiConfig.chains is set in connectors.ts using getDefaultConfig
  return (
    <WagmiProvider config={wagmiConfig}>
      <RainbowKitProvider theme={{ lightMode: lightTheme(), darkMode: darkTheme() }}>
        {children}
      </RainbowKitProvider>
    </WagmiProvider>
  );
}
