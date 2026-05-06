# Review Journal

The cases below are the review handles I would use before changing the implementation.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its automation focus without claiming live deployment or external usage.

## Cases

- `baseline`: `dry-run spread`, score 159, lane `ship`
- `stress`: `rename risk`, score 137, lane `watch`
- `edge`: `operator cost`, score 165, lane `ship`
- `recovery`: `idempotence`, score 156, lane `ship`
- `stale`: `dry-run spread`, score 143, lane `ship`

## Note

The repository should be understandable without pretending it is larger than it is.
