function finduser(user1) {
  let newArryuser = [];

  for (let i = 0; i < user1.length; i++) {
    if (user1[i].gender === "male" && user1[i].age > 18) {
      newArryuser.push(user1[i]);
    }
  }
  return newArryuser;
}

const user = [
  {
    name: "harkirat",
    age: 21,
    gender: "male",
  },
  {
    name: "kirat",
    age: 100,
    gender: "male",
  },
  {
    name: "sunny",
    age: 20,
    gender: "male",
  },
];

console.log(finduser(user));
