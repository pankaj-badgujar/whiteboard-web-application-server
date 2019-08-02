module.exports = function (app) {

    const questionDAO = require('../daos/question_fromJSONfile.dao.server');

    function findAllQuestions(req,res) {
        res.json(questionDAO.findAllQuestions())
    }

    function findQuestionById(req,res) {
        res.json(questionDAO.findQuestionById(req.params['qid']))
    }

    function createQuestion(req, res) {
        res.json(questionDAO.createQuestion(req.body))
    }

    function updateQuestion(req, res) {
        res.json(questionDAO.updateQuestion(req.params['qid'],req.body))
    }

    function deleteQuestion(req, res) {
        res.json(questionDAO.deleteQuestion(req.params['qid']))
    }

    app.get("/api/question",findAllQuestions);
    app.get("/api/question/:qid",findQuestionById);
    app.post("/api/question",createQuestion);
    app.put("/api/question/:qid",updateQuestion);
    app.delete("/api/question/:qid", deleteQuestion);

};
