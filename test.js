const getStudentDetails = require("./index");

const students = [
    { name: "Alice", age: 20, grade: "A" },
    { name: "Bob", age: 21, grade: "B" }
];

const expected = [
    "Alice 20 A",
    "Bob 21 B"
];

const result = getStudentDetails(students);

if (JSON.stringify(result) === JSON.stringify(expected)) {
    console.log("All Test Cases Passed");
} else {
    console.log("Test Failed");
    process.exit(1);
}