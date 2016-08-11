scpApp.controller('ProfileEditCtrl', function($scope, $location, $stateParams, $utils) {
	
	$scope.errorMsg = "";
	$scope.isLoading = false;

	$scope.user = {};
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
                $scope.user.pri_contact = res.data.data.result[0].pri_contact;
                $scope.user.pri_contact_no = Number(res.data.data.result[0].pri_contact_no);
                $scope.user.email = res.data.data.result[0].email;
                $scope.user.start_date = res.data.data.result[0].start_date;
                $scope.user.expiry_date = res.data.data.result[0].expiry_date;
                $scope.user.max_member = Number(res.data.data.result[0].max_member);
                $scope.user.max_group = Number(res.data.data.result[0].max_group);
                $scope.user.max_per_group = Number(res.data.data.result[0].max_per_group);
                $scope.user.confirmpassword = $scope.user.password;
                
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

    
	$scope.create = function() {
		$scope.errorMsg = "";
		$scope.isLoading = true;

		$scope.user.level = "3";
		if ($utils.user.level == 1)
			$scope.user.path = $utils.client.path + $utils.client.id + '.';
		if ($utils.user.level == 2)
			$scope.user.path = $utils.user.path + $utils.user.uid + '.';

        $utils.userCreate($scope.user, function(res) {
        	// console.log(JSON.stringify(res));
            if (res.data.status == 'fail') {
            	$scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res.data.message);	
            	$scope.isLoading = false;
            }
            else
            	$location.path('app/profiles');
        }, function(res) {
			$scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res);
			$scope.isLoading = false;
        }); 
    }
    


    $scope.update = function() {
        $scope.errorMsg = "";
        $scope.isLoading = true;

        $utils.userUpdate($scope.user, function(res) {
            // console.log(JSON.stringify(res));
            if (res.data.status == 'fail') {
                $scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res.data.message); 
                $scope.isLoading = false;
            }
            else
                $location.path('app/profiles');
        }, function(res) {
            $scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res);
            $scope.isLoading = false;
        }); 
    }
});