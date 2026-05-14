// src/stores/currency-store.ts
// Zustand store for selected display currency (UI only)
import { create } from "zustand";

interface CurrencyState {
  currency: string;
  setCurrency: (currency: string) => void;
}

export const useCurrencyStore = create<CurrencyState>((set) => ({
  currency: "USD",
  setCurrency: (currency) => set({ currency }),
}));

// Use Zustand for local UI state. For currency rates, use TanStack Query.
