var plotStars = angular.module('plotStars', []);

plotStars.controller('starController', ['$scope', '$http', function($scope,
	$http) {
		$http.get('js/data.json').success(function(data) {
			$scope.data = data;
		});
		$scope.findImage = function(url) {
			var path = '<img src=img/' + url + '>';
			return Tip(path, BGCOLOR, '#ffffff', BORDERSTYLE, 'none', FOLLOWMOUSE, false, PADDING, 3);
		};
		$scope.closeImage = function() {
			return UnTip();
		};
	}]);