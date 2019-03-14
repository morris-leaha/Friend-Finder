// (Adapted from 13.3-HotRestaurant in-class activity)
// ============ DEPENDENCIES ============

var express = require("express");

// ============ EXPRESS CONFIG ===========

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// ============= ROUTER INFO ==============

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// ============= LISTENER INFO ==============

app.listen(PORT, function() {
    console.log("FriendFinder is listening on PORT: " + PORT);
});