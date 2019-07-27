const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const studentService = require('./services/student.service.server')(app);
const questionService = require('./services/question.service.server')(app);
const answerService = require('./services/answer.service.server')(app);
app.listen(process.env.PORT || 3000);
