scpApp.controller('NavCtrl', function($scope, $utils, $location) {
	
	$scope.firstname = localStorage.getItem('firstname');
	$scope.lastname = localStorage.getItem('lastname');
	$scope.permission = localStorage.getItem('permission');
	$scope.isAdmin = (localStorage.getItem('permission') == 'Administrator');

	$scope.init = function() {
		
	}
});