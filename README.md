# meridian-ops-deploy-meter

`meridian-ops-deploy-meter` keeps a focused JavaScript implementation around automation. The project goal is to develop a JavaScript command-oriented project for deploy scenarios with capacity fixtures, allocation and spill reports, and single-node deterministic mode.

## Why It Exists

This is intentionally local and self-contained so it can be inspected without credentials, services, or seeded history.

## Meridian Ops Deploy Meter Review Notes

The first comparison I would make is `operator cost` against `rename risk` because it shows where the rule is most opinionated.

## Features

- `fixtures/domain_review.csv` adds cases for dry-run spread and rename risk.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/meridian-ops-deploy-walkthrough.md` walks through the case spread.
- The JavaScript code includes a review path for `operator cost` and `rename risk`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Architecture Notes

The core code exposes a scoring path and the added review layer uses `signal`, `slack`, `drag`, and `confidence`. The domain terms are `dry-run spread`, `rename risk`, `operator cost`, and `idempotence`.

The JavaScript code keeps the review rule close to the tests.

## Usage

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Tests

The same command runs the local verification path. The highest-scoring domain case is `edge` at 165, which lands in `ship`. The most cautious case is `stress` at 137, which lands in `watch`.

## Limitations And Roadmap

The repository is intentionally scoped to local checks. I would expand it by adding adversarial fixtures before adding features.
