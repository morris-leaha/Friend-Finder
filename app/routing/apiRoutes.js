// (Adapted from 13.3-HotRestaurant in-class activity)
// ============ LOAD DATA ============

var surveyData = require("../data/friends");

// ============ ROUTING INFO ============

module.exports = function(app) {

    // a "GET" route to display a JSON of all possible friends
    app.get("/api/friends", function(req, res) {
        res.json(surveyData);
    });

    // a "POST" route to handle incoming survey results 
    // NOTE: this is also where logic for compatibility will go!
    app.post("/api/friends", function(req, res) {

    });

};

