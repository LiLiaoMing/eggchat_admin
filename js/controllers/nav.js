scpApp.controller('NavCtrl', function($scope, $utils, $location) {
	
	$scope.full_name = $utils.user.username;
	$scope.level_title = $utils.user_types[$utils.user.level -1];
	$scope.level = $utils.user.level;
	$scope.permission = $utils.user.permission;
	// $scope.isAdmin = (localStorage.getItem('permission') == 'Administrator');

	$scope.init = function() {
		
	}
});