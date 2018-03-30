var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")
var PORT = process.env.PORT || 8080;
var methodOverride = require("method-override");
var passport = require("passport");
var passportLocal = require("passport-local");
var exphbs = require("express-handlebars");
var session = require("express-session");
var env = require('dotenv').load();


var app = express();
app.use(express.static(path.join(__dirname, "public")));
var cookieParser = require("cookie-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());




var db = require("./models");
var models = require("./models");
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
var authRoute = require('./routes/auth.js')(app,passport);

require('./config/passport/passport.js')(passport, models.user);


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
//Sync Database
// models.sequelize.sync().then(function() {
//   console.log('Nice! Database looks fine')
// }).catch(function(err) {
//   console.log(err, "Something went wrong with the Database Update!")
// });