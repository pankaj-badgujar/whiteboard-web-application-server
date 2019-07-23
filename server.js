const express = require('express');
const app = express();

const studentService = require('./services/student.service.server')(app);
const questionService = require('./services/question.service.server')(app);
const answerService = require('./services/answer.service.server')(app);
app.listen(3000);
