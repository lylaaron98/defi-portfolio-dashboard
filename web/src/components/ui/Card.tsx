// src/components/ui/Card.tsx
// Design System: Reusable Card component
// Modular, theme-ready, and composable for dashboard widgets.
import { cn } from "@/lib/utils";
import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
Card.displayName = "Card";
