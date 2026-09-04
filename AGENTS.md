# Philemon Forson Portfolio — Agent Instructions

## Mission

Improve this portfolio into a polished, fast, accessible, maintainable, and secure professional website without inventing personal facts.

The repository is a Next.js App Router portfolio using TypeScript, Tailwind CSS, Firebase Authentication/Firestore, and Vercel Analytics.

## Non-negotiable rules

1. Inspect relevant existing code before editing it.
2. Prefer small, coherent changes over broad rewrites.
3. Do not fabricate employers, dates, job titles, projects, metrics, testimonials, education, skills, links, contact details, or accomplishments.
4. If personal content looks stale or questionable, preserve it and flag it for the owner instead of silently changing the fact.
5. Do not weaken authentication, Firestore rules, validation, TypeScript, accessibility, or security to make a feature work.
6. Do not expose private credentials or add secrets to source control.
7. Do not add a dependency when the existing stack can solve the problem cleanly.
8. Do not remove working features merely because a redesign would be easier.
9. Preserve responsive behavior and dark/light theme support.
10. Never claim a check passed unless you actually ran it and saw it pass.
11. Never use CSS, Tailwind, or SVG gradients. Use a single solid color.

## Engineering approach

Before a meaningful change:

- Identify the user-facing problem.
- Trace the relevant components, data flow, and styles.
- Check for duplicated data or logic before adding more.
- Prefer existing project patterns unless they are the source of the problem.
- State assumptions when the repository does not establish a fact.

While editing:

- Keep TypeScript types explicit at boundaries.
- Avoid `any`; narrow unknown errors safely.
- Keep React client boundaries as small as practical.
- Prefer Server Components for static/render-only UI and Client Components only for browser APIs, state, effects, or interactive behavior.
- Extract shared data/configuration when the same portfolio content is duplicated across pages.
- Use semantic HTML first; ARIA supplements semantics rather than replacing them.
- Keep focus states, keyboard navigation, contrast, reduced-motion behavior, and mobile layout intact.

After editing:

- Review the diff for accidental unrelated changes.
- Run the strongest relevant verification available in the repository.
- At minimum, run a production build for changes that affect application code.
- Report exactly what changed, what was verified, and any remaining risk.

## Portfolio-specific product standard

Optimize for recruiters, hiring managers, collaborators, and technical reviewers.

The site should quickly answer:

- Who is Philemon?
- What does he build?
- What evidence demonstrates the skills?
- What are the strongest projects?
- How can someone contact him?

Favor clear information hierarchy, concrete project evidence, readable typography, restrained motion, strong mobile behavior, and fast loading over visual gimmicks.

## Repository observations to keep in mind

Treat these as audit leads, not permission to make blind changes:

- Firestore security rules require immediate review.
- Portfolio project data appears in more than one location and may be suitable for a single typed data source.
- Some files use `any` and should be narrowed when touched.
- The home page currently becomes a Client Component for hash-scroll behavior; consider isolating browser-only behavior instead of making the whole page client-rendered.
- Verify Vercel Analytics is actually mounted, not merely imported.
- Dependency versions and scripts should be checked before modernization; upgrade incrementally and verify compatibility.

## Definition of done

A task is done only when:

- requested behavior is implemented;
- no known security regression is introduced;
- relevant TypeScript/build checks pass, or failures are clearly documented;
- accessibility is considered for changed UI;
- the final response lists changed files and verification performed.
