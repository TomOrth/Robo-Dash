/**
 * Directive to display motor speeds
 */
angular.module('dashboard').directive('motorSpeed', function(){
    return{
        restrict: 'E',
        scope: {ntKey: '@', name: '@'},
        templateUrl: 'dashboard/directives/templates/motor.html',
        link: function($scope, $element, $attrs){
	    $scope.speed = 0;
            var interval;
            NetworkTables.addKeyListener($attrs.ntKey, function(key, value, isNew){
                if (typeof interval !== 'undefined') clearInterval(interval);
                $scope.diff = value - $scope.speed;
                $scope.direction = $scope.diff > 0;
                $scope.number = 0;
		if ($scope.diff != 0) {
		    interval = setInterval(() => {
                        $scope.number++;
		        if ($scope.number == Math.abs($scope.diff)) clearInterval(interval);
                        $scope.speed += $scope.direction ? 1 : -1;
                        $scope.$apply();
		    }, 2);
                }

            }, true);
        }
    }
});