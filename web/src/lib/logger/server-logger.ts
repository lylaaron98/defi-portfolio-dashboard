// src/lib/logger/server-logger.ts
// Server-safe logging helpers
import { log } from "./logger";

export function logServerInfo(message: string, context?: Record<string, unknown>) {
  log({ level: "info", message, context });
}

export function logServerWarn(message: string, context?: Record<string, unknown>) {
  log({ level: "warn", message, context });
}

export function logServerError(
  message: string,
  error?: unknown,
  context?: Record<string, unknown>,
) {
  log({ level: "error", message, error, context });
}

// Comments:
// - Never log private keys, wallet seeds, or user PII.
// - Use context for request IDs, user agent, or sanitized error info.
