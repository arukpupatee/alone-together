// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use static file
app.use( express.static( "public" ) );

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
	res.render('pages/index');
});

// login page
app.get('/login', function(req, res) {
	res.render('pages/login');
});

// register page
app.get('/register', function(req, res) {
	res.render('pages/register');
});

// main page
app.get('/main', function(req, res) {
	res.render('pages/main');
});

// post page
app.get('/post', function(req, res) {
	res.render('pages/post');
});

// search page
app.get('/search', function(req, res) {
	res.render('pages/search');
});

// success
app.get('/success', function(req, res) {
	res.render('pages/success');
});

// waiting
app.get('/waiting', function(req, res) {
	res.render('pages/waiting');
});

// profile
app.get('/profile', function(req, res) {
	res.render('pages/profile');
});

// profile-after
app.get('/profile-after', function(req, res) {
	res.render('pages/profile-after');
});

app.listen(3000);
console.log('Connect to server');
