var scpApp = angular.module('scpApp', [
								'ngRoute',
                                'ui.router',
								// 'app.directives.infoBoxPanel',
								// 'app.directives.lineChart',
								// 'app.directives.barChart',
        //                         'app.directives.flatChart',
								// 'app.directives.projectList', 
        //                         'ng-bootstrap-datepicker',
        //                         'app.directives.ngConfirmClick'
							])

.config(function($stateProvider, $urlRouterProvider) {
  	

    function userLoggedIn() {
        if (localStorage.getItem('token') == null)
        {
            window.location = '#/login';
            window.location.reload();
        }
    }

    $urlRouterProvider.otherwise('/app/core');

  	$stateProvider

    .state('main', {
        url: "/app",
        templateUrl: "templates/index.html",
        controller: "NavCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })

    .state('login',{
        url: "/login",
        templateUrl: "templates/login.html",
        controller: "LoginCtrl"
    })

    .state('logout',{
        url: "/logout",
        templateUrl: "templates/login.html",
        controller: "LogoutCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })
    
    .state('main.core', {
        url: "/core",
        templateUrl: "templates/core.html",
        controller: "CoreCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })

    .state('main.circulate', {
        url: "/circulate",
        templateUrl: "templates/circulate.html",
        controller: "CirculateCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })

    .state('main.core-manage', {
        url: "/core-manage",
        templateUrl: "templates/core_manage.html",
        controller: "CoreManageCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })

    .state('main.core-edit', {
        url: "/core-edit",
        templateUrl: "templates/core_edit.html",
        controller: "CoreEditCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })

    .state('main.backup', {
        url: "/backup",
        templateUrl: "templates/backup.html",
        controller: "CoreEditCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })

    /*
    .state('main.user', {
        url: "/user",
        templateUrl: "templates/user.html",
        controller: "UserCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })

    .state('main.user_detail', {
        url: "/user/:userId",
        templateUrl: "templates/user_detail.html",
        controller: "UserDetailCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })

    .state('main.table', {
        url: "/table",
        templateUrl: "templates/table.html",
        controller: "TableCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })

    .state('main.table_detail', {
        url: "/table/:projectId",
        templateUrl: "templates/project_detail.html",
        controller: "ProjectDetailCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })

    .state('main.component', {
        url: "/components/:projectId/:projectName",
        templateUrl: "templates/component.html",
        controller: "ComponentCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })

    .state('main.component_detail', {
        url: "/component/:projectId/:projectName/:componentId",
        templateUrl: "templates/component_detail.html",
        controller: "ComponentDetailCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })

    .state('main.initiative', {
        url: "/initiative",
        templateUrl: "templates/initiative.html",
        controller: "InitiativeCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })

    .state('main.initiative_detail', {
        url: "/initiative/:initiativeId",
        templateUrl: "templates/initiative_detail.html",
        controller: "InitiativeDetailCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })

    .state('main.graph', {
        url: "/graph/:projectId",
        templateUrl: "templates/graph.html",
        controller: "GraphCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })

    .state('main.chart', {
        url: "/chart",
        templateUrl: "templates/chart.html",
        controller: "ChartCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })
  	*/
});


