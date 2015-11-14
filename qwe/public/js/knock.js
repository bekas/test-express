$(function(){
	loadUsers();
	ko.applyBindings(viewModel);
});

function loadUsers(){
    $.get('/users/json/', onUserGetSuccess);
    function onUserGetSuccess(gettedUsers){
        for(var i=0; i<gettedUsers.users.length; i++){
            var exist = false;
            for(var j=0; j<viewModel.users.B().length; j++){
                if(viewModel.users.B()[j]._id == gettedUsers.users[i]._id){
                    exist = true;
                }
            }
            if(!exist)
                viewModel.users.push(gettedUsers.users[i]);                
        }
    }
}

var viewModel = {
    userName:'',
    addUser: function(data, event){
        var user = {name: viewModel.userName};
        $.post(	'/users/json', user, function(data){ loadUsers() });	       
    },
    users: ko.observableArray([])
};

