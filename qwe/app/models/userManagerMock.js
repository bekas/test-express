var users = [];
module.exports = {
	getUsers: function(callback){
		setImmediate(function(){
			callback(users);
		})
	},
	
	addUser: function(userToSave){
		users.push(userToSave);
	},
	
	clear: function(){
		users = [];
		
	}
		
}