// src/components/ui/Badge.tsx
// Design System: Reusable Badge component
// Useful for status, tags, and notifications.
import { cn } from "@/lib/utils";
import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "danger";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-block px-2 py-0.5 rounded text-xs font-semibold",
        variant === "default" && "bg-gray-200 text-gray-800",
        variant === "success" && "bg-green-100 text-green-800",
        variant === "warning" && "bg-yellow-100 text-yellow-800",
        variant === "danger" && "bg-red-100 text-red-800",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
);
Badge.displayName = "Badge";
