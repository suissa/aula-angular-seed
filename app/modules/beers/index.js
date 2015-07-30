'use strict';

angular.module('myApp.Beers', ['ngRoute'])
.config(['$routeProvider', beersConfig])
.controller('BeerListController', BeerListController)
.controller('BeerCreateController', BeerCreateController);

// Config
function beersConfig($routeProvider){
  $routeProvider.when('/beers', {
      templateUrl: 'modules/beers/list.html',
      controller: 'BeerListController'
    });
}
beersConfig['$inject'] = ['$routeProvider'];

// Controllers
function BeerListController($scope, $http) {
  var httpRequest = {
        url: 'http://localhost:3000/api/beers'
      , method: 'GET'
      }
    ;

  $http(httpRequest)
  .success(function(data) {
    console.log('SUCESSO: ', data);
    $scope.beers = data;
    $scope.msg = 'Listagem feita com sucesso.';
  })
  .error(function(err) {
    console.log('ERRO: ', err);
    $scope.msg = 'Listagem não podde ser feita.';

  });

};

function BeerCreateController($scope, $http) {
  var httpRequest = {
        url: 'http://localhost:3000/api/beers'
      , method: 'POST'
      }
    ;

  $http(httpRequest)
  .success(function(data) {
    console.log('SUCESSO: ', data);
    // $scope.beers = data;
    $scope.msg = 'Cadastro da cerveja feito com sucesso.';
  })
  .error(function(err) {
    console.log('ERRO: ', err);
    $scope.msg = 'Cadastro da cerveja não pode ser feito.';

  });

};

BeerListController.$inject = ['$scope', '$http'];
BeerCreateController.$inject = ['$scope', '$http'];





