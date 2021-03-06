scpApp.controller('CoresCtrl', function($scope, $location, $utils) {
	
	$scope.errorMsg = "";
	$scope.isLoading = false;

	$scope.data = {};
	$scope.searchKeys = {
		'level': 1,
		'offset': 0,
		'pageNum': 1,
		'amount': $utils.amount_per_page
	}

	$scope.init = function() {
		$scope.search();
	}

	$scope.search = function() {
		$scope.errorMsg = "";
		$scope.isLoading = true;

		$scope.searchKeys.offset = ($scope.searchKeys.pageNum - 1) * $scope.searchKeys.amount;
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
		
		$utils.userDelete(id, function(res) {
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

	$scope.updateDisable = function(user) {
		$scope.errorMsg = "";
        $scope.isLoading = true;
		
		newuser = {};
		newuser.id = user.id;
		newuser.username = user.username;
		newuser.disabled = user.disabled;

		console.log(JSON.stringify(newuser));

        $utils.userUpdate(newuser, function(res) {
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
});