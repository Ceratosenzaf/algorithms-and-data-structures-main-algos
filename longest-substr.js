const W1 = "camicia";
const W2 = "amicizia";

const matrix = new Array(W1.length + 1)
  .fill()
  .map(() => new Array(W2.length + 1).fill(0));

// T = O(|W1|*|W1|)
const longestSubstr = () => {
  for (let i = 0; i < W1.length; i++) {
    for (let j = 0; j < W2.length; j++) {
      if (W1[i] === W2[j]) matrix[i + 1][j + 1] = matrix[i][j] + 1;
      else matrix[i + 1][j + 1] = 0;
    }
  }
};

longestSubstr();

// print longest substring
let max = 0;
let iMax = 0;
for (let i = 1; i <= W1.length; i++) {
  for (let j = 1; j <= W2.length; j++) {
    if (matrix[i][j] > max) {
      max = matrix[i][j];
      iMax = i - 1;
    }
  }
}

let w = "";
while (max > 0) {
  w = W1[iMax] + w;
  iMax--;
  max--;
}
console.log(w);
