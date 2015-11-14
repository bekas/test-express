angular.module('UserDirective', [])
   .directive('userList', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        users:'=users'
      },
      controller: function($scope, $element) {
        
      },
      template:
          '<ul class="user-list">' +
            '<li ng-repeat="user in users.users | orderBy:\'-name\'">'+
              '<span>{{user.name}}</span>' +
            '</li>' +
          '</ul>',
      replace: true
    };
  });