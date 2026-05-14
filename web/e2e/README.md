# Playwright E2E Testing

## Running Locally

- `npm run test:e2e` — Run all E2E tests headless
- `npm run test:e2e:headed` — Run E2E tests with browser UI

## CI Setup

- Use `npm run test:e2e:ci` for CI pipelines (installs browsers, runs tests, dot reporter)
- Playwright config auto-starts the dev server on port 3000

## Test Coverage

- E2E tests: Routing, navigation, integration, and real user flows
- Unit/component tests: UI logic, rendering, edge cases in isolation

## Best Practices

- Use `data-testid` only for key widgets and navigation, not for every element
- Avoid coupling tests to CSS or layout
- Keep E2E tests small, reliable, and focused on user-visible behavior
- Add comments to clarify what is covered by E2E vs. unit tests
