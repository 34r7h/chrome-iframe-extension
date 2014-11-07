'use strict';
angular.module('irth', [])
.controller('ctrl', function($scope){
	$scope.exerciseBeGone = 'position:absolute; left: 9999px'; 
	$scope.dietBeGone = 'position:absolute; left: 9999px';
	$scope.dayBeGone = 'position:absolute; left: 9999px';


	$scope.hideAll = function () {
		$scope.activityBeGone = 'position:absolute; left: 9999px'; 
		$scope.exerciseBeGone = 'position:absolute; left: 9999px'; 
		$scope.dietBeGone = 'position:absolute; left: 9999px';
		$scope.dayBeGone = 'position:absolute; left: 9999px';
}
})
