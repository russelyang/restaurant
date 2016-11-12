(function() {
    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['$scope', 'UserInfoService', 'MenuService'];

    function MyInfoController($scope, UserInfoService, MenuService) {
        $scope.isRegistered = UserInfoService.isRegistered();
        if ($scope.isRegistered) {
            $scope.user = UserInfoService.getUser(null);
            if ($scope.user.favorite) {
                MenuService.getMenuItem($scope.user.favorite).then(function(result) {
                    $scope.menuItem = result;
                });
            }
        }
    }
})();