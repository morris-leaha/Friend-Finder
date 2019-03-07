// (Adapted from 13.3-HotRestaurant in-class activity)
// ============ DEPENDENCIES ============

var express = require("express");

// ============ EXPRESS CONFIG ===========

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ============= ROUTER INFO ==============

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// ============= LISTENER INFO ==============

app.listen(PORT, function() {
    console.log("FriendFinder is listening on PORT: " + PORT);
});