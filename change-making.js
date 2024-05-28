// map of availabilities
// each row specifies the amount and the availability for that amount
const availability = [
  [200, 10],
  [100, 15],
  [50, 80],
  [20, 80],
  [10, 74],
];

const used = new Array();

const minimumChange = (amount) => {
  let remaining = amount;

  availability.forEach(([v, q]) => {
    while (remaining >= v) {
      used.push(v);
      remaining -= v;
      q--;
    }
  });

  if (remaining) console.error("Could not satisfy order");
};

minimumChange(100);

// print change
const tot = used.reduce((acc, v) => ({ ...acc, [v]: (acc[v] || 0) + 1 }), {});
Object.entries(tot).forEach(([k, v]) => console.log(`Used ${k} x${v}`));
console.log("Total change:", used.length);
