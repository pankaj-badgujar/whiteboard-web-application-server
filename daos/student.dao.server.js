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

function updateStudent(studentId, student){
    let index = students.indexOf(student);
    students.splice(index,1,student);
    return student;
}

module.exports = {
    findAllStudents,
    findStudentById,
    createStudent,
    deleteStudent,
    updateStudent
};
