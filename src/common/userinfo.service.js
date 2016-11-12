(function() {
    "use strict";

    angular.module('common')
        .service('UserInfoService', UserInfoService);

    function UserInfoService() {
        var service = this;

        var users = [];

        service.save = function(user) {
            users.push(user);
        };

        service.isRegistered = function(user) {
            return users.length > 0;
        };

        service.getUser = function(email) {
            return users[users.length-1];
        }


    }
})();