# Cursor Setup for the Philemon Forson Portfolio

This repository kit is intentionally split by responsibility. Keeping instructions focused reduces prompt bloat and makes Cursor more reliable.

## What each layer does

- `AGENTS.md` — short global invariants that should apply everywhere.
- `.cursor/rules/*.mdc` — scoped, persistent project rules. Cursor recognizes `.mdc` files in this directory; plain `.md` rule files are not a substitute.
- `.cursor/agents/*.md` — specialist subagents for isolated planning, security, UX, and verification work.
- `.cursor/skills/portfolio-improvement/SKILL.md` — the repeatable multi-step workflow for improving the portfolio.
- `.cursor/commands/*.md` — explicit slash commands for common workflows.
- `FIRST_RUN_PROMPT.md` — the first prompt to paste into Cursor Agent after adding this kit.
- `INITIAL_AUDIT.md` — known issues and investigation leads from the current public repository.

## Installation

Copy this kit into the root of the repository, preserving the folder names.

Expected structure:

```text
philemon-forson/
├── AGENTS.md
├── FIRST_RUN_PROMPT.md
├── INITIAL_AUDIT.md
├── CURSOR_SETUP.md
└── .cursor/
    ├── agents/
    │   ├── firebase-security-reviewer.md
    │   ├── frontend-ux-engineer.md
    │   ├── portfolio-auditor.md
    │   └── verifier.md
    ├── commands/
    │   ├── audit-portfolio.md
    │   ├── improve-portfolio.md
    │   └── verify.md
    ├── rules/
    │   ├── 00-project-core.mdc
    │   ├── 10-nextjs-typescript.mdc
    │   ├── 20-ui-accessibility.mdc
    │   ├── 30-firebase-security.mdc
    │   ├── 40-content-integrity.mdc
    │   └── 50-verification.mdc
    └── skills/
        └── portfolio-improvement/
            └── SKILL.md
```

Commit these files to Git so the same behavior follows the repository.

## Recommended first use

1. Open the repository in Cursor.
2. Start a fresh Agent conversation.
3. Paste the contents of `FIRST_RUN_PROMPT.md`.
4. Let the audit complete before accepting a large redesign.
5. Review the proposed P0/P1 work.
6. Ask Cursor to implement one coherent slice at a time.
7. Run `/verify` before committing.

## Recommended editing cadence

Use small checkpoints instead of one giant autonomous request:

```text
Audit → Security/correctness → Information architecture → UI polish → Performance/SEO → Final verification
```

This makes regressions easier to identify and gives you cleaner Git history.

## When to use each agent

### `portfolio-auditor`

Use first. It is read-only and should produce evidence-based priorities instead of immediately changing the site.

### `frontend-ux-engineer`

Use for layout, responsive behavior, component structure, accessibility, typography, navigation, project presentation, and interaction polish.

### `firebase-security-reviewer`

Use for Firebase Auth, guestbook behavior, Firestore access rules, ownership checks, validation, abuse resistance, and data-flow risk.

### `verifier`

Use after implementation. It is deliberately skeptical and should independently run checks and inspect the diff.

## Rules vs skills vs agents

Use **rules** for short constraints that should reliably apply to matching files.

Use a **skill** for the complete repeatable portfolio-improvement process.

Use **subagents** when a task benefits from an isolated specialist context or independent verification.

Avoid turning every preference into a rule. Excessive always-on instructions can make the agent less focused.

## Hooks

No automatic project hook is enabled in this kit on purpose.

Hooks are best for deterministic enforcement, but running a production build after every file edit would be slow and noisy. Start with the verification command and skill. Once the project's lint/typecheck/test scripts are modernized and stable, a lightweight formatting or destructive-command guard hook can be added deliberately.

## Good prompts to use after setup

```text
/audit-portfolio
```

```text
/improve-portfolio Implement only the P0 security and correctness items from the audit. Keep the visual design mostly intact.
```

```text
Use the frontend-ux-engineer to improve the homepage hero and project cards without changing any factual portfolio content.
```

```text
Use the firebase-security-reviewer on the guestbook and Firestore rules. Do not edit yet; give me the threat model and minimum safe rule design first.
```

```text
/verify
```

## Git practice

Before a large improvement pass, work on a branch.

Good commit boundaries:

- `fix: secure guestbook firestore access`
- `refactor: centralize portfolio project data`
- `fix: reduce unnecessary client rendering`
- `feat: improve project presentation and responsive layout`
- `chore: modernize validation and build scripts`

Do not bundle dependency upgrades, a full redesign, Firestore-rule changes, and content rewrites into one commit.
