'use strict';
angular.module('irth', ['firebase'])
.controller('ctrl', function($scope, $window, $firebase, $timeout){

		var dbURL = 'https://tezt.firebaseio.com';
		var ref = new Firebase(dbURL + '/minibrowser/');
		var sync = $firebase(ref);
		$scope.syncObject = sync.$asObject();
		$scope.syncArray = sync.$asArray();
		$timeout(function(){
			$scope.currentProjectUrl = $scope.syncArray.splice(-1)[0].$value;
		},1500);

		$scope.back = function(){
			$window.history.back();
		};
		$scope.forward = function(){
			$window.history.forward();
		};

	$scope.gSearch = function(query){
		$scope.currentProjectUrl = 'https://duckduckgo.com/?q=' + query;
		$scope.browserURL = $scope.currentProjectUrl;
			sync.$push($scope.browserURL);
	};
	$scope.newUrl = function(url){
		if (url[4] !== ':' && url[5] !== ':'){
			var properUrl = 'http://' + url;
			$scope.currentProjectUrl = properUrl;
		} else {
			$scope.currentProjectUrl = url;
		}
		$scope.browserURL = $scope.currentProjectUrl;
		if($scope.syncArray.splice(-1)[0].$value !== $scope.currentProjectUrl){
			sync.$push($scope.browserURL);
		}


	};


})
	.filter('trustAsResourceUrl', ['$sce', function($sce) {
		return function(val) {
			return $sce.trustAsResourceUrl(val);
		};
	}]);