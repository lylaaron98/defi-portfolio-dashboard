// src/lib/errors/app-error.ts
// Custom AppError for clean, extensible error handling across the app.
import { ERROR_CODES, ErrorCode } from "./error-codes";

export class AppError extends Error {
  public readonly code: ErrorCode;
  public readonly cause?: unknown;

  constructor(code: ErrorCode, message?: string, cause?: unknown) {
    super(message || ERROR_CODES[code] || "Unknown error");
    this.name = "AppError";
    this.code = code;
    this.cause = cause;
    Error.captureStackTrace?.(this, AppError);
  }
}

// This pattern allows for consistent error handling and future extensibility (e.g., logging, i18n).
