// map (traverse horizontally)
const V = 5;
const graph = [
  [7, 0, 10, 0, 0],
  [0, 4, 0, 12, 0],
  [0, 0, 0, 0, 5],
  [0, 8, 0, 50, 0],
  [0, 0, 0, 16, 0],
];

// T = O(V^2)
const maxPath = () => {
  for (let j = 1; j < V; j++) {
    for (let i = 0; i < V; i++) {
      let max = 0;

      if (graph[i][j] === 0) max = graph[i][j - 1];
      else
        max = Math.max(
          i > 0 ? graph[i - 1][j - 1] : 0,
          i < V - 1 ? graph[i + 1][j - 1] : 0
        );

      graph[i][j] = max + graph[i][j];
    }
  }
};

minPath();

// print cost
let w = 0;
for (let i = 0; i < V; i++) {
  if (graph[i][V - 1] > w) {
    w = graph[i][V - 1];
  }
}

console.log("Total cost:", w);
