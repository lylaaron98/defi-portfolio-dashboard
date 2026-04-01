// Service layer for portfolio business logic
// Orchestrates repository and domain logic
import type { PortfolioSummary } from "@/features/portfolio/types";
import { MockPortfolioRepository } from "../repositories/mock-portfolio-repository";

const repo = new MockPortfolioRepository();

export class PortfolioService {
  async getPortfolioSummary(address: string): Promise<PortfolioSummary | null> {
    // Add business logic, aggregation, or transformation here
    return repo.getPortfolioSummary(address);
  }
}

// This service layer enables easy testing and future expansion (e.g., caching, logging).
