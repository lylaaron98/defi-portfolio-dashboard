// src/components/shared/layout/DashboardTopbar.tsx
// Top navigation bar for dashboard
import React from "react";

export function DashboardTopbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center px-6 md:pl-72">
      <button className="md:hidden mr-4" onClick={onMenuClick} aria-label="Open sidebar">
        ☰
      </button>
      <span className="font-semibold text-xl">Portfolio Dashboard</span>
      {/* Placeholder for user menu, notifications, etc. */}
    </header>
  );
}
