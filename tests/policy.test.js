import assert from "node:assert/strict";
import { classify, score } from "../src/policy.js";

const cases = [
  {
    "name": "case_1",
    "demand": 77,
    "capacity": 87,
    "latency": 24,
    "risk": 19,
    "weight": 6,
    "score": 103,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 99,
    "capacity": 78,
    "latency": 8,
    "risk": 19,
    "weight": 7,
    "score": 174,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 84,
    "capacity": 70,
    "latency": 8,
    "risk": 10,
    "weight": 4,
    "score": 178,
    "decision": "accept"
  }
];

for (const item of cases) {
  const signal = {
    demand: item.demand,
    capacity: item.capacity,
    latency: item.latency,
    risk: item.risk,
    weight: item.weight
  };
  assert.equal(score(signal), item.score);
  assert.equal(classify(signal), item.decision);
}
