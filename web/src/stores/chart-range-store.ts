// src/stores/chart-range-store.ts
// Zustand store for chart time range selection (UI only)
import { create } from "zustand";

export type ChartRange = "1D" | "1W" | "1M" | "1Y" | "ALL";

interface ChartRangeState {
  range: ChartRange;
  setRange: (range: ChartRange) => void;
}

export const useChartRangeStore = create<ChartRangeState>((set) => ({
  range: "1M",
  setRange: (range) => set({ range }),
}));

// Use Zustand for UI state like chart range. For chart data, use TanStack Query.
