const fs = require("fs");

const data = fs.readFileSync("a.txt", "utf8");
const data1 = fs.readFileSync("b.txt", "utf8");

console.log(data, data1);
2;
