"use client";
// src/lib/query/QueryProvider.tsx
// Provides TanStack Query context to the app as a Client Component
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function QueryProvider({ children }: { children: React.ReactNode }) {
  // Create QueryClient only on the client to avoid serialization issues
  const [client] = React.useState(() => new QueryClient());
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

// Wrapping the app with QueryProvider enables caching, deduplication, and devtools.
