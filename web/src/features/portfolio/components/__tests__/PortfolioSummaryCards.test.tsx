// PortfolioSummaryCards.test.tsx
// Component test: Only tests rendering and behavior, not implementation details.
import { renderWithProviders } from "@/test/test-utils";
import { PortfolioSummaryCards } from "../portfolio-summary-cards";
import { screen } from "@testing-library/react";

describe("PortfolioSummaryCards", () => {
  it("renders summary data", () => {
    renderWithProviders(
      <PortfolioSummaryCards
        summary={{
          address: "0x1234",
          totalValueUsd: "1000",
          balances: [],
          updatedAt: Date.now(),
        }}
      />,
    );

    expect(screen.getByText(/total value/i)).toBeInTheDocument();
    expect(screen.getByText("$1000")).toBeInTheDocument();
  });

  it("handles empty summary", () => {
    renderWithProviders(
      <PortfolioSummaryCards
        summary={{
          address: "0x1234",
          totalValueUsd: "0",
          balances: [],
          updatedAt: Date.now(),
        }}
      />,
    );

    expect(screen.getByText("$0")).toBeInTheDocument();
  });
});
