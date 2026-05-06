# Meridian Ops Deploy Meter Walkthrough

The fixture is intentionally compact, so the review starts with the cases that pull farthest apart.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | dry-run spread | 159 | ship |
| stress | rename risk | 137 | watch |
| edge | operator cost | 165 | ship |
| recovery | idempotence | 156 | ship |
| stale | dry-run spread | 143 | ship |

Start with `edge` and `stress`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

The useful comparison is `operator cost` against `rename risk`, not the raw score alone.
