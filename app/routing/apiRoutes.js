// (Adapted from 13.3-HotRestaurant in-class activity)
// ============ LOAD DATA ============

var surveyData = require("../data/friends");

// ============ ROUTING INFO ============

module.exports = function(app) {

    // a "GET" route to display a JSON of all possible friends
    app.get("/api/friends", function(req, res) {
        res.json(surveyData);
        console.log("help me!");
    });

    // a "POST" route to handle incoming survey results 
    // NOTE: this is also where logic for compatibility will go!
    app.post("/api/friends", function(req, res) {

        console.log(req.body);

        // store current user object in variable
        var currentUser = req.body;
        var bestMatch = {};
        var bestScore = 100;


        // loop over all users
        for (var i=0; i < surveyData.length; i++) {
            // loop over current user scores to compare with other user scores
            var totalDiff = 0;

            for (var j=0; j < currentUser.scores.length; j++) {
                totalDiff += Math.abs(currentUser.scores[j] - surveyData[i].scores[j]);
            }

            if (totalDiff < bestScore) {
                bestMatch.name = surveyData[i].name;
                bestMatch.photo = surveyData[i].photo;

                bestScore = totalDiff;
            }
        }

        surveyData.push(currentUser);
        res.json(bestMatch);


    });

};

