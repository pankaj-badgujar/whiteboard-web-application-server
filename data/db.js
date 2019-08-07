module.exports = function () {
    const mongoose = require('mongoose');

    // const databaseName = 'whiteboard';
    // const server = 'localhost';
    // const port='27017';

      // mongoose.connect(`mongodb://${server}:${port}/${databaseName}`, {useNewUrlParser: true});

    mongoose.connect('mongodb://wbdv-su19-pankajBadgujar:wbdv-su19-pankajBadgujar@ds259787.mlab.com:59787/' +
        'heroku_9gjxhttz',{useNewUrlParser: true});
};



