'use strict';
angular.module('irth', ['firebase'])
.controller('ctrl', function($scope, $window, $firebase){
		var dbURL = 'https://tezt.firebaseio.com';
		var ref = new Firebase(dbURL + '/life');
		var sync = $firebase(ref);
		$scope.syncObject = sync.$asObject();
		$scope.syncArray = sync.$asArray();
		$scope.back = function(){
			$window.history.back();
		};
		$scope.forward = function(){
			$window.history.forward();
		};
	$scope.exerciseBeGone = 'display:none;';
	$scope.dietBeGone = 'display:none;';
	$scope.dayBeGone = 'display:none;';
	$scope.activityBeGone = 'display:none;';

	$scope.newCurrentProjectUrl = function(url){
		if (url[4] !== ':' && url[5] !== ':'){
			var properUrl = 'http://' + url;
			$scope.currentProjectUrl = properUrl;
		} else {
			$scope.currentProjectUrl = url;
		}
		$scope.browserURL = $scope.currentProjectUrl;

		sync.$push($scope.currentProjectUrl).then(function(newChildRef){
			setTimeout(function(){
				if ($scope.syncArray.splice(-1)[0].$value === $scope.syncArray.splice(-2)[0].$value) {
					sync.$remove(newChildRef.name());
				} else {
					return;
				}
			},1500)

		});


	};


	$scope.hideAll = function () {
		$scope.searchBeGone = 'display:none;';
		$scope.activityBeGone = 'display:none;';
		$scope.exerciseBeGone = 'display:none;';
		$scope.dietBeGone = 'display:none;';
		$scope.dayBeGone = 'display:none;';
	};

		setTimeout(function(){
			var lastURL = $scope.syncArray.splice(-1)[0].$value;
			$scope.newCurrentProjectUrl(lastURL);
		},1000);
})
	.filter('trustAsResourceUrl', ['$sce', function($sce) {
		return function(val) {
			return $sce.trustAsResourceUrl(val);
		};
	}]);