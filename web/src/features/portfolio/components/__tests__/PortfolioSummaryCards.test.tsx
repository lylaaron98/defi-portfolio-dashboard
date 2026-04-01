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
          totalValue: 1000,
          tokens: [],
          allocation: [],
        }}
      />,
    );
    expect(screen.getByText(/total value/i)).toBeInTheDocument();
    expect(screen.getByText("$1,000")).toBeInTheDocument();
  });

  it("handles empty summary", () => {
    renderWithProviders(
      <PortfolioSummaryCards summary={{ totalValue: 0, tokens: [], allocation: [] }} />,
    );
    expect(screen.getByText("$0")).toBeInTheDocument();
  });
});
