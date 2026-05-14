"use client";
// src/lib/query/QueryProvider.tsx
// Provides TanStack Query context to the app as a Client Component
import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { createQueryClient } from "./query-client";

export function QueryProvider({ children }: { children: React.ReactNode }) {
  // Create QueryClient only on the client to avoid serialization issues
  const [client] = React.useState(() => createQueryClient());
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

// Wrapping the app with QueryProvider enables caching, deduplication, and devtools.
