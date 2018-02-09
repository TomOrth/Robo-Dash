/**
 * Directive to display motor speeds
 */
angular.module('dashboard').directive('motorSpeed', function(){
    return{
        restrict: 'E',
        scope: {ntKey: '@', name: '@'},
        templateUrl: 'dashboard/directives/templates/motor.html',
        link: function($scope, $element, $attrs){
            NetworkTables.addKeyListener($attrs.ntKey, function(key, value, isNew){
                $scope.speed = value;
                $scope.$apply();
            }, true);
        }
    }
});