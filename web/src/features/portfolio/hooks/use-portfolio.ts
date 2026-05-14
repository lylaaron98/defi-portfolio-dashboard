// React hook for portfolio data using TanStack Query
import { useQuery } from "@tanstack/react-query";
import { getPortfolio } from "../api/get-portfolio";
import { QUERY_KEYS } from "@/lib/query/query-keys";

// Feature hook for portfolio data
// Uses centralized query keys and shared query client defaults
export function usePortfolio(address: string) {
  return useQuery({
    queryKey: QUERY_KEYS.portfolio(address),
    queryFn: () => getPortfolio(address),
    // No need to set staleTime here; uses shared defaults
  });
}
