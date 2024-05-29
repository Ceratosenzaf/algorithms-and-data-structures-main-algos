// map (traverse vertically)
// even = come from up, odd = come from up left/right
const V = 4;
const graph = [
  [8, 3, 4, 4],
  [6, 2, 1, 3],
  [0, 6, 4, 1],
  [5, 7, 1, 5],
];

// T = O(V^2)
const minPath = () => {
  for (let i = 1; i < V; i++) {
    for (let j = 0; j < V; j++) {
      let min = 0;

      if (graph[i][j] % 2 === 0) min = graph[i - 1][j];
      else
        min = Math.min(
          j > 0 ? graph[i - 1][j - 1] : Infinity,
          j < V - 1 ? graph[i - 1][j + 1] : Infinity
        );

      graph[i][j] = min + graph[i][j];
    }
  }
};

minPath();

// print cost
let w = Infinity;
for (let i = 0; i < V; i++) {
  if (graph[V - 1][i] < w) {
    w = graph[V - 1][i];
  }
}

console.log("Total cost:", w);
