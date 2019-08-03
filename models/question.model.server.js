const mongoose = require('mongoose');

let questionSchema =  require('./question.schema.server');
let questionModel = mongoose.model('questionModel',questionSchema);

module.exports = questionModel;
