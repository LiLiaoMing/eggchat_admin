scpApp.controller('ProfileEditCtrl', function($scope, $location) {
	
	$scope.data = {};

	$scope.datepickerOptions = {
        format: 'yyyy-mm-dd',
        language: 'en',
        startDate: "2000-10-01",
        endDate: "2020-10-31",
        autoclose: true,
        weekStart: 0
    }
	
	$scope.init = function() {
		$('.date-picker').datepicker({
	        orientation: "top auto",
	        autoclose: true
	    });
	}
});