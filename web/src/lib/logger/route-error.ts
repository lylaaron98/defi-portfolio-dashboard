// src/lib/logger/route-error.ts
// Example: Normalizing and logging errors in Next.js route handlers
import { NextRequest, NextResponse } from "next/server";
import { logServerError } from "./server-logger";

type ErrorWithStatus = Error & { status?: number };

export function handleRouteError(e: unknown, req: NextRequest) {
  // Normalize error
  const status =
    e instanceof Error && typeof (e as ErrorWithStatus).status === "number"
      ? (e as ErrorWithStatus).status
      : 500;
  const message = e instanceof Error ? e.message : "Unknown error";
  // Log error (never log sensitive data)
  logServerError("API route error", e, {
    url: req.url,
    method: req.method,
    // Add requestId, userAgent, etc. as needed
  });
  // Return safe error response
  return NextResponse.json({ error: message }, { status });
}

// Comments:
// - Always sanitize error output in API responses.
// - Log enough context for debugging, but never secrets or PII.
