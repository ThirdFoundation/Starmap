
starMap.NoteController = function($scope) {
	this.scope = $scope;
}

var NoteController = starMap.NoteController;
starMap.ngModule.controller('NoteController', starMap.NoteController);