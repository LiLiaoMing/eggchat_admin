scpApp.controller('LoginCtrl', function($scope, $utils, $location) {
	$scope.username = 'rkc';
	$scope.password = 'rkc';
	$scope.errorMsg = '';
	$scope.isLoading = false;
	
	$scope.login = function() {
		$scope.isLoading = true;
		$scope.errorMsg = '';
		
		$utils.login ($scope.username, $scope.password,
			function (result, message) {
				$scope.isLoading = false;
				if (result == true)				
				{
					if ($utils.user.level == "1")					// Core User
						$location.path('app/core');
					else if ($utils.user.level == "2")			// Client
						$location.path('app/profiles');
					else if ($utils.user.level == "3")			// Client Profile
						$location.path('app/groups');
					else if ($utils.user.level == "4")			// Profile User
						$location.path('app/user-edit');
					else
						alert("This account can't login. Not proper permission.");
				}
				else
					$scope.errorMsg = message;
		});	
	}


	$scope.keyListener = function(keyEvent) {
		if (keyEvent.which === 13)
			$scope.login();
	}
});