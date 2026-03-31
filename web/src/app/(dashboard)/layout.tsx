// src/app/(dashboard)/layout.tsx
// Dashboard layout: sidebar, top navbar, content container.
// Modular for future feature expansion (wallet, i18n, etc.)
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-950">
      <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-4">
        {/* Sidebar: Add navigation links here */}
        <div className="font-bold text-lg mb-6">Dashboard</div>
        <nav>
          <ul className="space-y-2">
            <li><a href="/" className="text-blue-600 hover:underline">Home</a></li>
            {/* Add more links */}
          </ul>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center px-6">
          {/* Top Navbar: Add actions, user menu, etc. */}
          <span className="font-semibold text-xl">Portfolio Dashboard</span>
        </header>
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
