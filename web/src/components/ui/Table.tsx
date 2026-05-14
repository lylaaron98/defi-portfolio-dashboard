// src/components/ui/Table.tsx
// Design System: Table shell for displaying tabular data.
// Extend for sorting, pagination, and real-time updates.
import { cn } from "@/lib/utils";
import React from "react";

export type TableProps = React.TableHTMLAttributes<HTMLTableElement>;

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, children, ...props }, ref) => (
    <table
      ref={ref}
      className={cn("min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm", className)}
      {...props}
    >
      {children}
    </table>
  ),
);
Table.displayName = "Table";
