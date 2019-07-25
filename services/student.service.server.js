module.exports = function (app) {

    const studentDAO = require('../daos/student.dao.server');

    function findAllStudents(req,res) {
        res.json(studentDAO.findAllStudents());
    }

    function findStudentById(req,res) {
        res.json(studentDAO.findStudentById(req.params['sid']))
    }

    function createStudent(req,res){
        res.json(studentDAO.createStudent(req.body))
    }

    function deleteStudent(req, res){
        res.json(studentDAO.deleteStudent(req.params['sid']))
    }

    function updateStudent(req,res){
        res.json(studentDAO.updateStudent(req.body))
    }

    app.get("/api/student",findAllStudents);
    app.get("/api/student/:sid",findStudentById);
    app.post("/api/student/",createStudent);
    app.delete("/api/student/:sid",deleteStudent);
    app.put("/api/student/:sid",updateStudent);

};
