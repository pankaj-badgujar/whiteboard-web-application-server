const mongoose = require('mongoose');
let studentSchema =  require('./student.schema.server');
let studentModel = mongoose.model('StudentModel',studentSchema);

module.exports = studentModel;
