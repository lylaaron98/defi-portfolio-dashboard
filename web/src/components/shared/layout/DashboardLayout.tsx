// src/components/shared/layout/DashboardLayout.tsx
// Responsive dashboard layout wrapper with sidebar and topbar
import React, { useState } from "react";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardTopbar } from "./DashboardTopbar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      <DashboardTopbar onMenuClick={() => setMobileSidebarOpen(true)} />
      <div className="flex-1 flex">
        {/* Sidebar for desktop and mobile */}
        <DashboardSidebar
          mobileOpen={mobileSidebarOpen}
          onMobileClose={() => setMobileSidebarOpen(false)}
        />
        {/* Overlay for mobile sidebar */}
        {mobileSidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/40 md:hidden"
            onClick={() => setMobileSidebarOpen(false)}
            aria-label="Close sidebar overlay"
          />
        )}
        {/* Main content area */}
        <main className="flex-1 p-6 md:ml-64">{children}</main>
      </div>
    </div>
  );
}
