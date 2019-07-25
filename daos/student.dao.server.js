let students = require('../data/students');

function findAllStudents() {
    return students;
}

function findStudentById(studentId) {
    return students.find(student => student._id === studentId)
}

function createStudent(student){
    students.push(student);
    return students;
}

function deleteStudent(studentId){
    students = students.filter(student => student._id !== studentId);
}

function updateStudent(student){
    let studentToBeUpdated = this.findStudentById(student._id);

    studentToBeUpdated.firstName = student.firstName;
    studentToBeUpdated.lastName = student.lastName;
    studentToBeUpdated.username = student.username;
    studentToBeUpdated.password = student.password;
    studentToBeUpdated.gradYear = student.gradYear;
    studentToBeUpdated.scholarship = student.scholarship;

    return studentToBeUpdated;
}

module.exports = {
    findAllStudents,
    findStudentById,
    createStudent,
    deleteStudent,
    updateStudent
};
