// (Adapted from 13.3-HotRestaurant in-class activity)
// ============ DEPENDENCIES ============

var path = require("path");

// ============ ROUTING INFO ============

module.exports = function(app) {

    app.get("/survey", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("*", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}
