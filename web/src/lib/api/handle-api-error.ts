// src/lib/api/handle-api-error.ts

/**
 * AppError: Normalized error for all API calls.
 * Centralizing error handling makes it easier to debug, log, and display errors consistently.
 */
export class AppError extends Error {
  status?: number;
  info?: unknown;
  constructor(message: string, status?: number, info?: unknown) {
    super(message);
    this.name = "AppError";
    this.status = status;
    this.info = info;
  }
}

/**
 * Converts any thrown error into an AppError instance.
 * This ensures all errors are handled in a uniform way across the app.
 */
export function toAppError(e: unknown, fallbackMessage = "Unknown error"): AppError {
  if (e instanceof AppError) return e;
  if (e instanceof Error) return new AppError(e.message);
  if (typeof e === "string") return new AppError(e);
  return new AppError(fallbackMessage);
}
