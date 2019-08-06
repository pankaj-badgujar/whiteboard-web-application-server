module.exports = function (app) {
    let universityDao = require('../daos/university.dao.server');

    function truncateDatabase(req, res) {
        res.send(universityDao.truncateDatabase());
    }

    function populateDatabase(req, res) {
        res.send(universityDao.populateDatabase());
    }

    app.delete("/api/all", truncateDatabase);
    app.post("/api/populate", populateDatabase);
};
