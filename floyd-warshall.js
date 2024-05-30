// adjacency matrix
// 0 = same vector, n = arch of weight n, ∞ =  no arch
const V = 4;
const graph = [
  [0, 350, Infinity, 200],
  [350, 0, 230, Infinity],
  [Infinity, 230, 0, 300],
  [200, Infinity, 300, 0],
];

const cost = new Array(V);

const floydWarshall = () => {
  graph.forEach((v, i) => {
    cost[i] = v.map((c) => c);
  });

  for (let k = 0; k < V; k++) {
    for (let i = 0; i < V; i++) {
      for (let j = 0; j < V; j++) {
        cost[i][j] = Math.min(cost[i][j], cost[i][k] + cost[k][j]);
      }
    }
  }
};

floydWarshall();

// print
let max = 0;
let iMax = -1;
cost.forEach((city, i) => {
  const tot = city.reduce((acc, c) => acc + c, 0);
  if (tot > max) {
    max = tot;
    iMax = i;
  }
});

const avg = max / (V - 1);
console.log(`Furthest from others: ${iMax} with avg distance ${avg}`);
