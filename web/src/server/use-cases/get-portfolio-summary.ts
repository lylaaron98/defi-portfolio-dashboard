// Use-case for getting a portfolio summary
// Encapsulates business rules and error handling
import { PortfolioService } from "../services/portfolio-service";
import type { PortfolioSummary } from "@/features/portfolio/types";

export async function getPortfolioSummaryUseCase(
  address: string,
): Promise<{ data?: PortfolioSummary; error?: string }> {
  const service = new PortfolioService();
  try {
    const summary = await service.getPortfolioSummary(address);
    if (!summary) {
      return { error: "Portfolio not found" };
    }
    return { data: summary };
  } catch {
    return { error: "Internal server error" };
  }
}

// This use-case layer makes it easy to test business logic and swap service implementations.
