module.exports = function (app) {

    const questionDAO = require('../daos/question.dao.server');

    function findAllQuestions(req,res) {
        res.json(questionDAO.findAllQuestions())
    }

    function findQuestionById(req,res) {
        res.json(questionDAO.findQuestionById(req.params['qid']))
    }

    app.get("/api/question",findAllQuestions);
    app.get("/api/question/:qid",findQuestionById);
};
