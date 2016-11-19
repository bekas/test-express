angular.module('mySuperApp')
  .controller('UserCtrl', function($scope,Users) {
    $scope.users = Users.getUsers();
    $scope.userName = ''; 
    $scope.addUser = function() {
      var user = {name: $scope.userName};
      $scope.users.users.push(user);
      Users.addUser(user);
    };
  });



