angular.module('UserService', ['ngResource'])
  .service('Users', function($resource) {
	  var users = $resource('/users/json'); 
	  return {
      getUsers:function(){
        return users.get();
      },	
      addUser:function(user){
        users.save(user);
      }    
	  };
  });