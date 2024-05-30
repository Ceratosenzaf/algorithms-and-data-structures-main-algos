const array = [3, 5, -1, 8, -2, 4, 2, -1, 5, 7, 8, 2];
const result = new Array(array.length);

// T = O(n)
const maxSubVector = () => {
  array.forEach((v, i) => (result[i] = v));

  for (let i = 1; i < array.length; i++) {
    if (Math.abs(array[i - 1]) % 2 === Math.abs(array[i]) % 2)
      result[i] = Math.max(result[i] + result[i - 1], result[i]);
  }
};

maxSubVector();

// print all max sum vectors
let max = -Infinity;
result.forEach((v) => {
  if (v > max) max = v;
});
console.log(max);

const indexes = [];
result.forEach((v, i) => {
  if (v === max) indexes.push(i);
});

const subVectors = new Array(indexes.length).fill().map(() => [])
indexes.forEach((index, i) => {
  let j = index
  let remaining = max
  while (j>= 0 && remaining) {
    subVectors[i].unshift(array[j])
    remaining-= array[j]
    j--
  }
})

console.log(subVectors)