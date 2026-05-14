// src/stores/watchlist-store.ts
// Zustand store for watchlist (local UI state only)
import { create } from "zustand";

interface WatchlistState {
  watchlist: string[];
  addToWatchlist: (symbol: string) => void;
  removeFromWatchlist: (symbol: string) => void;
  isWatched: (symbol: string) => boolean;
}

export const useWatchlistStore = create<WatchlistState>((set, get) => ({
  watchlist: [],
  addToWatchlist: (symbol) => set((s) => ({ watchlist: [...s.watchlist, symbol] })),
  removeFromWatchlist: (symbol) =>
    set((s) => ({ watchlist: s.watchlist.filter((smb) => smb !== symbol) })),
  isWatched: (symbol) => get().watchlist.includes(symbol),
}));

// Zustand is ideal for local, client-only state. Use TanStack Query for remote/server data.
