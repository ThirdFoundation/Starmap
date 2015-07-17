starMap.SearchController = function($scope) {
	this.scope = $scope;
}

var SearchController = starMap.SearchController;
starMap.ngModule.controller('SearchController', starMap.SearchController);