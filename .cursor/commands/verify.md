---
name: verify
description: Independently verify the current implementation and working-tree changes before commit.
---

Use the `verifier` subagent.

Review the current diff and the task requirements. Run the strongest relevant checks actually available in this repository, including a production build for application-code changes.

Do not edit files.

Report PASS, FAIL, and UNVERIFIED items; exact commands run; whether failures are pre-existing or introduced by the current changes; and what must be fixed before commit.
