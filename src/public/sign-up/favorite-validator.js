(function() {
    "use strict";

    angular.module('public')
        .directive("favoriteValidator", favoriteValidator);

    favoriteValidator.$inject = ['MenuService'];

    function favoriteValidator(MenuService) {
        return {
            require: 'ngModel', 
            link: function(scope, element, attrs, ngModel) {
                ngModel.$asyncValidators.favorite = function(modelValue, viewValue) {
                   return MenuService.getMenuItem(viewValue); 
                }
            }
        }
    }
})();