scpApp.controller('CoreEditCtrl', function($scope, $location, $stateParams, $utils) {
	
	$scope.errorMsg = "";
	$scope.isLoading = false;

	$scope.user = {};
	$scope.permissions = [true, true, true, true, true, true, true, true];
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
                
                $scope.permissions[1] = ($scope.user.permission.charAt(0) == 'Y') ? true : false;
                $scope.permissions[2] = ($scope.user.permission.charAt(1) == 'Y') ? true : false;
                $scope.permissions[3] = ($scope.user.permission.charAt(2) == 'Y') ? true : false;
                $scope.permissions[5] = ($scope.user.permission.charAt(3) == 'Y') ? true : false;
                $scope.permissions[6] = ($scope.user.permission.charAt(4) == 'Y') ? true : false;
                $scope.permissions[7] = ($scope.user.permission.charAt(5) == 'Y') ? true : false;
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
        for (var i=1; i<8; i++)
        {
            if (i==4)   continue;
            
            if ($scope.permissions[i]) 
                $scope.user.permission = $scope.user.permission + 'Y';
            else
                $scope.user.permission = $scope.user.permission + 'N';  
        }
    }

	$scope.create = function() {
		$scope.errorMsg = "";
		$scope.isLoading = true;

		$scope.user.level = "1";
		$scope.updatePermission();

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
                $location.path('app/cores');
        }, function(res) {
            $scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res);
            $scope.isLoading = false;
        }); 
    }
});