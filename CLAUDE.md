# Claude Code Guidelines

## Commits

Always make **atomic commits** — each commit must contain exactly ONE logical change.

- If a task involves multiple independent changes (e.g. a font swap AND a data cleanup), commit them separately.
- Code + data files that are a direct consequence of that code change (e.g. rebuilding an index) belong in the same commit.
- Never mix formatting/lint fixes with functional changes.
- Never mix unrelated bug fixes with feature work.
- When in doubt, split into smaller commits.
