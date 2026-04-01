// src/lib/config/env.ts
// Centralized, type-safe environment variable validation for scalability and security.
// Avoids direct process.env usage across the app.

interface Env {
  NODE_ENV: "development" | "production" | "test";
  DATABASE_URL: string;
  WALLET_RPC_URL: string;
  MARKET_API_BASE_URL: string;
  FEATURE_FLAGS: string; // Comma-separated feature flags
}

function getEnvVar(key: keyof Env, fallback?: string): string {
  const value = process.env[key];
  if (typeof value === "undefined" || value === "") {
    if (fallback !== undefined) return fallback;
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

export const env: Env = {
  NODE_ENV: (process.env.NODE_ENV as Env["NODE_ENV"]) || "development",
  DATABASE_URL: getEnvVar("DATABASE_URL"),
  WALLET_RPC_URL: getEnvVar("WALLET_RPC_URL"),
  MARKET_API_BASE_URL: getEnvVar("MARKET_API_BASE_URL"),
  FEATURE_FLAGS: process.env.FEATURE_FLAGS || "",
};

// This setup ensures all required env vars are validated at startup, improving reliability and maintainability.
