var mongoose = require('mongoose'),
  	User = mongoose.model('User');

module.exports = {
	getUsers: function(callback){
		User.find(function (err, users) {
  			callback(users);
		  });
	},
	
	addUser: function(userToSave){
		var user = new User(userToSave);
		user.save(function (err) {
  			if(err)
			  console.log(err);
			else
				console.log(userToSave.name + ' was written to db');
		  });
	},
		
}