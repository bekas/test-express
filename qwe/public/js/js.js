window.onload = function(){
	loadUsers();

	document.getElementById('user-add-button').onclick = function(){		
		var user = {name: document.getElementById('user-add-name').value };
		addUser(user);
		sendUser(user);
	}
	
	function sendUser(user){
		var xhr = new XMLHttpRequest();
		xhr.open('POST', '/users/json/', true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify(user)); 		
	}
	
	
	function loadUsers(){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', '/users/json/', true);
		xhr.send(); 
		xhr.onreadystatechange = function() { 
			if (xhr.readyState != 4) return;	
			document.getElementsByClassName('user-list')[0].innerHTML = "";	
			var users = JSON.parse(xhr.response).users;
			for(var i=0;i<users.length;i++){
				addUser(users[i]);
			}			
		}
	}

	function addUser(user){
		var li = document.createElement('li');
  		li.innerHTML = user.name;
		document.getElementsByClassName('user-list')[0].appendChild(li);
	}
	
}