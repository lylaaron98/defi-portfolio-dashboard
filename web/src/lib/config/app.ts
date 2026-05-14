// src/lib/config/app.ts
// Application-level config: feature flags, app name, version, etc.
// Centralizes config for scalability and maintainability.
import { env } from "./env";

export const appConfig = {
  name: "DeFi Portfolio Dashboard",
  version: "0.1.0",
  environment: env.NODE_ENV,
  featureFlags: env.FEATURE_FLAGS.split(",")
    .map((f) => f.trim())
    .filter(Boolean),
  marketApiBaseUrl: env.MARKET_API_BASE_URL,
  walletRpcUrl: env.WALLET_RPC_URL,
  databaseUrl: env.DATABASE_URL,
};

// This pattern allows for easy extension and central management of app-wide settings.
