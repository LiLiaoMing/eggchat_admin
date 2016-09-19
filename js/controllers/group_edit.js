scpApp.controller('GroupEditCtrl', function($scope, $location, $stateParams, $utils) {
	
	$scope.errorMsg = "";
	$scope.isLoading = false;

	$scope.data = {};
	$scope.group = {};
	$scope.id = null;

	$scope.searchKeys = {
        'level': 4
    }
    
    if ($utils.user.level == 1 || $utils.user.level == 2)
        $scope.searchKeys.path = $utils.profile.path + $utils.profile.id + '.';
    if ($utils.user.level == 3)
        $scope.searchKeys.path = $utils.user.path + $utils.user.uid + '.';


    $scope.init = function() {
        $scope.search();
    }

    $scope.search = function() {
        $scope.errorMsg = "";
        $scope.isLoading = true;

        console.log(JSON.stringify($scope.searchKeys));
        // $scope.searchKeys.offset = ($scope.searchKeys.pageNum - 1) * $scope.searchKeys.amount;
        $utils.userSearch($scope.searchKeys, function(res) {
            if (res.data.status == 'fail') {
                $scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res.data.message); 
                $scope.isLoading = false;
            }
            else
            {
                $scope.isLoading = false;
                $scope.data.users = res.data.data.result;
                $scope.data.count = res.data.data.count;
                $scope.data.totalPages = Math.ceil($scope.data.count / $scope.searchKeys.amount);
                
            }
            
        }, function(res) {
            $scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res);
            $scope.isLoading = false;
            // console.log(JSON.stringify(res));
        }); 
    }

	$scope.search();


	if (typeof $stateParams.groupId !== 'undefined')
    {
    	console.log('Normal Updating');
        $scope.id = Number($stateParams.groupId);

        $scope.errorMsg = "";
		$scope.isLoading = true;

		$scope.searchKeys = {
			id: $stateParams.groupId
		};
		
		$utils.userSearch($scope.searchKeys, function(res) {
            if (res.data.status == 'fail') {
            	$scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res.data.message);	
            	$scope.isLoading = false;
            }
            else
            {
            	$scope.isLoading = false;
            	$scope.group.id = res.data.data.result[0].id;
                $scope.group.username = res.data.data.result[0].username;
                $scope.group.password = res.data.data.result[0].password;
                $scope.group.pri_contact = res.data.data.result[0].pri_contact;
                $scope.group.pri_contact_no = Number(res.data.data.result[0].pri_contact_no);
                $scope.group.email = res.data.data.result[0].email;
                $scope.group.start_date = res.data.data.result[0].start_date;
                $scope.group.expiry_date = res.data.data.result[0].expiry_date;
                $scope.group.max_member = Number(res.data.data.result[0].max_member);
                $scope.group.max_group = Number(res.data.data.result[0].max_group);
                $scope.group.max_per_group = Number(res.data.data.result[0].max_per_group);
                $scope.group.confirmpassword = $scope.group.password;
                
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
    
	$scope.create = function() {
		$scope.errorMsg = "";
		$scope.isLoading = true;

        // console.log(JSON.stringify($scope.group));
        $utils.groupCreate($scope.group, function(res) {
        	
            if (res.data.status == 'fail') {
            	$scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res.data.message);	
            	$scope.isLoading = false;
            }
            // else
            	// $location.path('app/groups');
        }, function(res) {
			$scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res);
			$scope.isLoading = false;
        }); 
    }
    


    $scope.update = function() {
        $scope.errorMsg = "";
        $scope.isLoading = true;

        $utils.userUpdate($scope.group, function(res) {
            // console.log(JSON.stringify(res));
            if (res.data.status == 'fail') {
                $scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res.data.message); 
                $scope.isLoading = false;
            }
            else
                $location.path('app/groups');
        }, function(res) {
            $scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res);
            $scope.isLoading = false;
        }); 
    }
});