// src/components/ui/Button.tsx
// Design System: Reusable Button component
// Modular, theme-ready, and accessible. Extend for wallet integration, loading, etc.
import { cn } from "@/lib/utils";
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", loading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2 rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
          variant === "primary" && "bg-blue-600 text-white hover:bg-blue-700",
          variant === "secondary" && "bg-gray-100 text-gray-900 hover:bg-gray-200",
          variant === "outline" && "border border-gray-300 text-gray-900 hover:bg-gray-50",
          loading && "opacity-50 cursor-not-allowed",
          className
        )}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? <span className="animate-pulse">...</span> : children}
      </button>
    );
  }
);
Button.displayName = "Button";
