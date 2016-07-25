angular.module('app.directives.projectList', [])

.directive('projectList', function() {
	return {
		restrict: 'E',
		scope: {
			projects: '='
		},
		replace: true,
		templateUrl: 'templates/directive/project_list.html',
		link: function(scope, element, attrs) {
			
			scope.status = {
				'Delayed': 'danger',
				'Delayed-Recoverable': 'warning',
				'On-time': 'success',
				'Completed': 'info'
			};

		},
		controller: function($scope, $timeout) {
			$timeout (function mycall() {
				$('.slimscroll').slimscroll({
			        allowPageScroll: true
			 	});	
			}, 1000);
		}
	}
});