function useFunc() {
  console.log("use Function");
}
console.log("hi");

setTimeout(useFunc, 1000);

console.log("last console");

let c = 0;

for (let i = 0; i < 10000000000; i++) {
  c = c + 1;
}

console.log("Expensive operation done");
