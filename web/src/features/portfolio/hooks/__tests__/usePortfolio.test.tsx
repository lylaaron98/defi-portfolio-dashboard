// usePortfolio.test.ts
// Hook test: Mocks the service layer, tests observable behavior only.
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as service from "../../services/portfolioService";
import { usePortfolio } from "../use-portfolio";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={new QueryClient()}>{children}</QueryClientProvider>
);

describe("usePortfolio", () => {
  it("returns portfolio data from service", async () => {
    // Mock the service layer
    vi.spyOn(service, "getPortfolio").mockResolvedValue({
      totalValue: 1000,
      tokens: [],
      allocation: [],
    });
    const { result } = renderHook(() => usePortfolio("0x1234"), { wrapper });
    await waitFor(() => expect(result.current.data).toBeDefined());
    expect(result.current.data?.totalValue).toBe(1000);
  });

  it("handles service errors", async () => {
    vi.spyOn(service, "getPortfolio").mockRejectedValue(new Error("fail"));
    const { result } = renderHook(() => usePortfolio("0x1234"), { wrapper });
    await waitFor(() => expect(result.current.isError).toBe(true));
  });
});
