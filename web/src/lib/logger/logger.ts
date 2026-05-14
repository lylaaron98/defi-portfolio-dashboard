// src/lib/logger/logger.ts
// App-wide structured logging foundation
// - Use for both client and server logs
// - Ready for Sentry/monitoring integration
// - Avoid logging sensitive data (private keys, wallet addresses, PII)

export type LogLevel = "info" | "warn" | "error" | "debug";

export interface LogEntry {
  level: LogLevel;
  message: string;
  context?: Record<string, unknown>;
  error?: unknown;
  timestamp: string;
}

function formatLog(entry: LogEntry) {
  return {
    ...entry,
    timestamp: new Date().toISOString(),
  };
}

// Main logger (can be swapped for Sentry, etc.)
export function log(entry: Omit<LogEntry, "timestamp">) {
  const formatted = formatLog({ ...entry, timestamp: "" });
  if (process.env.NODE_ENV === "production") {
    // TODO: send to remote log aggregator
    // e.g., Sentry.captureMessage(formatted)
  } else {
    // Dev: pretty print

    console[entry.level === "error" ? "error" : "log"]("[LOG]", formatted);
  }
}
