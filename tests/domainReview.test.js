import assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview.js";

const item = { signal: 68, slack: 46, drag: 26, confidence: 55 };
assert.equal(domainReviewScore(item), 159);
assert.equal(domainReviewLane(item), "ship");
