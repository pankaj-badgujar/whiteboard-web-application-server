module.exports = function (app) {
let questions = require('../data/questions');

    function findAllQuestions(req,res) {
        res.json(questions)
    }

    function findQuestionById(req,res) {
        res.json(
            questions.find(question => question._id === req.params['qid'])
        )
    }

    app.get("/api/question",findAllQuestions);
    app.get("/api/question/:qid",findQuestionById);
};
