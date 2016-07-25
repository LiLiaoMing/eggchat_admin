scpApp.controller('InitiativeDetailCtrl', function($scope, $element, $initiatives, $stateParams, $timeout, $location) {

	$scope.datepickerOptions = {
        format: 'yyyy-mm-dd',
        language: 'en',
        startDate: "2000-10-01",
        endDate: "2020-10-31",
        autoclose: true,
        weekStart: 0
    }

	$scope.Id = null;
	$scope.initiative = {};

	if (localStorage.getItem('permission') != 'Administrator')
	{
		$location.path('login');
	}

	function date_process() {
		if($scope.initiative.start_date) 
			$scope.initiative.start_date = $scope.initiative.start_date.substring(0, 10);
		if($scope.initiative.end_date) 
			$scope.initiative.end_date = $scope.initiative.end_date.substring(0, 10);
		if($scope.initiative.revised_end_date) 
			$scope.initiative.revised_end_date = $scope.initiative.revised_end_date.substring(0, 10);
		if($scope.initiative.revised_initiative_date) 
			$scope.initiative.revised_initiative_date = $scope.initiative.revised_initiative_date.substring(0, 10);
		if($scope.initiative.last_status_update) 
			$scope.initiative.last_status_update = $scope.initiative.last_status_update.substring(0, 10);
	}

	if ($stateParams.initiativeId != "")
	{
		$scope.Id = Number($stateParams.initiativeId);

		$initiatives.get( function(res) {

			$scope.initiative = res.data.filter( function(entry) {
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

		$initiatives.update($scope.initiative, function(res) {
			$location.path('app/initiative');
		}, function(res) {
			console.log('error' + res);
		});
		
	}

	$scope.create = function() {
		
		date_process();
		$initiatives.create($scope.initiative, function(res) {
			$location.path('app/initiative');
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