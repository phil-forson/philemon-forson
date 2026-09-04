# First Cursor Agent Prompt

Use the repository instructions, project rules, agents, and the `portfolio-improvement` skill.

Start with the `portfolio-auditor` subagent and perform a repository-wide audit before changing code. Then create a prioritized plan with P0, P1, and P2 items.

Requirements:

- Treat security and correctness as higher priority than visual redesign.
- Specifically review `firestore.rules`, Firebase Auth, guestbook create/update/delete/like behavior, and ownership/validation.
- Review the Next.js App Router client/server boundaries.
- Find duplicated portfolio data and duplicated UI logic.
- Review TypeScript quality, especially `any`, error handling, and data types.
- Review responsive UX, keyboard accessibility, semantic HTML, focus states, contrast, reduced motion, and loading/error states.
- Review SEO/metadata, images, performance, analytics integration, dead code, dependencies, and package scripts.
- Verify project links and content consistency from the codebase when possible.
- Do not invent or alter personal facts, employment history, project claims, metrics, URLs, or contact details.
- Do not do a full rewrite just because it is easier.
- Do not install new packages during the audit.

After the audit, implement only the highest-confidence P0 security/correctness fixes first. Keep each change small and reversible.

Before marking that first implementation pass complete, use the `verifier` subagent and run the relevant build/type/lint checks that are actually available. Report failures exactly instead of hiding or bypassing them.

At the end, give me:

1. Findings by severity.
2. Files changed.
3. What you intentionally did not change.
4. Commands/checks run and their results.
5. The next recommended small batch of work.
