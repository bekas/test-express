$(function(){
	loadUsers();

	$('button#user-add-button').click(function(){
		var user = {name: $('input#user-add-name').val() };
		addUser(user);
		$.post(	'/users/json',	user);	 
	})
	
	
	function loadUsers(){
		$.get('/users/json/', onUserGetSuccess);
		function onUserGetSuccess(users){
			$('ul.user-list').empty();
			for(var i=0;i<users.users.length;i++){
				addUser(users.users[i]);
			}		
		}
	}

	function addUser(user){
		$('ul.user-list').append($('<li>' + user.name + '</li>'));
	}	
});