const PriorityQueue = require("./utils/queue");

// adjacency list
// arch with v with weight w
const V = 5;
const graph = [
  [
    { v: 1, w: 2 },
    { v: 3, w: 6 },
  ],
  [
    { v: 0, w: 2 },
    { v: 2, w: 3 },
    { v: 3, w: 8 },
    { v: 4, w: 5 },
  ],
  [
    { v: 1, w: 3 },
    { v: 4, w: 7 },
  ],
  [
    { v: 0, w: 6 },
    { v: 1, w: 8 },
    { v: 4, w: 9 },
  ],
  [
    { v: 1, w: 5 },
    { v: 2, w: 7 },
    { v: 3, w: 9 },
  ],
];

const cost = new Array(V).fill(Infinity);

// T = O(E*logV)
const dijkstra = () => {
  const queue = new PriorityQueue((a, b) => a.w < b.w);

  cost[0] = 0;
  queue.push({ v: 0, w: 0 });

  while (!queue.isEmpty()) {
    // find min cost vertex
    const minCostVertex = queue.pop();

    // update costs
    graph[minCostVertex.v].forEach((e) => {
      const newCost = cost[minCostVertex.v] + e.w;
      if (newCost < cost[e.v]) {
        cost[e.v] = newCost;
        queue.push({ v: e.v, w: newCost });
      }
    });
  }
};

dijkstra();

// find price groups
const THRESHOLD = 2 / 3;
let max = 0;
cost.forEach((v) => {
  if (v > max) max = v;
});

const limit = max * THRESHOLD;
const cities = [];
cost.forEach((c, v) => {
  if (c > limit && graph[v].find((u) => cost[u.v] <= limit)) cities.push(v);
});

console.log("Cities outside limit but connected to inside:", cities.join(", "));
