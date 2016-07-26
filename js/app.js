var scpApp = angular.module('scpApp', [
								'ngRoute',
                                'ui.router',
                                'ng-bootstrap-datepicker',
								// 'app.directives.infoBoxPanel',
								// 'app.directives.lineChart',
								// 'app.directives.barChart',
        //                         'app.directives.flatChart',
								// 'app.directives.projectList', 
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

    .state('main.cores', {
        url: "/cores",
        templateUrl: "templates/cores.html",
        controller: "CoresCtrl",
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

    .state('main.enterprise', {
        url: "/enterprise",
        templateUrl: "templates/enterprise.html",
        controller: "EnterpriseCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })

    .state('main.client-edit', {
        url: "/client-edit",
        templateUrl: "templates/client_edit.html",
        controller: "ClientEditCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })

    .state('main.profiles', {
        url: "/profiles",
        templateUrl: "templates/profiles.html",
        controller: "ProfilesCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })

    .state('main.profile-edit', {
        url: "/profile-edit",
        templateUrl: "templates/profile_edit.html",
        controller: "ProfileEditCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })

    .state('main.stat', {
        url: "/stat",
        templateUrl: "templates/stat.html",
        controller: "StatCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })

    .state('main.profile-select', {
        url: "/profile-select",
        templateUrl: "templates/profile_select.html",
        controller: "ProfileSelectCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })

    .state('main.groups', {
        url: "/groups",
        templateUrl: "templates/groups.html",
        controller: "GroupsCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })

    .state('main.group-edit', {
        url: "/group-edit",
        templateUrl: "templates/group_edit.html",
        controller: "GroupEditCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })

    .state('main.invite', {
        url: "/invite",
        templateUrl: "templates/invite.html",
        controller: "InviteCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })

    .state('main.users', {
        url: "/users",
        templateUrl: "templates/users.html",
        controller: "UsersCtrl",
        resolve: {
            'result': userLoggedIn
        }
    })

    .state('main.user-edit', {
        url: "/user-edit",
        templateUrl: "templates/user_edit.html",
        controller: "UserEditCtrl",
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


