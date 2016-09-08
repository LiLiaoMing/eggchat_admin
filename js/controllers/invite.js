scpApp.controller('InviteCtrl', function($scope, $location, $utils) {
	
	$scope.errorMsg = "";
	$scope.isLoading = false;
	$scope.data = {};
	
	$scope.data.category = "group";
	$scope.data.selectedGroup = null;
	$scope.data.selectedUsers = {};

	$scope.data.groups = [];
	$scope.data.users = [];

	// Group
	$scope.searchKeys = {
		'offset': 0,
	}
	
    if ($utils.user.level == 1 || $utils.user.level == 2)
        $scope.searchKeys.path = $utils.profile.path + $utils.profile.id + '.';
    if ($utils.user.level == 3)
        $scope.searchKeys.path = $utils.user.path + $utils.user.uid + '.';



	$scope.init = function() {
		$scope.searchGroup();
		$scope.searchUser();
	}

	$scope.searchGroup = function() {
		$scope.errorMsg = "";
		$scope.isLoading = true;

		$utils.groupSearch($scope.searchKeys, function(res) {
			// console.log(JSON.stringify(res));
            if (res.data.status == 'fail') {
            	$scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res.data.message);	
            	$scope.isLoading = false;
            }
            else
            {
            	$scope.isLoading = false;
            	$scope.data.groups = res.data.data.result;
            	// $scope.data.count = res.data.data.count;
            	// $scope.data.totalPages = Math.ceil($scope.data.count / $scope.searchKeys.amount);
            }
            
        }, function(res) {
			$scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res);
			$scope.isLoading = false;
			// console.log(JSON.stringify(res));
        }); 
	}

	$scope.searchUser = function() {
        $scope.errorMsg = "";
        $scope.isLoading = true;

        $utils.userSearch($scope.searchKeys, function(res) {
            if (res.data.status == 'fail') {
                $scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res.data.message); 
                $scope.isLoading = false;
            }
            else
            {
                $scope.isLoading = false;
                $scope.data.users = res.data.data.result.concat($scope.data.users);
                // $scope.data.count = res.data.data.count;
                // $scope.data.totalPages = Math.ceil($scope.data.count / $scope.searchKeys.amount);
                
            }
            
        }, function(res) {
            $scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res);
            $scope.isLoading = false;
            // console.log(JSON.stringify(res));
        }); 

        
        searchKeys = {
        	'level': 5,
        	'offset': 0,
        }

        $utils.userSearch(searchKeys, function(res) {
            if (res.data.status == 'fail') {
                $scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res.data.message); 
                $scope.isLoading = false;
            }
            else
            {
                $scope.isLoading = false;
               	$scope.data.users = res.data.data.result.concat($scope.data.users);
                // $scope.data.count = res.data.data.count;
                // $scope.data.totalPages = Math.ceil($scope.data.count / $scope.searchKeys.amount);
                
            }
            
        }, function(res) {
            $scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res);
            $scope.isLoading = false;
            // console.log(JSON.stringify(res));
        }); 
    }

	$scope.add = function() {
		if ($scope.data.category == "group")
			$scope.addGroup();
		else
			$scope.addUser();
	}

	$scope.addGroup = function() {

		if ($scope.data.selectedGroup == null)
		{
			alert("Please select group first.");
			return;
		}

		$scope.errorMsg = "";
		$scope.isLoading = true;
		
		params = {
			'group_qbid': $utils.group.qb_id,
			'occupants_ids': $scope.data.selectedGroup.occupants_ids.substring(1, $scope.data.selectedGroup.occupants_ids.length-1)	
		}

		$utils.groupUpdate(params, function(res) {
			// console.log(JSON.stringify(res));
            if (res.data.status == 'fail') {
            	$scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res.data.message);	
            	$scope.isLoading = false;
            }
            else
            {
            	$scope.isLoading = false;
            	alert("Your Message has been sent successfully.");
            }
            
        }, function(res) {
			$scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res);
			$scope.isLoading = false;
			
        }); 
	}

	$scope.addUser = function() {

		ids = "";

		angular.forEach($scope.data.users, function(user, key) {
			if (user.selected == "1")	
				ids = ids + user.qb_id + ",";
		});

		if (ids.length == 0)
		{
			alert("Please select users first.");
			return;
		}

		$scope.errorMsg = "";
		$scope.isLoading = true;
		
		params = {
			'group_qbid': $utils.group.qb_id,
			'occupants_ids': ids	
		}

		$utils.groupUpdate(params, function(res) {
			// console.log(JSON.stringify(res));
            if (res.data.status == 'fail') {
            	$scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res.data.message);	
            	$scope.isLoading = false;
            }
            else
            {
            	$scope.isLoading = false;
            	alert("Your Message has been sent successfully.");
            }
            
        }, function(res) {
			$scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res);
			$scope.isLoading = false;
			
        }); 
	}
});