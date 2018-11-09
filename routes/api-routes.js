const db = require("../models/index");

module.exports = function (app) {
    app.post("/messages", function (req, res) {
        db.Messages.create(req.body)
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            })
    })
    app.get("/messages", function (req, res) {
        db.Messages.find({})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            })
    })
    app.post('/api/login', function (req, res) {
        db.Users.findOne(req.body).where('password').equals(req.body.password)
            .then(function (user) {
                if (!user) {
                    res.json(user);
                } else {
                    res.json(user);
                }
            })
            .catch(function (err) {
                res.json(err)
            })
    })
    app.post('/api/users', function (req, res) {
        db.Users.create(req.body)
            .then(function (dbUser) {
                res.json(dbUser);
            })
            .catch(function (err) {
                res.json(err);
            })
    })
}