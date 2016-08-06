scpApp.controller('CoreEditCtrl', function($scope, $location, $utils) {
	
	$scope.errorMsg = "";
	$scope.isLoading = false;

	$scope.user = {};
	$scope.permissions = [true, true, true, true, true, true, true, true];


	$scope.init = function() {
	}

	$scope.create = function() {
		$scope.errorMsg = "";
		$scope.isLoading = true;

		$scope.user.level = "1";
		$scope.user.permission = '';
		for (var i=1; i<8; i++)
		{
			if (i==4)	continue;
			
			if ($scope.permissions[i]) 
				$scope.user.permission = $scope.user.permission + 'Y';
			else
				$scope.user.permission = $scope.user.permission + 'N';	
		}

        $utils.userCreate($scope.user, function(res) {
        	// console.log(JSON.stringify(res));
            if (res.data.status == 'fail') {
            	$scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res.data.message);	
            	$scope.isLoading = false;
            }
            else
            	$location.path('app/cores');
        }, function(res) {
			$scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res);
			$scope.isLoading = false;
        }); 
    }


    $scope.updateCorePermission = function () {
    	$scope.permissions[1] = $scope.permissions[0];
    	$scope.permissions[2] = $scope.permissions[0];
    	$scope.permissions[3] = $scope.permissions[0];
    }

    $scope.updateEnterprisePermission = function () {
    	$scope.permissions[5] = $scope.permissions[4];
    	$scope.permissions[6] = $scope.permissions[4];
    	$scope.permissions[7] = $scope.permissions[4];
    }
});