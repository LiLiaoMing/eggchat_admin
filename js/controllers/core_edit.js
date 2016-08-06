scpApp.controller('CoreEditCtrl', function($scope, $location, $utils) {
	
	$scope.user = {};
	$scope.user.permission = [true, true, true, true, true, true, true, true];
	
	$scope.init = function() {
	
	}

	$scope.create = function() {
        if ($scope.user.Password != $scope.user.ConfirmPassword)
        {
            return;
        }
        $users.create($scope.user, function(res) {
            console.log(JSON.stringify(res));
            $location.path('app/user');
        }, function(res) {
            console.log('error' + res);
        }); 
    }


    $scope.updateCorePermission = function () {
    	$scope.user.permission[1] = $scope.user.permission[0];
    	$scope.user.permission[2] = $scope.user.permission[0];
    	$scope.user.permission[3] = $scope.user.permission[0];
    }

    $scope.updateEnterprisePermission = function () {
    	$scope.user.permission[5] = $scope.user.permission[4];
    	$scope.user.permission[6] = $scope.user.permission[4];
    	$scope.user.permission[7] = $scope.user.permission[4];
    }
});