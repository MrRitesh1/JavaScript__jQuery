// let rows = 5;

// let pattern = "*";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//   // inner loop runs for n
//   for (let num = 1; num <= n; num++) {
//     pattern += num;
//   }
//   // Add a new line character after contents of each line
//   pattern += "\n";
// }
// console.log(pattern);

let n = 5;
let starPattern = "";
for (let j = 1; j <= n; j++) {
  for (let a = 1; a <= j; a++) {
    starPattern += "*";
  }
  starPattern += "\n";
}
console.log(starPattern);

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

let rows = 5;
// pattern variable carries the final pattern in string format
let pattern = "";
// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
  // Inner loop - I -> prints spaces
  for (let j = 1; j <= rows - n; j++) {
    pattern += " ";
  }
  // Inner Loop - II -> prints stars
  for (let a = 1; a <= n; a++) {
    pattern += " *";
  }
  pattern += "\n";
}
console.log(pattern);

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
