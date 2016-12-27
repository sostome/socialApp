angular.module('app')
.controller('ApplicationCtrl', function ($scope, UserSvc) {
  $scope.$on('login', function (_, user) {
    $scope.currentUser = user
  });
  
  $scope.logout = function(user){

	  if($scope.currentUser === user){
		  $scope.currentUser = null;
		  UserSvc.logout();
	  }  
  };
})
