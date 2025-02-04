function sumOfn(params) {
  let ans = 0;
  for (let i = 0; i <= params; i++) {
    ans = ans + i;
  }
  return ans;
}

console.log(sumOfn(10));