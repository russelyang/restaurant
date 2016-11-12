(function() {
    "use strict";
    angular.module('public')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['UserInfoService'];

    function SignUpController(UserInfoService) {
       var reg = this;
       reg.userSaved = false;

       reg.submit = function() {
           UserInfoService.save(reg.user);
           reg.userSaved = true;
       }
    }
})();