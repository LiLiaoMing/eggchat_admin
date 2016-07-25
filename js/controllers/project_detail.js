scpApp.controller('ProjectDetailCtrl', function($scope, $element, $projects, $stateParams, $timeout, $location) {

	$scope.datepickerOptions = {
        format: 'yyyy-mm-dd',
        language: 'en',
        startDate: "2000-10-01",
        endDate: "2020-10-31",
        autoclose: true,
        weekStart: 0
    }

	$scope.Id = null;
	$scope.project = {};

	if (localStorage.getItem('permission') != 'Administrator')
	{
		$location.path('login');
	}

	function date_process() {
		
		if($scope.component.StartDate) 
			$scope.component.StartDate = $scope.component.StartDate.substring(0, 10);
		if($scope.component.EndDate) 
			$scope.component.EndDate = $scope.component.EndDate.substring(0, 10);
		if($scope.component.RevisedEndDate) 
			$scope.component.RevisedEndDate = $scope.component.RevisedEndDate.substring(0, 10);
		if($scope.component.LastStatusUpdate) 
			$scope.component.LastStatusUpdate = $scope.component.LastStatusUpdate.substring(0, 10);
	}

	if ($stateParams.projectId != "")
	{
		$scope.Id = Number($stateParams.projectId);

		$projects.get( function(res) {

			$scope.project = res.data.filter( function(entry) {
				return entry.Id === $scope.Id;
			})[0];

			date_process();

		}, function(res) {
			console.log('error' + res);
			$location.path('login');
		});
	}
	
	$scope.update = function() {

		date_process();

		$projects.update($scope.project, function(res) {
			console.log(JSON.stringify(res));
			$location.path('app/table');
		}, function(res) {
			console.log('error' + res);
		});
		
	}

	$scope.create = function() {
		
		date_process();
		
		$projects.create($scope.project, function(res) {
			console.log(JSON.stringify(res));
			$location.path('app/table');
		}, function(res) {
			console.log('error' + res);
		});
		
	}

	$scope.init = function() {
		$('.date-picker').datepicker({
	        orientation: "top auto",
	        autoclose: true
	    });
	}
})