---
name: improve-portfolio
description: Implement a controlled portfolio improvement pass using the repository workflow and independent verification.
---

Use the `portfolio-improvement` skill.

If there is no recent audit in the conversation, run the `portfolio-auditor` first.

Implement the smallest coherent batch requested by the user. If no batch is specified, choose only the highest-confidence P0/P1 items; do not start a full redesign automatically.

Requirements:

- preserve factual personal content;
- prioritize security and correctness;
- avoid unnecessary dependencies;
- keep changes reviewable;
- run independent `verifier` review before completion;
- report files changed and exact checks run.
