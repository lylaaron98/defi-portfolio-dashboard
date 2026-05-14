// API route handler for /api/portfolio
// Thin handler: delegates to use-case, returns typed JSON
import { NextRequest } from "next/server";
import { getPortfolioSummaryUseCase } from "@/server/use-cases/get-portfolio-summary";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const address = searchParams.get("address");
  if (!address) {
    return Response.json({ error: "Missing address parameter" }, { status: 400 });
  }
  const result = await getPortfolioSummaryUseCase(address);
  if (result.error) {
    return Response.json({ error: result.error }, { status: 404 });
  }
  return Response.json({ data: result.data });
}

// This structure keeps the route handler focused on HTTP concerns, not business logic.
// It supports scalability, testability, and future migration to real DBs or more complex logic.
