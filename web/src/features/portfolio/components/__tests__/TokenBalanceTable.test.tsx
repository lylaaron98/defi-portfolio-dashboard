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
          address: "0x1234",
          totalValueUsd: "1000",
          balances: [{ token: "ETH", amount: "2", address: "0xabc...1234" }],
          updatedAt: Date.now(),
        }}
      />,
    );

    expect(screen.getByText("ETH")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("0xabc...1234")).toBeInTheDocument();
  });

  it("shows empty state", () => {
    renderWithProviders(
      <TokenBalanceTable
        summary={{
          address: "0x1234",
          totalValueUsd: "0",
          balances: [],
          updatedAt: Date.now(),
        }}
      />,
    );

    expect(screen.getByText(/no tokens/i)).toBeInTheDocument();
  });
});
