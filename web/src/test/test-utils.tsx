// src/test/test-utils.tsx
import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WalletProvider } from "@/features/wallet/components/WalletProvider";

// Utility to render with all providers (Query, Wallet, etc.)
export function renderWithProviders(ui: ReactNode) {
  const queryClient = new QueryClient();
  return render(
    <WalletProvider>
      <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
    </WalletProvider>,
  );
}

// Add more helpers (e.g., for router, theme) as needed
