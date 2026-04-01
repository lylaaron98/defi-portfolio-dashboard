// src/components/shared/layout/DashboardContentPlaceholder.tsx
// Placeholder content for dashboard sections
import React from "react";

export function DashboardContentPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-gray-400">
      <div className="text-3xl font-bold mb-2">{label}</div>
      <div className="text-lg">Coming soon...</div>
    </div>
  );
}
