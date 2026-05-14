// src/lib/web3/connectors.ts
// wagmi v1+ and RainbowKit v1+ connectors setup
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  coinbaseWallet,
  injectedWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { supportedChains } from "./config";

const appName = "DeFi Portfolio Dashboard";
const defaultProjectId = "fallback-walletconnect-project-id";

function isValidProjectId(projectId: string | undefined): projectId is string {
  if (!projectId) return false;
  return projectId !== "YOUR_WALLETCONNECT_PROJECT_ID" && projectId !== defaultProjectId;
}

function hasCoinbaseInjectedProvider(): boolean {
  if (typeof window === "undefined") return false;

  const ethereum = (
    window as typeof window & {
      ethereum?: {
        isCoinbaseWallet?: boolean;
        providers?: Array<{ isCoinbaseWallet?: boolean }>;
      };
    }
  ).ethereum;

  if (!ethereum) return false;
  if (ethereum.isCoinbaseWallet) return true;
  return Array.isArray(ethereum.providers)
    ? ethereum.providers.some(
        (provider: { isCoinbaseWallet?: boolean }) => provider?.isCoinbaseWallet,
      )
    : false;
}

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? defaultProjectId;
const includeWalletConnect = isValidProjectId(projectId);

const recommendedWallets = [
  injectedWallet,
  ...(includeWalletConnect ? [walletConnectWallet] : []),
  ...(hasCoinbaseInjectedProvider() ? [coinbaseWallet] : []),
];

export const wagmiConfig = getDefaultConfig({
  appName,
  projectId,
  wallets: [
    {
      groupName: "Available Wallets",
      wallets: recommendedWallets,
    },
  ],
  chains: supportedChains,
});
