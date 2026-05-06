# meridian-ops-deploy-meter

`meridian-ops-deploy-meter` explores automation in JavaScript. The repository keeps the core rule set compact, then surrounds it with examples that show how the decisions move.

## Meridian Ops Deploy Meter Notes

The quickest review path is the verifier first, then the fixtures, then the operations note. That order makes it easy to see whether the code, data, and explanation still agree.

## Why This Exists

I use this kind of project to make a rule visible before adding more machinery around it. The important part here is not the size of the codebase. It is that the input signals, scoring rule, fixture data, and expected output can all be checked in one sitting.

## Example Scenarios

`examples/extended_cases.csv` adds six named cases. I kept the names plain so failures are easy to read in a terminal: baseline, pressure, surge, degraded, recovery, and boundary.

## Implementation Notes

The design is intentionally direct: parse or construct a signal, score it, classify it, and verify the expected branch. This makes the repository useful for studying automation behavior without needing a service or database unless the language project itself is SQL. The JavaScript version uses native modules and a small Node test path.

## Feature Notes

- Models dry-run output with deterministic scoring and explicit review decisions.
- Uses fixture data to keep file plans changes visible in code review.
- Includes extended examples for safety rails, including `recovery` and `degraded`.
- Documents idempotent checks tradeoffs in `docs/operations.md`.
- Runs locally with a single verification command and no external credentials.

## Try It

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

This runs the language-level build or test path against the compact fixture set.

## Tests

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/audit.ps1
```

The audit command checks repository structure and README constraints before it delegates to the verifier.

## Code Tour

- `src`: primary implementation
- `tests`: verification harness
- `fixtures`: compact golden scenarios
- `examples`: expanded scenario set
- `metadata`: project constants and verification metadata
- `docs`: operations and extension notes
- `scripts`: local verification and audit commands
- `package.json`: Node package scripts

## Roadmap

- Add a loader for `examples/extended_cases.csv` and promote selected cases into the language test suite.
- Add a short report command that prints the score breakdown for a single scenario.
- Add malformed input fixtures so the failure path is as visible as the happy path.
- Add one more automation fixture that focuses on a malformed or borderline input.

## Boundaries

The examples cover useful edges, not every edge. A larger version would add malformed-input tests, richer reports, and deeper domain parsers.

## Local Setup

Install JavaScript and run the commands from the repository root. The project does not need credentials or a hosted service.
