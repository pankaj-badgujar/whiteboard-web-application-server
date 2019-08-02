const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('./data/db')();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// const studentService = require('./services/student_fromJSONfile.service.server')(app);
const questionService = require('./services/question_fromJSONfile.service.server')(app);
const answerService = require('./services/answer_fromJSONfile.service.server')(app);

const studentService = require('./services/student.service.server')(app);

app.listen(process.env.PORT || 3000);
