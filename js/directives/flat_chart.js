angular.module('app.directives.flatChart', [])

.directive('flatChart', function() {
	return {
		restrict: 'E',
		scope: {
			fields: '='
		},
		replace: true,
		templateUrl: 'templates/directive/flat_chart.html',
		link: function(scope, element, attrs) {
	    
		},
		controller: function($scope, $interval) {
			flatchart = $interval(function() {
				// var data = [[0, 11], [1, 15], [2, 25], [3, 24], [4, 13], [5, 18]];
				var data = [];
		        var dataset = [{
		            data: data,
		            color: "#a3927e"
		        }];
		        // var ticks = [[0, "1"], [1, "2"], [2, "3"], [3, "4"], [4, "5"], [5, "6"]];
		        var ticks = [];

		        console.log($scope.fields);

				for(i=0; i<$scope.fields.length; i++)
				{
					if ($scope.fields[i].value == null)
						$scope.fields[i].value = 0;
					data.push([i, $scope.fields[i].value]);
					ticks.push([i, $scope.fields[i].label]);
				}				
		        var options = {
		            series: {
		                bars: {
		                    show: true
		                }
		            },
		            bars: {
		                align: "center",
		                barWidth: 0.3
		            },
		            xaxis: {
		                ticks: ticks
		            },
		            legend: {
		                show: false
		            },
		            grid: {
		                color: "#AFAFAF",
		                hoverable: true,
		                borderWidth: 0,
		                backgroundColor: '#FFF'
		            },
		            tooltip: true,
		            tooltipOpts: {
		                content: "X: %x, Y: %y",
		                defaultTheme: false
		            }
		        };
		        $.plot($("#flot1"), dataset, options);

   		        if ($scope.fields.length != 0)
		        {
		        	$interval.cancel(flatchart);
            		flatchart = undefined;
		        }
			}, 10);
		}
	}
});