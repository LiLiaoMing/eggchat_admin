scpApp.controller('UserDetailCtrl', function($scope, $users, $stateParams, $timeout, $location) {

    $scope.Id = null;
    $scope.user = {};
    if (localStorage.getItem('permission') != 'Administrator')
    {
        $location.path('login');
    }
    
    if ($stateParams.userId != "")
    {
        $scope.Id = Number($stateParams.userId);

        $users.get( function(res) {

            $scope.user = res.data.filter( function(entry) {
                return entry.Id === $scope.Id;
            })[0];

            $scope.user.Password = "";
            $scope.user.ConfirmPassword = "";
            console.log(JSON.stringify(res.data[0]));

        }, function(res) {
            console.log('error' + res);
            $location.path('login');
        });
    }
    
    $scope.update = function() {
        if ($scope.user.Password != $scope.user.ConfirmPassword)
            return;

        console.log('here');
        $users.update($scope.user, function(res) {
            console.log(JSON.stringify(res));
            $location.path('app/user');
        }, function(res) {
            console.log('error' + res);
        });
    }

    $scope.create = function() {
        if ($scope.user.Password != $scope.user.ConfirmPassword)
            return;
        $users.create($scope.user, function(res) {
            console.log(JSON.stringify(res));
            $location.path('app/user');
        }, function(res) {
            console.log('error' + res);
        });
    }

    $scope.init = function() {
       
    }
})