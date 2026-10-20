# GOTCHAS.md — Falun

Traps that already bit this project. Read before editing. When one becomes a general rule it moves to AGENTS.md.

- **CSP hash**: a mobile layout fix once required recalculating the CSP hash — remember CSP when touching inline styles/scripts.
- **Mobile dead space**: the sign-up page had a 70px dead block on mobile (fixed to 20px) — check small-screen spacing after layout changes.
