angular.module('app.directives.barChart', [])

.directive('barChart', function() {
	return {
		restrict: 'E',
		scope: {
			labels: '=',
			values1: '=',
			values2: '='
		},
		replace: true,
		templateUrl: 'templates/directive/bar_chart.html',
		link: function(scope, element, attrs) {
			
			
	    
		},
		controller: function($scope, $interval) {
			barchart = $interval(function() {
				if ($scope.labels != null) {
					var ctx2 = document.getElementById("chart2").getContext("2d");
				    var data2 = {
				        labels: $scope.labels,
				        datasets: [
				            {
				                label: "My First dataset",
				                fillColor: "rgba(163,146,126,0.5)",
				                strokeColor: "rgba(163,146,126,0.8)",
				                highlightFill: "rgba(163,146,126,0.75)",
				                highlightStroke: "rgba(163,146,126,1)",
				                data: $scope.values1
				            },
				            {
				                label: "My Second dataset",
				                fillColor: "rgba(226,226,224,0.5)",
				                strokeColor: "rgba(226,226,224,0.8)",
				                highlightFill: "rgba(226,226,224,0.75)",
				                highlightStroke: "rgba(226,226,224,1)",
				                data: $scope.values2
				            }
				        ]
				    };
				    
				    var chart2 = new Chart(ctx2).Bar(data2, {
				        scaleBeginAtZero : true,
				        scaleShowGridLines : true,
				        scaleGridLineColor : "rgba(0,0,0,.05)",
				        scaleGridLineWidth : 1,
				        scaleShowHorizontalLines: true,
				        scaleShowVerticalLines: true,
				        barShowStroke : true,
				        barStrokeWidth : 2,
				        barDatasetSpacing : 1,
				        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
				        responsive: true
				    });

				    $interval.cancel(barchart);
					barchart = undefined;
				}
			}, 500);
		}
	}
});