scpApp.controller('LoginCtrl', function($scope, $utils, $location) {
	$scope.username = 'rkc';
	$scope.password = 'rkc';
	$scope.errorMsg = '';
	
	$scope.login = function() {
		$utils.login ($scope.username, $scope.password,
			function (result, message) {
				if (result == true)				
					$location.path('#/app/dashboard');
				else
					$scope.errorMsg = message;
		});	
	}


	$scope.keyListener = function(keyEvent) {
		if (keyEvent.which === 13)
			$scope.login();
	}
});