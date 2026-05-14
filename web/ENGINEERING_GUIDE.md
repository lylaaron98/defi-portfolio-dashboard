# Engineering Guide: Performance Patterns for Dashboard

## 1. General Principles

- **Profile before optimizing**: Use React DevTools and browser profiler to find real bottlenecks.
- **Avoid premature optimization**: Write clear code first, optimize only when needed.
- **Minimize re-renders**: Memoize expensive calculations, avoid prop drilling, and use selectors.
- **Keep components focused**: Prefer small, single-purpose components for easier memoization and testing.

## 2. Memoized Selectors (Example)

```ts
// src/features/portfolio/selectors.ts
import { useMemo } from "react";
import type { PortfolioSummary } from "./types";

export function useTopTokens(summary: PortfolioSummary, count = 5) {
  return useMemo(() => {
    return [...summary.tokens].sort((a, b) => b.value - a.value).slice(0, count);
  }, [summary.tokens, count]);
}
```

## 3. Derived Data Utilities (Example)

```ts
// src/features/market/utils/derived.ts
import type { MarketTicker } from "../types/marketTicker";

export function getTotalMarketCap(tickers: MarketTicker[]): number {
  return tickers.reduce((sum, t) => sum + t.marketCap, 0);
}
```

## 4. Lazy-Loaded Heavy Components (Example)

```ts
// src/features/portfolio/components/HeavyChart.tsx
import dynamic from 'next/dynamic';

export const HeavyChart = dynamic(() => import('./ActualHeavyChart'), {
  ssr: false,
  loading: () => <div>Loading chart...</div>,
});
```

## 5. When to Use Each Pattern

- **useMemo**: For expensive calculations or derived data that depend on props/state. Avoid for simple values.
- **useCallback**: For stable function references passed to child components (especially if children are memoized).
- **React.memo**: For pure functional components that re-render only when props change. Use with care—profile first.
- **dynamic imports**: For large, rarely-used, or heavy components (e.g., charts, modals) to reduce initial bundle size.
- **List virtualization**: For long lists/tables (100+ rows) using libraries like `react-window` or `react-virtualized`.

## 6. Common Causes of Unnecessary Re-renders

- Passing new object/array/function props on every render (fix: useMemo/useCallback)
- Not memoizing derived data or selectors
- Large parent components re-rendering frequently
- Not using React.memo for pure presentational components
- Avoiding key prop mistakes in lists

## 7. Practical Tips

- Profile with real data and user flows
- Memoize only when you see a measurable benefit
- Document why a memoization or optimization is used
- Prefer clarity and maintainability over micro-optimizations
