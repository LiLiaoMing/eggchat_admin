var scpApp = angular.module('scpApp', [
								'ngRoute',
                                'ui.router',
                                'ng-bootstrap-datepicker',
                                'app.directives',
							])

.config(function($stateProvider, $urlRouterProvider) {
  	

    function userLoggedIn() {
        if (localStorage.getItem('token') == null)
        {
            window.location = '#/login';
            window.location.reload();
        }
    }

    function permissionCheck(page) {

        if (page == 'circulate')
        {
            // alert(localStorage.getItem('permission'));
            // window.location = '#/app/enterprise';
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
            'login': userLoggedIn
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
            login_check: userLoggedIn
        }
    })

    .state('main.permission-problem',{
        url: "/permission-problem",
        templateUrl: "templates/permission-problem.html"
    })
    
    .state('main.core', {
        url: "/core",
        templateUrl: "templates/core.html",
        controller: "CoreCtrl",
        resolve: {
            'login-check': userLoggedIn,
            permission_check: function() {
                if (localStorage.getItem('level') == "1")
                    return;

                window.location = '#/app/permission-problem';
                // window.location.reload();
            }
        }
    })

    .state('main.circulate', {
        url: "/circulate/:from",
        templateUrl: "templates/circulate.html",
        controller: "CirculateCtrl",
        resolve: {
            login_check: userLoggedIn,
            // permission_check: function() {
            //     if (localStorage.getItem('level') == "1")
            //     {
            //         if (localStorage.getItem('permission')[1] == 'Y')
            //             return;
            //     }

            //     window.location = '#/app/permission-problem';
            //     // window.location.reload();
            // }
        }
    })

    .state('main.cores', {
        url: "/cores",
        templateUrl: "templates/cores.html",
        controller: "CoresCtrl",
        resolve: {
            login_check: userLoggedIn,
            permission_check: function() {
                if (localStorage.getItem('level') == "1")
                {
                    if (localStorage.getItem('permission')[0] == 'Y')
                        return;
                }

                window.location = '#/app/permission-problem';
                // window.location.reload();
            }
        }
    })

    .state('main.core-edit', {
        url: "/core-edit",
        // url: "/core-edit/:userId",
        templateUrl: "templates/core_edit.html",
        controller: "CoreEditCtrl",
        resolve: {
            login_check: userLoggedIn,
            permission_check: function() {
                if (localStorage.getItem('level') == "1")
                {
                    if (localStorage.getItem('permission')[0] == 'Y')
                        return;
                }

                window.location = '#/app/permission-problem';
                // window.location.reload();
            }
        }
    })

    .state('main.core-edit-update', {
        url: "/core-edit-update/:userId",
        templateUrl: "templates/core_edit.html",
        controller: "CoreEditCtrl",
        resolve: {
            login_check: userLoggedIn,
            permission_check: function() {
                if (localStorage.getItem('level') == "1")
                {
                    if (localStorage.getItem('permission')[0] == 'Y')
                        return;
                }

                window.location = '#/app/permission-problem';
                // window.location.reload();
            }
        }
    })

    
    .state('main.backup', {
        url: "/backup",
        templateUrl: "templates/backup.html",
        controller: "CoreEditCtrl",
        resolve: {
            login_check: userLoggedIn,
            permission_check: function() {
                if (localStorage.getItem('level') == "1")
                {
                    if (localStorage.getItem('permission')[3] == 'Y')
                        return;
                }

                window.location = '#/app/permission-problem';
                // window.location.reload();
            }
        }
    })

    .state('main.enterprise', {
        url: "/enterprise",
        templateUrl: "templates/enterprise.html",
        controller: "EnterpriseCtrl",
        resolve: {
            login_check: userLoggedIn,
            permission_check: function() {
                if (localStorage.getItem('level') == "1")
                {
                    if (localStorage.getItem('permission')[3] == 'Y')
                        return;
                }

                window.location = '#/app/permission-problem';
                // window.location.reload();
            }
        }
    })

    .state('main.client-edit', {
        url: "/client-edit",
        templateUrl: "templates/client_edit.html",
        controller: "ClientEditCtrl",
        resolve: {
            login_check: userLoggedIn,
            permission_check: function() {
                if (localStorage.getItem('level') == "1")
                {
                    if (localStorage.getItem('permission')[3] == 'Y')
                        return;
                }

                window.location = '#/app/permission-problem';
                // window.location.reload();
            }
        }
    })

    .state('main.client-edit-update', {
        url: "/client-edit-update/:userId",
        templateUrl: "templates/client_edit.html",
        controller: "ClientEditCtrl",
        resolve: {
            login_check: userLoggedIn,
            permission_check: function() {
                if (localStorage.getItem('level') == "1")
                {
                    if (localStorage.getItem('permission')[3] == 'Y')
                        return;
                }

                window.location = '#/app/permission-problem';
                // window.location.reload();
            }
        }
    })

    .state('main.profiles', {
        url: "/profiles",
        templateUrl: "templates/profiles.html",
        controller: "ProfilesCtrl",
        resolve: {
            login_check: userLoggedIn,
            permission_check: function() {
                if (localStorage.getItem('level') == "1")
                {
                    if (localStorage.getItem('permission')[3] == 'Y')
                        return;
                }
                if (localStorage.getItem('level') == "2")
                    return;

                window.location = '#/app/permission-problem';
                // window.location.reload();
            }
        }
    })

    .state('main.profile-edit', {
        url: "/profile-edit",
        templateUrl: "templates/profile_edit.html",
        controller: "ProfileEditCtrl",
        resolve: {
            login_check: userLoggedIn,
            permission_check: function() {
                if (localStorage.getItem('level') == "1")
                {
                    if (localStorage.getItem('permission')[3] == 'Y')
                        return;
                }
                if (localStorage.getItem('level') == "2")
                    return;

                window.location = '#/app/permission-problem';
                // window.location.reload();
            }
        }
    })

    .state('main.profile-edit-update', {
        url: "/profile-edit-update/:userId",
        templateUrl: "templates/profile_edit.html",
        controller: "ProfileEditCtrl",
        resolve: {
            login_check: userLoggedIn,
            permission_check: function() {
                if (localStorage.getItem('level') == "1")
                {
                    if (localStorage.getItem('permission')[3] == 'Y')
                        return;
                }
                if (localStorage.getItem('level') == "2")
                    return;

                window.location = '#/app/permission-problem';
                // window.location.reload();
            }
        }
    })

    .state('main.stat', {
        url: "/stat",
        templateUrl: "templates/stat.html",
        controller: "StatCtrl",
        resolve: {
            login_check: userLoggedIn,
            permission_check: function() {
                if (localStorage.getItem('level') == "1")
                {
                    if (localStorage.getItem('permission')[3] == 'Y')
                        return;
                }
                if (localStorage.getItem('level') == "2")
                    return;

                window.location = '#/app/permission-problem';
                // window.location.reload();
            }
        }
    })

    .state('main.profile-select', {
        url: "/profile-select",
        templateUrl: "templates/profile_select.html",
        controller: "ProfileSelectCtrl",
        resolve: {
            login_check: userLoggedIn,
            permission_check: function() {
                if (localStorage.getItem('level') == "1")
                {
                    if (localStorage.getItem('permission')[3] == 'Y')
                        return;
                }
                if (localStorage.getItem('level') == "2" || localStorage.getItem('level') == "3")
                    return;

                window.location = '#/app/permission-problem';
                // window.location.reload();
            }
        }
    })

    .state('main.groups', {
        url: "/groups",
        templateUrl: "templates/groups.html",
        controller: "GroupsCtrl",
        resolve: {
            login_check: userLoggedIn,
            permission_check: function() {
                if (localStorage.getItem('level') == "1")
                {
                    if (localStorage.getItem('permission')[3] == 'Y')
                        return;
                }
                if (localStorage.getItem('level') == "2" || localStorage.getItem('level') == "3")
                    return;

                window.location = '#/app/permission-problem';
                // window.location.reload();
            }
        }
    })

    .state('main.group-edit', {
        url: "/group-edit",
        templateUrl: "templates/group_edit.html",
        controller: "GroupEditCtrl",
        resolve: {
            login_check: userLoggedIn,
            permission_check: function() {
                if (localStorage.getItem('level') == "1")
                {
                    if (localStorage.getItem('permission')[3] == 'Y')
                        return;
                }
                if (localStorage.getItem('level') == "2" || localStorage.getItem('level') == "3")
                    return;

                window.location = '#/app/permission-problem';
                // window.location.reload();
            }
        }
    })

    .state('main.group-edit-update', {
        url: "/group-edit-update/:groupId",
        templateUrl: "templates/group_edit.html",
        controller: "GroupEditCtrl",
        resolve: {
            login_check: userLoggedIn,
            permission_check: function() {
                if (localStorage.getItem('level') == "1")
                {
                    if (localStorage.getItem('permission')[3] == 'Y')
                        return;
                }
                if (localStorage.getItem('level') == "2" || localStorage.getItem('level') == "3")
                    return;

                window.location = '#/app/permission-problem';
                // window.location.reload();
            }
        }
    })

    .state('main.invite', {
        url: "/invite",
        templateUrl: "templates/invite.html",
        controller: "InviteCtrl",
        resolve: {
            login_check: userLoggedIn,
            permission_check: function() {
                if (localStorage.getItem('level') == "1")
                {
                    if (localStorage.getItem('permission')[3] == 'Y')
                        return;
                }
                if (localStorage.getItem('level') == "2" || localStorage.getItem('level') == "3")
                    return;

                window.location = '#/app/permission-problem';
                // window.location.reload();
            }
        }
    })

    .state('main.users', {
        url: "/users",
        templateUrl: "templates/users.html",
        controller: "UsersCtrl",
        resolve: {
            login_check: userLoggedIn,
            permission_check: function() {
                if (localStorage.getItem('level') == "1")
                {
                    if (localStorage.getItem('permission')[3] == 'Y')
                        return;
                }
                if (localStorage.getItem('level') == "2" || localStorage.getItem('level') == "3")
                    return;

                window.location = '#/app/permission-problem';
                // window.location.reload();
            }
        }
    })

    .state('main.user-edit', {
        url: "/user-edit",
        templateUrl: "templates/user_edit.html",
        controller: "UserEditCtrl",
        resolve: {
            login_check: userLoggedIn,
            permission_check: function() {
                if (localStorage.getItem('level') == "1")
                {
                    if (localStorage.getItem('permission')[3] == 'Y')
                        return;
                }
                if (localStorage.getItem('level') == "2" || localStorage.getItem('level') == "3" || localStorage.getItem('level') == "4")
                    return;

                window.location = '#/app/permission-problem';
                // window.location.reload();
            }
        }
    })

    .state('main.user-edit-update', {
        url: "/user-edit-update/:userId",
        templateUrl: "templates/user_edit.html",
        controller: "UserEditCtrl",
        resolve: {
            login_check: userLoggedIn,
            permission_check: function() {
                if (localStorage.getItem('level') == "1")
                {
                    if (localStorage.getItem('permission')[3] == 'Y')
                        return;
                }
                if (localStorage.getItem('level') == "2" || localStorage.getItem('level') == "3" || localStorage.getItem('level') == "4")
                    return;

                window.location = '#/app/permission-problem';
                // window.location.reload();
            }
        }
    })

});


