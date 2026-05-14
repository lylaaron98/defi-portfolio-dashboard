// src/lib/web3/config.ts
// EVM chain config for wagmi/rainbowkit
import { mainnet } from "wagmi/chains";

// Keep this list non-empty to satisfy wagmi's tuple chain requirement.
export const supportedChains = [mainnet] as const;
