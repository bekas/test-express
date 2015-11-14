angular.module('mySuperApp')
  .controller('UserCtrl', function($scope,Users) {
    $scope.users = Users.getUsers();
    $scope.userName = ''; 
    $scope.addUser = function() {
      Users.addUser({name: $scope.userName});
      $scope.users = Users.getUsers();
    };
  });



