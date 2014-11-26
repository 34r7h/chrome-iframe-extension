'use strict';
angular.module('irth', [])
.controller('ctrl', function($scope, $window){

		$scope.back = function(){
			$window.history.back();
		};
		$scope.forward = function(){
			$window.history.forward();
		};


	$scope.newCurrentProjectUrl = function(url){
		if (url[4] !== ':' && url[5] !== ':'){
			var properUrl = 'http://' + url;
			$scope.currentProjectUrl = properUrl;
		} else {
			$scope.currentProjectUrl = url;
		}
		$scope.browserURL = $scope.currentProjectUrl;




	};


})
	.filter('trustAsResourceUrl', ['$sce', function($sce) {
		return function(val) {
			return $sce.trustAsResourceUrl(val);
		};
	}]);