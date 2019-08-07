const studentDao = require('./student.dao.server');
const questionDao = require('./question.dao.server');
const answerDao = require('./answer.dao.server');

function truncateDatabase() {

    answerDao
        .truncateDatabase()
        .then(status => {
            return questionDao.truncateDatabase()
        })
        .then(status => {
            return studentDao.truncateDatabase()
        })
        .then({});
}

function populateDatabase() {
    studentDao.createStudent(studentAlice).then({});
    studentDao.createStudent(studentBob).then({});

    questionDao.createQuestion(question321).then({});
    questionDao.createQuestion(question432).then({});
    questionDao.createQuestion(question543).then({});
    questionDao.createQuestion(question654).then({});

    answerDao.createAnswerByStudentForQuestion(123, 321, answer123).then({});
    answerDao.createAnswerByStudentForQuestion(123, 432, answer234).then({});
    answerDao.createAnswerByStudentForQuestion(123, 543, answer345).then({});
    answerDao.createAnswerByStudentForQuestion(123, 654, answer456).then({});

    answerDao.createAnswerByStudentForQuestion(234, 321, answer567).then({});
    answerDao.createAnswerByStudentForQuestion(234, 432, answer678).then({});
    answerDao.createAnswerByStudentForQuestion(234, 543, answer789).then({});
    answerDao.createAnswerByStudentForQuestion(234, 654, answer890).then({});

}

let studentAlice = {
    "_id": "123",
    "firstName": "Alice",
    "lastName": "Wonderland",
    "username": "alice",
    "password": "alice",
    "gradYear": 2020,
    "scholarship": 15000
};

let studentBob = {
    "_id": "234",
    "firstName": "Bob",
    "lastName": "Hope",
    "username": "bob",
    "password": "bob",
    "gradYear": 2021,
    "scholarship": 12000
};

let question321 = {
    "_id": 321,
    "question": "Is the following schema valid?",
    "points": 10,
    "questionType": "TRUE_FALSE",
    "trueFalse": {
        "isTrue": false
    }
};

let question432 = {
    "_id": "432",
    "question": "DAO stands for Dynamic Access Object",
    "points": 10,
    "questionType": "TRUE_FALSE",
    "trueFalse": {
        "isTrue": false
    }
};

let question543 = {
    "_id": "543",
    "question": "What does JPA stand for?",
    "points": 10,
    "questionType": "MULTIPLE_CHOICE",
    "multipleChoice" : {
        "choices": "Java Persistence API, Java Persisted Application, JavaScript Persistence API, JSON Persistent Associations",
        "correct" : 1
    }
};

let question654 = {
    "_id": "654",
    "question": "What does ORM stand for?",
    "points": 10,
    "questionType": "MULTIPLE_CHOICE",
    "multipleChoice" : {
        "choices": "Object Relational Model, Object Relative Markup, Object Reflexive Model, Object Relational Mapping",
        "correct" : 4
    }
};

let answer123 = {
    "_id": 123,
    "trueFalseAnswer": true
};

let answer234 = {
    "_id": 234,
    "trueFalseAnswer": false
};
let answer345 = {
    "_id": 345,
    "multipleChoiceAnswer": 1
};
let answer456 = {
    "_id": 456,
    "multipleChoiceAnswer": 2
};
let answer567 = {
    "_id": 567,
    "trueFalseAnswer": false
};
let answer678 = {
    "_id": 678,
    "trueFalseAnswer": true
};
let answer789 = {
    "_id": 789,
    "multipleChoiceAnswer": 3
};
let answer890 = {
    "_id": 890,
    "multipleChoiceAnswer": 4
};


module.exports = {
    truncateDatabase,
    populateDatabase
};
