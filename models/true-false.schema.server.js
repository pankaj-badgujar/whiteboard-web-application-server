const mongoose = require('mongoose');

let trueFalseSchema = mongoose.Schema({
    isTrue: Boolean
});

module.exports = trueFalseSchema;
