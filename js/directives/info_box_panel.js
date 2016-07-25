angular.module('app.directives.infoBoxPanel', [])

.directive('infoBoxPanel', function() {
	return {
		restrict: 'E',
		scope: {
			count: '=',
			title: '=',
			percent: '=',
			barclass: '='
		},
		replace: true,
		templateUrl: 'templates/directive/info_box_panel.html',
		link: function(scope, element, attrs) {
			// element.click( function() {
			// 	alert('onload');
			// });
		},
		controller: function($scope) {

		}
	}
});