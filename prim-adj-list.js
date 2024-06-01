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

const prev = new Array(V);
const cost = new Array(V).fill(Infinity);

// T = O(E*logV)
const prim = () => {
  const mst = new Set();
  const queue = new PriorityQueue((a, b) => a.w < b.w);

  mst.add(0);
  cost[0] = 0
  queue.push({ v: 0, w: 0 });

  while (!queue.isEmpty()) {
    // find min cost vertex
    const minCostVertex = queue.pop();
    mst.add(minCostVertex.v);

    // update costs
    graph[minCostVertex.v].forEach((e) => {
      if(!mst.has(e.v) && e.w < cost[e.v]) {
        prev[e.v] = minCostVertex.v
        cost[e.v] = e.w
        queue.push(e)
      }
    })
  }
};

prim();

// print mst
let w = 0;
for (let i = 0; i < V; i++) {
  if (prev[i] != undefined) {
    w += cost[i];
    console.log(`From ${prev[i]} To ${i} - weight: ${cost[i]}`);
  }
}
console.log("Total cost:", w);
