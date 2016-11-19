$(function(){
	loadUsers();
	ko.applyBindings(viewModel);
});

function loadUsers(){
    $.get('/users/json/', onUserGetSuccess);
    function onUserGetSuccess(gettedUsers){
        for(var i=0; i<gettedUsers.users.length; i++){
            viewModel.users.push(gettedUsers.users[i]);                
        }
    }
}

var viewModel = {
    userName:'',
    addUser: function(data, event){
        var user = {name: viewModel.userName};
        viewModel.users.push(user);       
        $.post(	'/users/json', user);	       
    },
    users: ko.observableArray([])
};

