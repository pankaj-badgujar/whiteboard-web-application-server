let students = require('../data/students');

function findAllStudents() {
    return students;
}

function findStudentById(studentId) {
    return students.find(student => student._id === studentId)
}

module.exports = {
    findAllStudents,
    findStudentById
};
