var exports = module.exports = {}
 
exports.signup = function(req, res) {
    res.render('signup');
}

exports.signin = function(req, res) {
    res.render('signin');
}

exports.dashboard = function(req, res) {
    res.render('dashboard');
}

exports.home = function(req, res) {
    res.render('home');
}

exports.pillbox = function(req, res) {
    res.render('pillbox');
}

exports.medlist = function(req, res) {
    res.render("medlist", {scriptz: data})
}

exports.about = function(req, res) {
    res.render('about');
}

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
}