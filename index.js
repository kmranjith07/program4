// Complete the function using object destructuring.

function getStudentDetails(students) {
    return students.map(({ name, age, grade }) => {
        return `${name} ${age} ${grade}`;
    });
}


module.exports = getStudentDetails;
