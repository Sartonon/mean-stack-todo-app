var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var port = 4000;

app.set('view engine', 'ejs');

app.use('/', express.static(__dirname + '/public/src'));

mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);

app.listen(port, () => {
  console.log("App running in port: " + port);
});