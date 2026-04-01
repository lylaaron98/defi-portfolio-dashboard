// src/lib/constants/navigation.ts
// Centralized navigation config for dashboard layout
// Keeps nav structure decoupled from rendering logic

export interface NavItem {
  label: string;
  href: string;
  icon?: string; // Optionally use an icon system
}

export const DASHBOARD_NAV: NavItem[] = [
  { label: "Portfolio", href: "/(dashboard)/portfolio", icon: "portfolio" },
  { label: "Markets", href: "/(dashboard)/markets", icon: "markets" },
  { label: "Trading", href: "/(dashboard)/trading", icon: "trading" },
  { label: "Transactions", href: "/(dashboard)/transactions", icon: "transactions" },
  { label: "Settings", href: "/(dashboard)/settings", icon: "settings" },
];

// This config can be extended for permissions, grouping, etc.
