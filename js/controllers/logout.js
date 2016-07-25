scpApp.controller('LogoutCtrl', function($scope, $utils, $location) {
	
	$scope.init = function() {
		localStorage.clear();
		window.location="#/login";
	}
});