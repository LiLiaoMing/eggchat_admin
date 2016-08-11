scpApp.controller('UserEditCtrl', function($scope, $location, $stateParams, $utils) {
	
	$scope.errorMsg = "";
	$scope.isLoading = false;

	$scope.user = {};
	$scope.permissions = [true, true, true];
	$scope.id = null;

	if (typeof $stateParams.userId !== 'undefined')
    {
    	console.log('Normal Updating');
        $scope.id = Number($stateParams.userId);

        $scope.errorMsg = "";
		$scope.isLoading = true;

		$scope.searchKeys = {
			id: $stateParams.userId
		};
		
		$utils.userSearch($scope.searchKeys, function(res) {
            if (res.data.status == 'fail') {
            	$scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res.data.message);	
            	$scope.isLoading = false;
            }
            else
            {
            	$scope.isLoading = false;
            	$scope.user.id = res.data.data.result[0].id;
                $scope.user.username = res.data.data.result[0].username;
                $scope.user.password = res.data.data.result[0].password;
                $scope.user.mobile = Number(res.data.data.result[0].mobile);
                $scope.user.email = res.data.data.result[0].email;
                $scope.user.department = res.data.data.result[0].department;
                $scope.user.permission = res.data.data.result[0].permission;
                $scope.user.confirmpassword = $scope.user.password;
                
                $scope.permissions[0] = ($scope.user.permission.charAt(0) == 'Y') ? true : false;
                $scope.permissions[1] = ($scope.user.permission.charAt(1) == 'Y') ? true : false;
                $scope.permissions[2] = ($scope.user.permission.charAt(2) == 'Y') ? true : false;
            }
            
        }, function(res) {
			$scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res);
			$scope.isLoading = false;
        }); 
    }
    else
    {
    	console.log('Normal Creating');
    }


	$scope.init = function() {
	}

    $scope.updatePermission = function() {
        $scope.user.permission = '';
        for (var i=0; i<3; i++)
        {
            if ($scope.permissions[i]) 
                $scope.user.permission = $scope.user.permission + 'Y';
            else
                $scope.user.permission = $scope.user.permission + 'N';  
        }
    }

	$scope.create = function() {
		$scope.errorMsg = "";
		$scope.isLoading = true;
		
		$scope.user.level = "4";
		if ($utils.user.level == 1 || $utils.user.level == 2)
			$scope.user.path = $utils.profile.path + $utils.profile.id + '.';
		if ($utils.user.level == 3)
			$scope.user.path = $utils.user.path + $utils.user.uid + '.';
		$scope.updatePermission();

        $utils.userCreate($scope.user, function(res) {
        	// console.log(JSON.stringify(res));
            if (res.data.status == 'fail') {
            	$scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res.data.message);	
            	$scope.isLoading = false;
            }
            else
            	$location.path('app/users');
        }, function(res) {
			$scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res);
			$scope.isLoading = false;
        }); 
    }
    
    $scope.update = function() {
        $scope.errorMsg = "";
        $scope.isLoading = true;

        $scope.updatePermission();
        $utils.userUpdate($scope.user, function(res) {
            // console.log(JSON.stringify(res));
            if (res.data.status == 'fail') {
                $scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res.data.message); 
                $scope.isLoading = false;
            }
            else
                $location.path('app/users');
        }, function(res) {
            $scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res);
            $scope.isLoading = false;
        }); 
    }
});