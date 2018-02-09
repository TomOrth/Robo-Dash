/**
 * Directive to display the status of an encoder (sometimes encoders aren't plugged in all the way)
 */
angular.module('dashboard').directive('encoderStatus', function($interpolate, $compile){
    return {
        restrict: 'E',
        scope: {
            ntKey: '@',
            name: '@'
        },
        templateUrl: 'dashboard/directives/templates/encoderStatus.html',
        link: function($scope, $element, $attrs) {
            $scope.boolClass = "booleanOff";
            NetworkTables.addKeyListener($attrs.ntKey, function(key, value, isNew){
                console.log("received change");
                if (value) {
                    $scope.boolClass = "booleanOn";
                } else {
                    $scope.boolClass = "booleanOff";
                }
                $scope.$apply();
            }, true);
        }
    };
});