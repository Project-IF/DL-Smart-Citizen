// REQUIRES
var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);

// CONFIG
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use('/public', express.static(path.join(__dirname, 'public')));

// ROUTES

//list of prototpyes
app.get('/', function(req, res) {
  res.render('index');
});

// Launch landing page
app.get('/smart-citizen', function(req, res) {
	res.render('smart-citizen-landing');
});

// List of a user's kits
app.get('/smart-citizen/profile/kits', function(req, res) {
  res.render('smart-citizen-kits');
});

app.get('/smart-citizen/profile/kits/1', function(req, res) {
  res.render('smart-citizen-kit-detail', {name: 'Testing kit', exposure: 'Indoor', licenced:true});
});

app.get('/smart-citizen/profile/kits/2', function(req, res) {
  res.render('smart-citizen-kit-detail', {name: 'john rees smart citizen', exposure: 'Outdoor', licenced:false});
});

app.get('/data-licences', function(req, res) {
  res.render('data-licences-index');
});

app.get('/data-licences/build', function(req, res) {
  res.render('data-licences-build');
});

app.get('/data-licences/build/preview', function(req, res) {
  res.render('data-licences-preview');
});

app.get('/data-licences/build/publishing', function(req, res) {
  res.render('data-licences-publishing');
});

app.get('/data-licences/build/published', function(req, res) {
  res.render('data-licences-published');
});

// SERVER
http.listen(app.get('port'), function() {
	console.log("Server started on :" + app.get('port'));
});