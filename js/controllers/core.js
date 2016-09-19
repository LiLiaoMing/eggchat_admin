scpApp.controller('CoreCtrl', function($scope, $location, $utils) {
	
	$scope.errorMsg = "";
	$scope.isLoading = false;

	$scope.data = {};

	$scope.init = function() {
		$scope.getStats();
	}

	$scope.getStats = function() {
		$scope.errorMsg = "";
		$scope.isLoading = true;

		$utils.getStats(function(res) {
            if (res.data.status == 'fail') {
            	$scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res.data.message);	
            	$scope.isLoading = false;
            }
            else
            {
            	$scope.isLoading = false;
            	$scope.data.stats = res.data.data;
            }
            
        }, function(res) {
			$scope.errorMsg = 'Not succeeded! Error : ' + JSON.stringify(res);
			$scope.isLoading = false;
			// console.log(JSON.stringify(res));
        }); 
	}
});