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

router.get('/users/:mode', function (req, res, next) {
  if(req.params.mode == 'json'){
      userManager.getUsers(function(users){
        res.status(200).send(200, {users:users});
      });
  }
  else{
    res.render('users-script', {
       script: req.params.mode,
    });   
  }
 
}); 

 router.post('/users/json', function (req, res, next) {
   console.log(req.body);
    userManager.addUser(req.body);
    res.status(200).end();
  });

router.post('/users', function (req, res, next) {
  userManager.addUser(req.body);
  userManager.getUsers(function(users){
    res.render('users', {
       users: users
    });
  });
  

}); 
