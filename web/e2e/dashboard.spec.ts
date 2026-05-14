// dashboard.spec.ts
// E2E: Only test what unit/component tests cannot (routing, integration, real browser behavior)
import { test, expect } from "@playwright/test";

test.describe("Dashboard smoke tests", () => {
  test("dashboard loads", async ({ page }) => {
    await page.goto("/dashboard");
    await expect(page).toHaveTitle(/DeFi Portfolio Dashboard/i);
    await expect(page.getByTestId("dashboard-root")).toBeVisible();
  });

  test("portfolio widget renders", async ({ page }) => {
    await page.goto("/dashboard");
    // Use data-testid only for key widgets
    await expect(page.getByTestId("portfolio-summary")).toBeVisible();
  });

  test("sidebar navigation works", async ({ page }) => {
    await page.goto("/dashboard");
    // Click sidebar link (add data-testid if needed)
    await page.getByTestId("nav-portfolio").click();
    await expect(page).toHaveURL(/dashboard\/portfolio/);
    await expect(page.getByTestId("portfolio-page")).toBeVisible();
  });
});

// Comments:
// - E2E tests: Cover routing, integration, and real user flows.
// - Unit/component tests: Cover logic, rendering, and edge cases in isolation.
