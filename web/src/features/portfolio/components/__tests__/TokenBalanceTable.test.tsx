// TokenBalanceTable.test.tsx
// Component test: Focuses on table rendering and user-visible output.
import { renderWithProviders } from "@/test/test-utils";
import { TokenBalanceTable } from "../token-balance-table";
import { screen } from "@testing-library/react";

describe("TokenBalanceTable", () => {
  it("renders token rows", () => {
    renderWithProviders(
      <TokenBalanceTable
        summary={{
          totalValue: 1000,
          tokens: [{ symbol: "ETH", name: "Ethereum", balance: 2, price: 500, value: 1000 }],
          allocation: [],
        }}
      />,
    );
    expect(screen.getByText("ETH")).toBeInTheDocument();
    expect(screen.getByText("Ethereum")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("$500")).toBeInTheDocument();
  });

  it("shows empty state", () => {
    renderWithProviders(
      <TokenBalanceTable summary={{ totalValue: 0, tokens: [], allocation: [] }} />,
    );
    expect(screen.getByText(/no tokens/i)).toBeInTheDocument();
  });
});
