# AGENTS.md

Instructions for coding agents working in this repository.

## Project overview

`@sheplu/eslint-config-eslint` is a flat-config ESLint configuration that ships **only** core ESLint rules (no plugins). Every non-deprecated upstream rule is configured explicitly so nothing is left to defaults. A scheduled CI job diffs the config against `eslint.org/docs/latest/rules/` and opens an issue when upstream rules drift.

- Entry point: `index.js` (exports `eslintRules`)
- Rule sources in `src/`, grouped by ESLint's own doc categories:
    - `src/eslint-problems.js` — Possible problems
    - `src/eslint-suggestions.js` — Suggestions
    - `src/eslint-layouts.js` — Layout & formatting (intentionally minimal)
- Tests in `test/` (Node built-in `node:test`, no framework)
- Drift check: `test/review-rules.js` + the upstream assertion in `test/index.test.js`

## Environment

- Node `>= 24` (uses `node --test --experimental-test-coverage`)
- ESLint `>= 10` (flat config only)
- ESM: `"type": "module"` — use `import`/`export`, no CommonJS
- Git hooks: `.npmrc` sets `ignore-scripts=true`, so `npm ci` does **not** wire hooks automatically. Run `npm run setup:hooks` once after cloning to point `core.hooksPath` at `.githooks/` (pre-commit and pre-push run lint/tests locally).

## Commands

```sh
npm ci                   # install dependencies
npm run setup:hooks      # wire .githooks/ as core.hooksPath (run once after cloning)
npm test                 # node --test (includes live upstream drift check — needs network)
npm run test:coverage    # same, with 100% line/branch/function coverage enforced
npm run lint             # eslint .
npm run lint:fix         # eslint . --fix
npm audit                # must pass with zero advisories (see CI)
```

The upstream drift test in `test/index.test.js` fetches `eslint.org` at runtime. It will fail without network access — that is expected, not a bug to "fix" by mocking.

## AI tooling (apkg)

This repo uses [`apkg`](https://apkg.ai) to distribute AI-tooling assets (agent rules, prompts, etc.) without committing vendor-specific files to the tree. The manifest is `apkg.json` and the lockfile is `apkg-lock.json` — both are committed.

Tooling directories are **gitignored** and provisioned on demand:

- `.codex/`, `.claude/`, `.cursor/`, `CLAUDE.md`, and `apkg_packages/` are ignored (see `.gitignore`).
- CI runs `apkg-ai/setup-apkg` in `.github/workflows/quality-gates.yaml` with `--frozen-lockfile` before the test step, so workflow-authoring rules are present when tests run.
- Locally, if you contribute using an AI agent and want these rule files materialized, install `apkg` and run its install command against this repo — see the upstream docs. The `<!-- apkg:rules -->` block below is maintained by `apkg` and points at paths that only exist after installation.

## Code style

- Tabs for indentation (width 4), LF line endings, single quotes, final newline. See `.editorconfig`.
- Linted by the package's own config plus `@sheplu/eslint-config` stylistic rules — run `npm run lint` before proposing changes.
- Rule severities must be strings (`'off' | 'warn' | 'error'`), never numeric. A test enforces this.
- Prefer explicit rule configuration with spelled-out options over shorthand — the whole point of this package is that nothing is implicit.

## When adding or changing rules

1. Place the rule in the file matching its ESLint doc category (`problems` / `suggestions` / `layouts`).
2. Do not define the same rule in more than one source file — a test enforces uniqueness.
3. Keep every rule at `error` with explicit options unless there is a clear reason otherwise.
4. Run `npm test` — the upstream diff will catch renamed/removed rules.

## CI quality gates

`.github/workflows/quality-gates.yaml` runs on every push to `main` and every PR:

1. `npm ci`
2. `npm audit` — **must pass with no advisories**. Do not add `--audit-level` to filter findings; fix or upgrade the offending dependency instead.
3. `npm run lint`
4. `apkg-ai/setup-apkg` — installs AI-tooling assets from `apkg-lock.json` (`--frozen-lockfile`).
5. `npm run test:coverage` — coverage thresholds are 100% for lines, branches, and functions.

A separate weekly workflow (`eslint-rules-drift.yaml`) runs the upstream diff and opens an issue on drift.

## Pull requests

- Keep changes focused; no drive-by refactors in rule-change PRs.
- Commit style follows conventional-ish prefixes used in history (`feat:`, `fix:`, `chore:`, `doc:`).
- Update `README.md` if user-facing behavior changes; do not create other docs unless asked.

<!-- apkg:rules -->
## Rules

- [descriptive-workflow-names](.codex/rules/@sheplu/github-workflows/descriptive-workflow-names.md)
- [keep-actions-up-to-date](.codex/rules/@sheplu/github-workflows/keep-actions-up-to-date.md)
- [minimal-permissions](.codex/rules/@sheplu/github-workflows/minimal-permissions.md)
- [minimize-secrets-exposure](.codex/rules/@sheplu/github-workflows/minimize-secrets-exposure.md)
- [pin-actions-by-sha](.codex/rules/@sheplu/github-workflows/pin-actions-by-sha.md)
- [prefer-trusted-actions](.codex/rules/@sheplu/github-workflows/prefer-trusted-actions.md)
- [set-timeout-minutes](.codex/rules/@sheplu/github-workflows/set-timeout-minutes.md)
- [use-caching](.codex/rules/@sheplu/github-workflows/use-caching.md)
- [use-concurrency-groups](.codex/rules/@sheplu/github-workflows/use-concurrency-groups.md)
- [use-latest-language-versions](.codex/rules/@sheplu/github-workflows/use-latest-language-versions.md)
<!-- /apkg:rules -->
