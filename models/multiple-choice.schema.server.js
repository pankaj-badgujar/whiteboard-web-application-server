const mongoose = require('mongoose');

let multipleChoiceSchema = mongoose.Schema({
    _id : Number,
    choices: String,
    correct: Number
});

module.exports = multipleChoiceSchema;
