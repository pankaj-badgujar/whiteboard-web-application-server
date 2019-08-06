module.exports = function (app) {
    let universityDao = require('../daos/university.dao.server');

    function truncateDatabase(req, res) {
        universityDao.truncateDatabase();
        res.send("Database Truncated");
    }

    function populateDatabase(req, res) {
        universityDao.populateDatabase();
        res.send("Database populated with test data");
    }

    app.delete("/api/all", truncateDatabase);
    app.post("/api/populate", populateDatabase);
};
