'use strict';

angular.module('myApp.Beers', ['ngRoute', 'myApp.Beers.Controllers'])
.config(['$routeProvider', beersConfig]);

// Config
function beersConfig($routeProvider){
  $routeProvider
    .when('/beers', {
      templateUrl: 'modules/beers/list.html',
      controller: 'BeerListController'
    })
    .when('/beers/create', {
      templateUrl: 'modules/beers/create.html',
      controller: 'BeerCreateController'
    })
    .when('/beers/:id', {
      templateUrl: 'modules/beers/get.html',
      controller: 'BeerGetController'
    })
    .when('/beers/:id/edit', {
      templateUrl: 'modules/beers/edit.html',
      controller: 'BeerEditController'
    })
    ;
}
beersConfig['$inject'] = ['$routeProvider'];
