// src/lib/api/fetch-json.ts
import { AppError, toAppError } from "./handle-api-error";

/**
 * fetchJson centralizes fetch and JSON parsing for all API calls.
 * This makes it easy to add logging, tracing, retries, and auth headers later.
 *
 * @param url - The URL to fetch
 * @param options - Fetch options
 * @returns Parsed JSON response of type T
 * @throws AppError on network or parsing failure
 */
export async function fetchJson<T>(url: string, options?: RequestInit): Promise<T> {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      // Centralized error normalization
      throw new AppError(`API error: ${res.status} ${res.statusText}`, res.status);
    }
    // Defensive: handle empty response
    const text = await res.text();
    if (!text) return undefined as T;
    try {
      return JSON.parse(text) as T;
    } catch (e) {
      throw new AppError("Failed to parse JSON", res.status, text);
    }
  } catch (e) {
    throw toAppError(e);
  }
}
