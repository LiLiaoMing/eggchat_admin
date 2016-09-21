scpApp.controller('GroupsCtrl',  function($scope, $location, $utils) {
	
	$scope.errorMsg = "";
	$scope.isLoading = false;
	$scope.data = {};
	$scope.searchKeys = {
		'offset': 0,
		'pageNum': 1,
		'amount': $utils.amount_per_page
	}
	$scope.searchKeys1 = {
		'offset': 0,
		'pageNum': 1,
		'amount': $utils.amount_per_page
	}

	$scope.data.customer = $utils.client;
	$scope.data.profile = $utils.profile;
	$scope.selectedGroup = null;
	
	$scope.init = function() {
		$scope.search();
	}

	$scope.search = function() {
		$scope.errorMsg = "";
		$scope.isLoading = true;

		$scope.searchKeys.offset = ($scope.searchKeys.pageNum - 1) * $scope.searchKeys.amount;
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
            	$scope.data.count = res.data.data.count;
            	$scope.data.totalPages = Math.ceil($scope.data.count / $scope.searchKeys.amount);
            }
            
        }, function(res) {
			$scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res);
			$scope.isLoading = false;
			// console.log(JSON.stringify(res));
        }); 
	}

	$scope.nextPage = function() {
		if ($scope.searchKeys.pageNum < $scope.data.totalPages)
		{
			$scope.searchKeys.pageNum++;
			$scope.data = {};
			$scope.search();
		}
	}

	$scope.prevPage = function() {
		if ($scope.searchKeys.pageNum > 1)
		{
			$scope.searchKeys.pageNum--;
			$scope.data = {};
			$scope.search();
		}
	}

	$scope.lastPage = function() {
		if ($scope.searchKeys.pageNum < $scope.data.totalPages)
		{
			$scope.searchKeys.pageNum = $scope.data.totalPages;
			$scope.data = {};
			$scope.search();
		}
	}

	$scope.firstPage = function() {
		if ($scope.searchKeys.pageNum != 1)
		{
			$scope.searchKeys.pageNum = 1;
			$scope.data = {};
			$scope.search();
		}
	}

	$scope.keyListener = function(keyEvent) {
		if (keyEvent.which === 13)
		{
			$scope.searchKeys.pageNum = Math.floor($scope.searchKeys.pageNum);
			if (($scope.searchKeys.pageNum > 0) && ($scope.searchKeys.pageNum <= $scope.data.totalPages))
			{
				$scope.data = {};
				$scope.search();
			}
			else
				alert("Wrong page number!");
		}
	}

	$scope.delete = function(id) {
		
		$utils.groupDelete(id, function(res) {
			$scope.errorMsg = "";
			$scope.isLoading = true;

            if (res.data.status == 'fail') {
            	$scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res.data.message);	
            	$scope.isLoading = false;
            }
            else
            {
            	$scope.search();
            }
            
        }, function(res) {
			$scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res);
			$scope.isLoading = false;
			// console.log(JSON.stringify(res));
        }); 
	}

	$scope.gotoGroups = function() {
		if ($scope.data.profile === undefined)
			alert('Please select profile first.');
		else
		{
			localStorage.setItem('profile', JSON.stringify($scope.data.profile));
			$utils.profile = $scope.data.profile;
			$location.path('app/groups');
		}

	}

	$scope.gotogroups = function() {
		if ($scope.data.profile === undefined)
			alert('Please select profile first.');
		else
		{
			localStorage.setItem('profile', JSON.stringify($scope.data.profile));
			$utils.profile = $scope.data.profile;
			$location.path('app/groups');
		}

	}
	$scope.gotoCirculate = function() {
		if ($scope.data.profile === undefined)
			alert('Please select profile first.');
		else
		{
			localStorage.setItem('profile', JSON.stringify($scope.data.profile));
			$utils.profile = $scope.data.profile;
			$location.path('app/circulate');
		}

	}

	$scope.updateDisable = function(group) {
		$scope.errorMsg = "";
        $scope.isLoading = true;
		
		newgroup = {};
		newgroup.id = group.id;
		newgroup.groupname = group.groupname;
		newgroup.disabled = group.disabled;

		console.log(JSON.stringify(newgroup));

        $utils.groupUpdate(newgroup, function(res) {
            if (res.data.status == 'fail') {
                $scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res.data.message); 
                $scope.isLoading = false;
            }
            else
            	$scope.isLoading = false;	
        }, function(res) {
            $scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res);
            $scope.isLoading = false;
        }); 
	}

	$scope.changeGroup = function(selectedGroup) {

		$scope.errorMsg = "";
		$scope.isLoading = true;

		$scope.searchKeys1.offset = ($scope.searchKeys1.pageNum - 1) * $scope.searchKeys1.amount;
		$scope.searchKeys1.qb_id = selectedGroup.qb_id;
		$scope.selectedGroup = selectedGroup;

		$utils.groupUsers($scope.searchKeys1, function(res) {
            
            if (res.data.status == 'fail') {
            	$scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res.data.message);	
            	$scope.isLoading = false;
            }
            else
            {
            	$scope.isLoading = false;
            	$scope.data.users = res.data.data.result;
            	$scope.data.count1 = res.data.data.count;
            	$scope.data.totalPages1 = Math.ceil($scope.data.count / $scope.searchKeys.amount);
            }
            
        }, function(res) {
			$scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res);
			$scope.isLoading = false;
			// console.log(JSON.stringify(res));
        }); 
	}

	$scope.gotoInvitation = function() {
		if ($scope.selectedGroup === undefined || $scope.selectedGroup === null)
			alert('Please select group first.');
		else
		{
			localStorage.setItem('group', JSON.stringify($scope.selectedGroup));
			$utils.group = $scope.selectedGroup;
			$location.path('app/invite');
		}
	}
});