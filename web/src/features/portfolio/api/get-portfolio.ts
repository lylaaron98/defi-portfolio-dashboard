// API handler for getting portfolio data (mocked)
import { fetchPortfolio } from "../services/portfolio.service";

export async function getPortfolio(address: string) {
  // In production, add authentication, error handling, etc.
  return fetchPortfolio(address);
}
