starMap = {};

starMap.ngModule = angular.module('starMap', ['ngRoute']);

starMap.ngModule.config(function($routeProvider) {
  $routeProvider
    .when('/search', {
      templateUrl: 'partials/searchTemplate.html',
      controller:  'SearchController'
    }).when('/:sector', {
      templateUrl: 'partials/sectorTemplate.html',
      controller:  'SectorController'
    }).when('/:sector/:note', {
      templateUrl: 'partials/noteTemplate.html',
      controller:  'NoteController'
    }).otherwise({
      redirectTo:  '/search'
    });
});