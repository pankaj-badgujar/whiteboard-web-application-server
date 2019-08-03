const mongoose = require('mongoose');

let trueFalseSchema = mongoose.Schema({
    _id : Number,
    isTrue: Boolean
});

module.exports = trueFalseSchema;
