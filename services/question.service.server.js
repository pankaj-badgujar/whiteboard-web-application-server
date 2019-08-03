module.exports = function (app) {

    const questionDAO = require('../daos/question.dao.server');

    function findAllQuestions(req,res) {
        questionDAO
            .findAllQuestions()
            .then(questions => res.send(questions));
    }

    function findQuestionById(req,res) {
        questionDAO
            .findQuestionById(req.params['qid'])
            .then(question => res.send(question));
    }

    function createQuestion(req, res) {
        questionDAO
            .createQuestion(req.body)
            .then(question => res.send(question));
    }

    function updateQuestion(req, res) {
        questionDAO
            .updateQuestion(req.params['qid'],req.body)
            .then(status => res.send(status))
    }

    function deleteQuestion(req, res) {
        questionDAO
            .deleteQuestion(req.params['qid'])
            .then(status=>res.send(status))
    }

    app.get("/api/questions",findAllQuestions);
    app.get("/api/questions/:qid",findQuestionById);
    app.post("/api/questions",createQuestion);
    app.put("/api/questions/:qid",updateQuestion);
    app.delete("/api/questions/:qid", deleteQuestion);

};
