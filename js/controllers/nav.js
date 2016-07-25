scpApp.controller('NavCtrl', function($scope, $utils, $location) {
	
	$scope.full_name = $utils.username;
	$scope.level = $utils.user_types[$utils.level -1];
	$scope.permission = $utils.permission;
	$scope.isAdmin = (localStorage.getItem('permission') == 'Administrator');

	$scope.init = function() {
		
	}
});