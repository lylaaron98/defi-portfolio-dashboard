// src/stores/sidebar-store.ts
// Zustand store for sidebar open/closed state (UI only)
import { create } from "zustand";

interface SidebarState {
  open: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  open: false,
  openSidebar: () => set({ open: true }),
  closeSidebar: () => set({ open: false }),
  toggleSidebar: () => set((s) => ({ open: !s.open })),
}));

// Use Zustand for UI state like sidebar toggling. For server data, prefer TanStack Query.
