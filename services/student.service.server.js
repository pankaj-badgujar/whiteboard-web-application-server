module.exports = function (app) {

    const studentDAO = require('../daos/student.dao.server');

    function findAllStudents(req,res) {
        res.json(studentDAO.findAllStudents());
    }

    function findStudentById(req,res) {
        res.json(studentDAO.findStudentById(req.params['sid']))
    }

    app.get("/api/student",findAllStudents);
    app.get("/api/student/:sid",findStudentById);

};
