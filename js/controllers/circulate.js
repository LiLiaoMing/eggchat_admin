scpApp.controller('CirculateCtrl', function($scope, $location, $utils) {
	
	$scope.errorMsg = "";
	$scope.isLoading = false;
	$scope.data = {};
	$scope.searchKeys = {
		'offset': 0,
	}

	$scope.init = function() {
		$scope.search();
	}

	$scope.search = function() {
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
            	$scope.data.count = res.data.data.count;
            	$scope.data.totalPages = Math.ceil($scope.data.count / $scope.searchKeys.amount);
            }
            
        }, function(res) {
			$scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res);
			$scope.isLoading = false;
			// console.log(JSON.stringify(res));
        }); 
	}

	$scope.sendCirculate = function() {
		qb_ids = '';
		angular.forEach($scope.data.groups, function(value, key) {
			if (value.selected == '1')
				qb_ids = qb_ids + value.qb_id + ','; 
		});

		if (qb_ids.length > 0 )
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
});