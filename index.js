// function runAfter3s(fn) {
//   setTimeout(fn, 3000);
// }

// function print() {
//   console.log("hello world");
// }

// runAfter3s(print);

function Random(resolve) {
  setTimeout(resolve, 3000);
}

let p = new Promise(Random);

function done() {
  console.log("hello world");
}

p.then(done);
