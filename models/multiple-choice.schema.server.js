const mongoose = require('mongoose');

let multipleChoiceSchema = mongoose.Schema({
    choices: String,
    correct: Number
});

module.exports = multipleChoiceSchema;
