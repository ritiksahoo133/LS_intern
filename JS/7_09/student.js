const students = [
  { name: "Alice", scores: [95, 85, 90] },
  { name: "Bob", scores: [70, 75, 80] },
  { name: "Charlie", scores: [88, 92, 85] },
  { name: "David", scores: [60, 65, 70] },
  { name: "Eve", scores: [98, 100, 95] },
];
const studentsAverageScore = students.map((studentInfo) => {
  let studentScore = studentInfo.scores;

  let averageScore = 0;
  for (let i = 0; i < studentScore.length; i++) {
    averageScore += studentScore[i];
  }

  return {
    name: studentInfo.name,
    scores: parseInt(averageScore / studentInfo.scores.length),
  };
});
console.log(studentsAverageScore); // student average score

let max = studentsAverageScore[0];
for (let i = 0; i < studentsAverageScore.length; i++) {
  if (studentsAverageScore[i].scores > max) {
    max = studentsAverageScore[i];
  }
}
console.log("student Highest average score", max);

const averageBelow80 = studentsAverageScore.filter((student) => {
  return student.scores < 80;
});

console.log("student below 80", averageBelow80);
