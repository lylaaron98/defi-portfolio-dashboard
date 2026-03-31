// src/lib/utils.ts
// Utility functions for className composition and more.
export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}
