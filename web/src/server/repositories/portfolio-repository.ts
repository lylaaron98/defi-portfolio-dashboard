// src/server/repositories/portfolio-repository.ts
// Repository interface for portfolio data
import type { PortfolioSummary } from "@/features/portfolio/types";

export interface PortfolioRepository {
  getPortfolioSummary(address: string): Promise<PortfolioSummary | null>;
}

// This interface allows swapping between mock and Prisma implementations without changing feature code.
