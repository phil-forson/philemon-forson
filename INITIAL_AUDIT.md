# Initial Repository Audit Leads

These observations come from a review of the public repository and are intended to give Cursor a useful starting point. Cursor should confirm each item against the local checkout before editing.

## P0 — Security

### Firestore rules are globally open

Current `firestore.rules` contains a recursive rule equivalent to:

```text
allow read, write: if true;
```

That means Firestore authorization is not enforcing authenticated ownership or field validation.

Before deploying a guestbook that allows mutations, design least-privilege rules around the actual product behavior.

Questions Cursor should answer from the implementation:

- Can anonymous users create entries?
- Must a user be authenticated to post?
- Who may edit or delete an entry?
- Can arbitrary users change another entry's `userId`, author fields, or like count?
- Are message/name lengths and allowed fields validated?
- Should reads remain public?
- Is rate limiting or abuse protection needed beyond Firestore rules?

Do not "fix" this by merely hiding UI buttons. Authorization belongs in Firestore rules as well.

## P1 — Correctness and architecture

### Whole home page is a Client Component for hash scrolling

`src/app/page.tsx` uses `"use client"` primarily for a `useEffect` that performs hash scrolling.

Investigate moving browser-only scrolling behavior into a tiny Client Component so the page itself can remain server-rendered where practical.

Do not force this refactor if it causes navigation regressions.

### Vercel Analytics appears imported but not mounted

`src/app/layout.tsx` imports `Analytics` from `@vercel/analytics/next`, but the reviewed layout does not render `<Analytics />`.

Confirm in the local checkout. If true and analytics is intended, mount it in the appropriate root layout location.

### Duplicated project data

Project data is defined in both the homepage project component and the `/projects` page.

Centralize factual project data into a typed module and derive featured/all-project views from it. Keep presentation-specific fields separate when needed.

This prevents drift between project titles, descriptions, status, URLs, and technology lists.

### Type safety debt

Reviewed code includes `any` in areas such as:

- Firestore timestamp fields and error handling.
- Project map callbacks.
- Firebase Auth catch blocks.

When touching these areas, replace `any` with specific types or `unknown` plus safe narrowing. Do not perform a noisy repository-wide type rewrite unrelated to the task.

## P1 — Dependency and tooling health

The public `package.json` shows:

- Next.js 15.0.7.
- A React 19 release-candidate build.
- React type packages on the React 18 major line.
- A `next lint` script.

The local checkout may differ. Run the package manager's inspection commands and check current framework migration guidance before upgrading.

Upgrade incrementally. Never combine a major dependency migration with a large visual redesign.

## P1 — Portfolio quality

The portfolio should make the strongest evidence easy to scan.

Audit for:

- Clear one-sentence positioning above the fold.
- Strong project cards with problem, contribution, technology, and outcome/evidence.
- Real screenshots instead of placeholders where assets exist.
- Working repository/live links.
- Consistent project status.
- Strong visual hierarchy.
- Clear contact action.
- Mobile navigation quality.
- Empty/dead sections or commented-out features.
- Repeated or vague copy.

Do not invent outcomes or metrics. Improve presentation using only repository-supported facts.

## P2 — Performance, SEO, and polish

Review:

- Metadata completeness and canonical/OG image strategy.
- Whether image assets use Next.js image optimization where appropriate.
- Font loading.
- Unnecessary Client Components.
- Bundle-heavy icon usage.
- Layout shift.
- animation/motion preferences.
- error/loading UX.
- stale debug logging in production paths.
- dead files, unused imports, and commented code.
- accessibility landmarks and heading order.

## Success criteria

A successful improvement pass should leave the portfolio:

- secure enough for its guestbook behavior;
- buildable with no hidden validation bypass;
- easier to maintain;
- visually more coherent;
- accessible by keyboard and on small screens;
- clearer to a recruiter within the first few seconds;
- truthful to the owner's actual experience.
