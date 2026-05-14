// src/test/test-utils.tsx
import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Utility to render with all providers (Query, Wallet, etc.)
export function renderWithProviders(ui: ReactNode) {
  const queryClient = new QueryClient();

  return render(<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>);
}

// Add more helpers (e.g., for router, theme) as needed
