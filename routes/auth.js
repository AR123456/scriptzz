var authController = require('../routes/authcontroller.js');
var passport = require("passport");
 
module.exports = function(app) {
    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    app.post('/signin', passport.authenticate('local-signin', {
            successRedirect: '/dashboard',
            failureRedirect: '/signin'
        }
    )); 
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
            failureRedirect: '/signup'
        }
    )); 
    app.get('/dashboard',isLoggedIn, authController.dashboard);
    app.get('/logout',authController.logout);

    app.get('/home',authController.home);
    app.get('/pillbox',authController.pillbox);
    app.get('/about',authController.about);
    app.get('/medlist',authController.medlist);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
}