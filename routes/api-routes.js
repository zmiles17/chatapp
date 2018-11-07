const db = require("../models/message-model");

module.exports = function(app){
    app.post("/messages", function(req, res){
        db.create(req.body)
        .then(function(data){
            res.json(data);
        })
        .catch(function(err){
            res.json(err);
        })
    })
    app.get("/messages", function(req, res){
        db.find({})
        .then(function(data){
            res.json(data);
        })
        .catch(function(err){
            res.json(err);
        })
    })
}