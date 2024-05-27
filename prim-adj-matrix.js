// adjacency matrix 
// 0 = no arch, n = arch of weight n
const V = 5;
const graph = [
  [0, 2, 0, 6, 0],
  [2, 0, 3, 8, 5],
  [0, 3, 0, 0, 7],
  [6, 8, 0, 0, 9],
  [0, 5, 7, 9, 0],
];

const prev = new Array(V);
const cost = new Array(V).fill(Infinity);

// T = O(V^2)
const prim = () => {
  const mst = new Set();
  
  cost[0] = 0;

  for (let i = 0; i < V - 1; i++) {
    // find min cost vertex
    let minVertex = -1;
    let minCost = Infinity;
    for (let j = 0; j < V; j++) {
      if (!mst.has(j) && cost[j] < minCost) {
        minVertex = j;
        minCost = cost[j];
      }
    }

    mst.add(minVertex);

    // update costs
    for (let j = 0; j < V; j++) {
      if (graph[minVertex][j] && !mst.has(j) && graph[minVertex][j] < cost[j]) {
        cost[j] = graph[minVertex][j];
        prev[j] = minVertex;
      }
    }
  }
};

prim();

// print mst
let w = 0;
for (let i = 0; i < V; i++) {
  if(prev[i] != undefined) {
    w += cost[i];
    console.log(`From ${prev[i]} To ${i} - cost: ${cost[i]}`);
  }
}
console.log("Total cost:", w);
