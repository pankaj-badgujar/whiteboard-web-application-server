const mongoose = require('mongoose');

let studentSchema = mongoose.Schema({
    _id: Number,
    username: String,
    password: {type: String, required: true},
    firstName: String,
    lastName: String,
    gradYear: Number,
    scholarship: Number,
    createdAt: {type: Date, default: Date.now()}
},{collection: 'students'});

module.exports = studentSchema;
