angular.module('app.directives.lineChart', [])

.directive('lineChart', function() {
	return {
		restrict: 'E',
		scope: {
			labels: '=',
			values1: '=',
			values2: '='
		},
		replace: true,
		templateUrl: 'templates/directive/line_chart.html',
		link: function(scope, element, attrs) {
    
		},
		controller: function($scope, $interval) {

			linechart = $interval(function() {
				if ($scope.labels != null) {
					var ctx1 = document.getElementById("chart1").getContext("2d");
				    var data1 = {
				        labels: $scope.labels,
				        datasets: [
				            {
				                label: "My First dataset",
				                fillColor: "rgba(163,146,126,0.2)",
				                strokeColor: "rgba(163,146,126,1)",
				                pointColor: "rgba(163,146,126,1)",
				                pointStrokeColor: "#fff",
				                pointHighlightFill: "#fff",
				                pointHighlightStroke: "rgba(163,146,126,1)",
				                data: $scope.values1
				            },
				            {
				                label: "My Second dataset",
				                fillColor: "rgba(226,226,224,0.2)",
				                strokeColor: "rgba(226,226,224,1)",
				                pointColor: "rgba(226,226,224,1)",
				                pointStrokeColor: "#fff",
				                pointHighlightFill: "#fff",
				                pointHighlightStroke: "rgba(226,226,224,1)",
				                data: $scope.values2
				            }
				        ]
				    };
	    
				    var chart1 = new Chart(ctx1).Line(data1, {
				        scaleShowGridLines : true,
				        scaleGridLineColor : "rgba(0,0,0,.05)",
				        scaleGridLineWidth : 1,
				        scaleShowHorizontalLines: true,
				        scaleShowVerticalLines: true,
				        bezierCurve : true,
				        bezierCurveTension : 0.4,
				        pointDot : true,
				        pointDotRadius : 4,
				        pointDotStrokeWidth : 1,
				        pointHitDetectionRadius : 20,
				        datasetStroke : true,
				        datasetStrokeWidth : 2,
				        datasetFill : true,
				        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
				        responsive: true
				    });

				    $interval.cancel(linechart);
					linechart = undefined;
				}
			}, 500);
			
		}
	}
});