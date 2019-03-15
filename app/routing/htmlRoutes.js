// (Adapted from 13.3-HotRestaurant in-class activity)
// ============ DEPENDENCIES ============

var path = require("path");

// ============ ROUTING INFO ============

module.exports = function(app) {

    app.get("/", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // a "GET" route to display the survey page
    app.get("/survey", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // a "DEFAULT GET" route to display the home page (acts as a catch-all route)
    app.get("*", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
};
