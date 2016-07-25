scpApp.controller('GraphCtrl', function($scope, $projects, $stateParams, $timeout, $location) {

	$scope.Id = null;
	$scope.project = {};
	$scope.data = {};
	$scope.data.fields = [];

	if ($stateParams.projectId != "")
	{
		$scope.Id = Number($stateParams.projectId);

		$projects.get( function(res) {

			$scope.project = res.data.filter( function(entry) {
				return entry.Id === $scope.Id;
			})[0];

			$scope.data.fields.push ({"label":"Schedule Completion", "value":$scope.project.ScheduleCompletion});
			$scope.data.fields.push ({"label":"Budget Utilization", "value":$scope.project.BudgetUtilization});
			
		}, function(res) {
			console.log('error' + res);
			$location.path('login');
		});
	}
	
})