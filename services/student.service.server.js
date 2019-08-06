module.exports = function (app) {
    const studentDAO = require('../daos/student.dao.server');

    function findAllStudents(req, res) {
        studentDAO
            .findAllStudents()
            .then(students => res.send(students))
    }

    function createStudent(req, res) {
        studentDAO
            .createStudent(req.body)
            .then(student => res.send(student))
    }

    function findStudentById(req, res) {
        studentDAO
            .findStudentById(req.params['sid'])
            .then(student => res.send(student))
    }

    function deleteStudent(req, res) {
        studentDAO
            .deleteStudent(req.params['sid'])
            .then(status => res.send(status))
    }

    function updateStudent(req, res) {
        studentDAO
            .updateStudent(req.params['sid'], req.body)
            .then(status => res.send(status))
    }

    app.get("/api/students", findAllStudents);
    app.get("/api/students/:sid", findStudentById);
    app.post("/api/students/", createStudent);
    app.delete("/api/students/:sid", deleteStudent);
    app.put("/api/students/:sid", updateStudent);

};


