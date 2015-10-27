var express = require('express'),
  router = express.Router(),
  userManager = require('../models/userManager');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/users', function (req, res, next) {
  userManager.getUsers(function(users){
    res.render('users', {
       users: users
    });
  });
});

router.post('/users', function (req, res, next) {
  userManager.addUser(req.body);
  userManager.getUsers(function(users){
    res.render('users', {
       users: users
    });
  });
});
