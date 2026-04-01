# API Client Usage Examples

## 1. Calling an internal Next.js route handler

```ts
import { apiClient } from "./http-client";

// Example: GET /api/portfolio?address=0x1234
const data = await apiClient.get<PortfolioResponse>("/api/portfolio?address=0x1234");
```

## 2. Calling an external API (e.g., CoinGecko)

```ts
import { apiClient } from "./http-client";

// Example: GET external API
const tickers = await apiClient.get<MarketTicker[]>(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
);
```

## 3. Handling errors

```ts
import { apiClient } from "./http-client";
import { AppError } from "./handle-api-error";

try {
  const data = await apiClient.get<MyType>("/api/some-endpoint");
} catch (e) {
  if (e instanceof AppError) {
    // Centralized error handling
    console.error(e.status, e.message);
  }
}
```

---

**Why centralize API access?**

- One place to add auth headers, retries, or logging for all requests
- Consistent error handling and normalization (AppError)
- Easier to debug and trace bugs (all fetches go through one layer)
- Future extensibility: add tracing, metrics, or request hooks in one place
