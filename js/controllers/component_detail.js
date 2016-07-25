scpApp.controller('ComponentDetailCtrl', function($scope, $element, $components, $stateParams, $timeout, $location) {

	$scope.datepickerOptions = {
        format: 'yyyy-mm-dd',
        language: 'en',
        startDate: "2000-10-01",
        endDate: "2020-10-31",
        autoclose: true,
        weekStart: 0
    }

	$scope.Id = null;
	$scope.data = {};
	$scope.data.project_id = $stateParams.projectId;
	$scope.data.project_name = $stateParams.projectName;
	$scope.data.component_id = $stateParams.componentId;
	$scope.component = {};


	if (localStorage.getItem('permission') != 'Administrator')
	{
		$location.path('login');
	}

	function date_process() {
		if($scope.project.original_start_date) 
			$scope.project.original_start_date = $scope.project.original_start_date.substring(0, 10);
		if($scope.project.original_end_date) 
			$scope.project.original_end_date = $scope.project.original_end_date.substring(0, 10);
		if($scope.project.revised_end_date) 
			$scope.project.revised_end_date = $scope.project.revised_end_date.substring(0, 10);
		if($scope.project.last_status_update) 
			$scope.project.last_status_update = $scope.project.last_status_update.substring(0, 10);
	}

	if ($stateParams.componentId != "")
	{
		$scope.Id = Number($stateParams.componentId);

		$components.get_all( function(res) {

			$scope.component = res.data.filter( function(entry) {
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

		$components.update($scope.component, function(res) {
			$location.path('app/components/' + $scope.data.project_id + '/' + $scope.data.project_name);
		}, function(res) {
			console.log('error' + res);
		});
		
	}

	$scope.create = function() {
		
		date_process();
		
		$scope.component.project_id = $scope.data.project_id;
		$components.create($scope.component, function(res) {
			$location.path('app/components/' + $scope.data.project_id + '/' + $scope.data.project_name);
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