const mongoose = require('mongoose');

let quizWidgetSchema =  require('./quiz-widget.schema.server');
let quizWidgetModel = mongoose.model('quizWidgetModel',quizWidgetSchema);

module.exports = quizWidgetModel;

