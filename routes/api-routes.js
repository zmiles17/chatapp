const db = require("../models/index");

module.exports = function(app){
    app.post("/messages", function(req, res){
        db.Messages.create(req.body)
        .then(function(data){
            res.json(data);
        })
        .catch(function(err){
            res.json(err);
        })
    })
    app.get("/messages", function(req, res){
        db.Messages.find({})
        .then(function(data){
            res.json(data);
        })
        .catch(function(err){
            res.json(err);
        })
    })
}