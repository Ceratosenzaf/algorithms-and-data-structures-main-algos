// adjacency matrix
//  0 = no arch, n = arch of weight n
const V = 4;
const graph = [
  [0, 20, 40, 44],
  [20, 0, 50, 40],
  [39, 50, 0, 30],
  [42, 26, 30, 0],
];

const prev = new Array(V);

// T = O(V^2)
const travelingSalesman = (start = 0) => {
  const visited = new Set();

  let current = start;
  visited.add(current);

  while (true) {
    let min = -1;
    let minD = Infinity;

    graph[current].forEach((d, i) => {
      if (d && d < minD && !visited.has(i)) {
        minD = d;
        min = i;
      }
    });

    if (min === -1) {
      prev[start] = current;
      break;
    }

    prev[min] = current;
    visited.add(min);
    current = min;
  }
};

travelingSalesman();

// print path
let w = 0;
for (let i = 0; i < V; i++) {
  w += graph[prev[i]][i];
  console.log(`From ${prev[i]} To ${i} - cost: ${graph[prev[i]][i]}`);
}
console.log("Total cost:", w);
