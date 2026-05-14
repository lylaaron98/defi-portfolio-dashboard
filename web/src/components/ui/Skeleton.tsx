// src/components/ui/Skeleton.tsx
// Design System: Skeleton loader for async data fetching UX.
import { cn } from "@/lib/utils";
import React from "react";

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("animate-pulse bg-gray-200 dark:bg-gray-700 rounded", className)}
      {...props}
    />
  ),
);
Skeleton.displayName = "Skeleton";
