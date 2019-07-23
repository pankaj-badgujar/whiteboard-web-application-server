module.exports = function (app) {

    let answers = require('../data/answers');
    function findAllAnswers(req, res){
        res.json(answers)
    }

    function findAnswerById(req, res) {
        res.json(
            answers.find(answer => answer._id === req.params['aid'])
        )
    }

    function findAnswersByQuestion(req , res) {
        res.json(
            answers.filter(answer => answer.question === req.params['qid'])
        )
    }

    function findAnswersByStudent(req, res) {
        res.json(
            answers.filter(answer=> answer.student === req.params['sid'])
        )
    }


    app.get("/api/answer",findAllAnswers);
    app.get("/api/answer/:aid",findAnswerById);
    app.get("/api/question/:qid/answer",findAnswersByQuestion);
    app.get("/api/student/:sid/answer",findAnswersByStudent);
};
