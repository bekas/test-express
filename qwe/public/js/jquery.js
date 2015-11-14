$(function(){
	loadUsers();

	$('button#user-add-button').click(function(){
		var user = {name: $('input#user-add-name').val() };
		$.post(	'/users/json',	user, function(data){ loadUsers() });	 
	})
	
	
	function loadUsers(){
		$.get('/users/json/', onUserGetSuccess);
		function onUserGetSuccess(users){
			$('ul.user-list').empty();
			for(var i=0;i<users.users.length;i++){
				$('ul.user-list').append($('<li>' + users.users[i].name + '</li>'))
			}		
		}
	}
	
});