---
name: portfolio-improvement
description: End-to-end workflow for safely auditing and improving this Next.js portfolio across security, UX, accessibility, maintainability, SEO, and performance.
disable-model-invocation: false
---

# Portfolio Improvement Workflow

Use this skill for meaningful portfolio improvement work. Do not use it for a one-line typo.

## Phase 1 — Establish the baseline

1. Read `AGENTS.md`.
2. Inspect `package.json`, route structure, major components, styles, Firebase/Auth services, and Firestore rules.
3. Check `git status` and do not overwrite unrelated user work.
4. Understand current build/lint/typecheck/test commands before changing them.
5. Use the `portfolio-auditor` subagent for a broad read-only assessment when the task spans multiple areas.

## Phase 2 — Prioritize

Sort work into:

- **P0** — security/data-loss/core functionality.
- **P1** — correctness, accessibility, major UX, architecture, performance.
- **P2** — polish and optional enhancements.

Security and correctness come before redesign.

Avoid a "rewrite everything" plan. Group changes into reviewable slices.

## Phase 3 — Secure data flows

If Firebase/guestbook code is in scope:

1. Invoke `firebase-security-reviewer`.
2. Map each Firestore operation to an intended actor.
3. Implement least-privilege rules.
4. Validate immutable identity fields and user-controlled data.
5. Confirm legitimate create/read/update/delete flows still work.
6. Never treat client UI checks as authorization.

## Phase 4 — Improve architecture

Look for high-value simplifications:

- duplicated project/content data;
- unnecessary Client Component boundaries;
- unsafe `any`;
- repeated UI logic;
- dead/commented code;
- stale debug logs;
- mismatched loading/error behavior.

Refactor only where it supports an actual improvement.

## Phase 5 — Improve portfolio UX

Use `frontend-ux-engineer` for implementation.

Optimize the information hierarchy for a recruiter or collaborator:

1. Clear positioning above the fold.
2. Strong, truthful project evidence.
3. Easy navigation.
4. Obvious contact path.
5. Responsive, accessible presentation.
6. Real assets where available; never fabricate screenshots.

Do not invent metrics, achievements, or experience.

## Phase 6 — Performance and SEO

Review:

- metadata;
- social sharing data;
- image optimization;
- unnecessary client JavaScript;
- font/layout stability;
- dependency weight;
- analytics integration;
- stale dependencies and scripts.

Dependency upgrades must be isolated and verified. Do not blindly jump multiple major versions while redesigning the site.

## Phase 7 — Verify

Before completion invoke `verifier`.

Minimum expectations for changed app code:

- production build;
- TypeScript check when available;
- lint/tests when available and functional;
- diff review.

For UI changes, also check mobile, keyboard navigation, focus, and theme behavior when tooling permits.

## Phase 8 — Handoff

Return:

- what changed and why;
- files changed;
- verification results;
- pre-existing failures;
- facts/questions needing owner confirmation;
- next small recommended batch.

Never say "done" when critical verification is still failing.
