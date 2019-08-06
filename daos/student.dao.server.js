const studentModel = require('../models/student.model.server');

function createStudent(student) {
    return studentModel.create(student);
}

function findAllStudents() {
    return studentModel.find();
}

function findStudentById(userId) {
    return studentModel.findById(userId);
}

function deleteStudent(studentId) {
    return studentModel.deleteOne({_id: studentId})
}

function updateStudent(studentId, student) {
    return studentModel.updateOne({_id: studentId}, {
        $set: student
    })
}
function truncateDatabase(){
    return studentModel.deleteMany({});
}

module.exports = {
    createStudent,
    findAllStudents,
    findStudentById,
    deleteStudent,
    updateStudent,
    truncateDatabase
};

