// usePortfolio.test.ts
// Hook test: Mocks the service layer, tests observable behavior only.
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as api from "../../api/get-portfolio";
import { usePortfolio } from "../use-portfolio";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("usePortfolio", () => {
  it("returns portfolio data from service", async () => {
    vi.spyOn(api, "getPortfolio").mockResolvedValue({
      address: "0x1234",
      totalValueUsd: "1000",
      balances: [],
      updatedAt: Date.now(),
    });

    const { result } = renderHook(() => usePortfolio("0x1234"), { wrapper });

    await waitFor(() => expect(result.current.data).toBeDefined());
    expect(result.current.data?.totalValueUsd).toBe("1000");
  });

  it("handles service errors", async () => {
    vi.spyOn(api, "getPortfolio").mockRejectedValue(new Error("fail"));

    const { result } = renderHook(() => usePortfolio("0x1234"), { wrapper });

    await waitFor(() => expect(result.current.isError).toBe(true));
  });
});
