// src/lib/logger/client-logger.ts
// Client-safe logging helpers
import { log } from "./logger";

export function logClientInfo(message: string, context?: Record<string, unknown>) {
  log({ level: "info", message, context });
}

export function logClientWarn(message: string, context?: Record<string, unknown>) {
  log({ level: "warn", message, context });
}

export function logClientError(
  message: string,
  error?: unknown,
  context?: Record<string, unknown>,
) {
  log({ level: "error", message, error, context });
}

// Comments:
// - Never log private keys, wallet seeds, or user PII.
// - Use context for non-sensitive debug info (e.g., UI state, feature flags).
