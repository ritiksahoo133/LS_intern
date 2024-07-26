const studentData = [
  {
    name: "Ritik",
    roll: 21,
  },
  { name: "Suman", roll: 23 },
  { name: "Pratik", roll: 27 },
];
const result = studentData.find(({ name }) => {
  if (name === "Suman") {
    return name;
  }
});
// console.log(result);
