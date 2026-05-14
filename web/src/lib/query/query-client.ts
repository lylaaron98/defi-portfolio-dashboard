// src/lib/query/query-client.ts
// Factory for TanStack QueryClient with production-friendly defaults
import { QueryClient } from "@tanstack/react-query";

export function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60_000, // 1 minute
        gcTime: 5 * 60_000, // 5 minutes
        retry: 2, // Retry failed queries twice
        refetchOnWindowFocus: false, // Avoid noisy refetches
      },
    },
  });
}

// Centralizing QueryClient config improves maintainability and consistency.
