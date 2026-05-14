// src/lib/api/http-client.ts
import { fetchJson } from "./fetch-json";

/**
 * HttpClient: Extensible API client for internal/external requests.
 * Centralizing API access helps with bug fixing, observability, and future features (auth, retries, tracing).
 */
export class HttpClient {
  constructor(private baseUrl = "") {}

  /**
   * Call an API endpoint and parse the response as JSON.
   * @param path - API path (relative or absolute)
   * @param options - Fetch options
   */
  async get<T>(path: string, options?: RequestInit): Promise<T> {
    return fetchJson<T>(this.baseUrl + path, { ...options, method: "GET" });
  }

  async post<T>(path: string, body: unknown, options?: RequestInit): Promise<T> {
    return fetchJson<T>(this.baseUrl + path, {
      ...options,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers || {}),
      },
      body: JSON.stringify(body),
    });
  }

  // Add put, delete, patch as needed
}

// Example: Singleton for app-wide use
export const apiClient = new HttpClient();
