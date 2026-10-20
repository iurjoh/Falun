# Regression and gotcha register

Quality trial started 2026-10-20. Review friction around 2026-11-20. Pass counters below record new, independently evidenced runs only, not historical results.

## Regressions

No regression checks recorded yet. Entry format: - [YYYY-MM-DD] <bug> -> check: <deterministic re-run command> | consecutive passes: n/5. Do not record historical results as passes.

Five recorded consecutive passes make a check eligible for automation; adding CI is a separate code change. Record revision, environment and evidence before increasing a count. No automatic edits or release approval follow from a counter.

## Gotchas


- [2026-10-20] Changing inline styles/scripts requires recalculating the CSP hash or the page breaks silently | source: merged mobile sign-up fix (70px -> 20px + CSP hash recalculation), 2026-10 | version: current | validity: permanent | projects: Falun.
- [2026-10-20] Mobile dead space after the last content block appeared here and in other projects; check page bottoms on small screens after layout changes | source: sign-up fix 2026-10 + owner-ordered cross-project sweep 2026-10-13 | version: current | validity: standing | projects: Falun, Tic-tac-toe (2nd project: propose promotion to a shared rule).

## Check entry points

Static site on GitHub Pages - verify the rendered page after any change. Report exactly what ran and where.

If a gotcha is independently observed in a second project, propose a shared rule with both sources.
