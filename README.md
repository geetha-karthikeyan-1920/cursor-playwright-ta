# cursor-playwright-ta

Playwright test automation project shaped like [elitea_wdio_ta](https://github.com/geetha-karthikeyan-1920/elitea_wdio_ta).

Browser checks use Playwright. The documentation sync utility, story artifacts, MCP placeholders, and agentic SDLC workflow follow the same layout as that repository.

[CI](https://github.com/geetha-karthikeyan-1920/cursor-playwright-ta/actions/workflows/ci.yml) · [Playwright](https://github.com/geetha-karthikeyan-1920/cursor-playwright-ta/actions/workflows/playwright.yml)

## Layout

- `test/pageobjects` and `test/specs` — login flow against [the-internet](https://the-internet.herokuapp.com/login)
- `src/documentationSync.js` — copies Markdown files and writes a JSON manifest
- `test/documentationSync.test.js` — Node test runner coverage for the sync utility
- `.github/agents`, `.github/prompts`, `.github/skills` — agentic SDLC definitions
- `scripts` — SDLC trigger and story bootstrap
- `orchestration` — pipeline scaffold
- `stories` and `outputs` — per-story SDLC artifacts
- `requirements.md`, `architecture.md`, `design-review.md`, `impl-plan.md`, `PR_DESCRIPTION.md` — root SDLC documents

## Setup

```bash
npm install
npx playwright install chromium
```

## Commands

- `npm test` — documentation sync tests
- `npm run test:e2e` — Playwright login spec
- `npm run agentic:sdlc` — print agentic SDLC trigger usage
- `npm run agentic:jira` — print the Jira MCP skill
- `npm run bootstrap:story -- --jira-id EPMCDMETST-59827` — scaffold a story folder
- `npm run orchestration:run` — run the orchestration scaffold

## CI

- `.github/workflows/ci.yml` runs `npm test`
- `.github/workflows/playwright.yml` runs the Playwright suite
