scpApp.controller('CirculateCtrl', function($scope, $location, $utils) {
	
	$scope.errorMsg = "";
	$scope.isLoading = false;
	$scope.data = {};
	
	$scope.data.searchkey=null;
	$scope.data.category="member";

	$scope.data.groups = [];
	$scope.data.users = [];
	$scope.searchKeys = {
		'offset': 0,
	}

	$scope.data.criteria = [
		{ 
			label: 'Member',
			value: 'member'
		},
		{ 
			label: 'Group',
			value: 'group'
		},
		{ 
			label: 'Client',
			value: 'client'
		},
		{ 
			label: 'Profile',
			value: 'profile'
		}
	];
	$scope.data.from = 'core';

	if (typeof $stateParams.from !== 'undefined')
    {
		$scope.data.criteria = [
			{ 
				label: 'Member',
				value: 'member'
			},
			{ 
				label: 'Group',
				value: 'group'
			}
		];
		$scope.data.from = 'profile';
    }
    
	$scope.init = function() {
		
	}

	$scope.doSearch = function() {
		$scope.data.groups = [];
		$scope.data.users = [];

		if ($utils.user.path == null) $utils.user.path = '';
		$scope.searchKeys.path = $utils.user.path + $utils.user.uid + '.';

		if ($scope.data.category == 'member')
		{
			// $scope.searchKeys.path = $utils.user.path;
			$scope.searchKeys.level = 4;
			$scope.searchUsers();
		}
		else if ($scope.data.category == 'group')
			$scope.searchGroup();
		else if ($scope.data.category == 'client')
		{
			// $scope.searchKeys.path = $utils.user.path;
			$scope.searchKeys.level = 2;
			$scope.searchUsers();
		}
		else if ($scope.data.category == 'profile')
		{
			// $scope.searchKeys.path = $utils.user.path;
			$scope.searchKeys.level = 3;
			$scope.searchUsers();
		}

	}
	
	$scope.searchUsers = function() {

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
            }
            
        }, function(res) {
			$scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res);
			$scope.isLoading = false;
			// console.log(JSON.stringify(res));
        }); 
	}
	$scope.sendCirculate = function() {
		if ($scope.data.category == 'group')
			$scope.sendGroupCirculate();
		else
			$scope.sendUserCirculate();

	}

	$scope.sendGroupCirculate = function() {
		qb_ids = '';
		angular.forEach($scope.data.groups, function(value, key) {
			if (value.selected == '1')
				qb_ids = qb_ids + value.qb_id + ','; 
		});

		if (qb_ids.length == 0)
		{
			alert("Please select groups first!");
			return;
		}
		if ($scope.data.message == null || $scope.data.message == "") 
		{
			alert("Please input message!");
			return;
		}

		qb_ids = qb_ids.substring(0, qb_ids.length-1);
		
		params = {};
		params.qb_ids = qb_ids;
		params.message = $scope.data.message;
		// console.log(JSON.stringify(params));

		$scope.errorMsg = "";
		$scope.isLoading = true;
		
		$utils.groupCirculate(params, function(res) {
			console.log(JSON.stringify(res));
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

	$scope.sendUserCirculate = function() {
		qb_ids = '';
		angular.forEach($scope.data.users, function(value, key) {
			if (value.selected == '1')
				qb_ids = qb_ids + value.qb_id + ','; 
		});

		if (qb_ids.length == 0)
		{
			alert("Please select users first!");
			return;
		}
		if ($scope.data.message == null || $scope.data.message == "") 
		{
			alert("Please input message!");
			return;
		}

		qb_ids = qb_ids.substring(0, qb_ids.length-1);
		
		params = {};
		params.qb_ids = qb_ids;
		params.message = $scope.data.message;
		// console.log(JSON.stringify(params));

		$scope.errorMsg = "";
		$scope.isLoading = true;
		
		$utils.userCirculate(params, function(res) {
			console.log(JSON.stringify(res));
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