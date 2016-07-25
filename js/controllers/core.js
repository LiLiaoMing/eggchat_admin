scpApp.controller('CoreCtrl', function($scope, $location) {
	
	$scope.data = {};
	
	$scope.max_limit = [];
	for( var i=0; i<250; i++)
		$scope.max_limit.push(i+1);

	// $projects.get_dashboard( function(res) {
	// 	// console.log(JSON.stringify(res));
	// 	$scope.data = res.data;
		
	// 	init_dashboard();

	// }, function(res) {
	// 	console.log('error' + res);
	// 	$location.path('login');
	// });

	$scope.init = function() {
	
	}

	function init_dashboard() {
    	
   //  	$('.slimscroll').slimscroll({
	  //       allowPageScroll: true
	 	// });

	 	// $scope.data.ProjectNames = [];
	 	// $scope.data.BudgetUtilizations = [];
	 	// $scope.data.ScheduleCompletions = [];
	 	// $scope.data.PlannedBudgets = [];
	 	// $scope.data.ActualExpenditures = [];
	 	// $scope.data.RecentProjects = [];

	 	// for(i=0; i<$scope.data.Projects.length; i++)
	 	// {
	 	// 	$scope.data.ProjectNames.push($scope.data.Projects[i].ProjectShortName);
	 	// 	$scope.data.BudgetUtilizations.push($scope.data.Projects[i].BudgetUtilization);
	 	// 	$scope.data.ScheduleCompletions.push($scope.data.Projects[i].ScheduleCompletion);
	 	// 	$scope.data.PlannedBudgets.push($scope.data.Projects[i].PlannedBudget);
	 	// 	$scope.data.ActualExpenditures.push($scope.data.Projects[i].ActualExpenditures);

	 	// 	$scope.data.RecentProjects.push(
	 	// 		{
	 	// 			'Project': $scope.data.Projects[i].ProjectName,
	 	// 			'LeadOrganization': $scope.data.Projects[i].LeadOrganization,
	 	// 			'OverallStatus': $scope.data.Projects[i].OverallStatus,
	 	// 			'ScheduleCompletion': $scope.data.Projects[i].ScheduleCompletion,
	 	// 			'BudgetUtilization': $scope.data.Projects[i].BudgetUtilization
	 	// 		}
	 	// 	);


	 	// }
    }
 
});