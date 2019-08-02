module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'whiteboard';
    const server = 'localhost';
    const port='27017';
    mongoose.connect(`mongodb://${server}:${port}/${databaseName}`, {useNewUrlParser: true});
};



