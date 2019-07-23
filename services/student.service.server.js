module.exports = function (app) {
    let students = require('../data/students');

    function findAllStudents(req,res) {
        res.json(students);
    }

    function findStudentById(req,res) {
        res.json(
            students.find(student => student._id === req.params['sid'])
        )
    }

    app.get("/api/student",findAllStudents);
    app.get("/api/student/:sid",findStudentById);

};
