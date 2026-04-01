// src/components/shared/layout/DashboardSidebar.tsx
// Modular, responsive sidebar for dashboard navigation
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DASHBOARD_NAV } from "@/lib/constants/navigation";

export function DashboardSidebar({
  mobileOpen,
  onMobileClose,
}: {
  mobileOpen: boolean;
  onMobileClose: () => void;
}) {
  const pathname = usePathname();
  return (
    <aside
      className={`fixed z-40 inset-y-0 left-0 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transform transition-transform duration-200 ease-in-out
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        md:static md:translate-x-0 md:w-64 md:block`}
      aria-label="Sidebar"
    >
      <div className="h-16 flex items-center px-6 font-bold text-lg border-b border-gray-100 dark:border-gray-800">
        Web3 Dashboard
        <button className="ml-auto md:hidden" onClick={onMobileClose} aria-label="Close sidebar">
          ✕
        </button>
      </div>
      <nav className="flex-1 py-4 px-2 space-y-1">
        {DASHBOARD_NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center px-4 py-2 rounded transition-colors
              ${pathname === item.href ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 font-semibold" : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
          >
            {/* Placeholder for icon: <span className="mr-3">{item.icon}</span> */}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
