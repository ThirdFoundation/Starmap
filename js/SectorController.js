starMap.SectorController = function($scope, $http, $routeParams) {
	$scope.sectorID = $routeParams.sector;
	$scope.imgURL = 'img/' + $scope.sectorID + '.png';
	$http.get('js/JSON/' + $scope.sectorID + '.json').success(function(data) {
		$scope.stars = data;
	});
	$scope.findImage = function(url) {
		var path = '<img src=' + url + '>';
		return Tip(path, BGCOLOR, '#ffffff', BORDERSTYLE, 'none', FOLLOWMOUSE, false, PADDING, 3);
	};
	$scope.closeImage = function() {
		return UnTip();
	};
}

var SectorController = starMap.SectorController;
starMap.ngModule.controller('SectorController', starMap.SectorController);