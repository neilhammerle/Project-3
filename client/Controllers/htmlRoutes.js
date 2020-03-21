import REACT from 'react';
var Sequelize = require("sequelize");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("home")
    });
    app.get("/chat", function(req, res) {
        res.render("chat")
    });

};