var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose'),
  fs = require('fs');

var https = require('https');
var key = fs.readFileSync('rsa/qwe-key.pem');
var cert = fs.readFileSync('rsa/qwe-cert.pem')
var https_options = {
    key: key,
    cert: cert
};


mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});
var app = express();

require('./config/express')(app, config);

/*
var server = https.createServer(https_options, app).listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});
*/
var server = app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});