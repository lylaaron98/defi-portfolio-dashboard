// src/app/(dashboard)/layout.tsx
// Dashboard layout: sidebar, top navbar, content container.
// Modular for future feature expansion (wallet, i18n, etc.)
import React from "react";
import { DashboardShell } from "@/features/dashboard/components/dashboard-shell";

export const dynamic = "force-dynamic";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <DashboardShell>{children}</DashboardShell>;
}
