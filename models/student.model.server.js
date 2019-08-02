const mongoose = require('mongoose');
let studentSchema =  require('./schemas/student.schema.server');
let studentModel = mongoose.model('StudentModel',studentSchema);

module.exports = studentModel;
