# CI/CD Guidance

- The GitHub Actions workflow runs on every PR and push to main.
- Steps: install, lint, typecheck, unit tests (E2E optional for speed).
- Keeps main branch stable and production-ready.
- Catches bugs, type errors, and style issues before merge.
- E2E can be enabled for full-stack confidence as the project matures.
- Scripts:
  - `npm run lint` — code style and best practices
  - `npm run typecheck` — TypeScript safety
  - `npm run test:unit` — fast, reliable unit/component tests
  - `npm run test:e2e:ci` — (optional) Playwright browser tests
