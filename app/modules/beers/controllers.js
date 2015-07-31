'use strict';

angular.module('myApp.Beers.Controllers', [])
.controller('BeerListController', BeerListController)
.controller('BeerCreateController', BeerCreateController)
.controller('BeerGetController', BeerGetController)
.controller('BeerEditController', BeerEditController)
;

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

  $scope.remove = function(beer) {
    var httpRequest = {
          url: 'http://localhost:3000/api/beers/' + beer._id
        , method: 'DELETE'
        }
      ;

    if(confirm('Deseja mesmo remover essa cerveja?')){
      $http(httpRequest)
      .success(function(data) {
        console.log('SUCESSO: ', data);
        var index = $scope.beers.indexOf(beer);
        $scope.beers.splice(index, 1);
        $scope.msg = 'Remoção feita com sucesso.';
      })
      .error(function(err) {
        console.log('ERRO: ', err);
        $scope.msg = 'Remoção não podde ser feita.';
      });
    }
    else {
      alert('UFA! Ainda bem!');
    }
  }
};

function BeerGetController($scope, $http, $routeParams) {
  var httpRequest = {
        url: 'http://localhost:3000/api/beers/' + $routeParams.id
      , method: 'GET'
      }
    ;

  $http(httpRequest)
  .success(function(data) {
    console.log('SUCESSO: ', data);
    $scope.beer = data;
    $scope.msg = 'Consulta feita com sucesso.';
  })
  .error(function(err) {
    console.log('ERRO: ', err);
    $scope.msg = 'Consulta não podde ser feita.';

  });
};

function BeerCreateController($scope, $http) {
  $scope.create = function(beer) {
    var httpRequest = {
          url: 'http://localhost:3000/api/beers'
        , method: 'POST'
        , data: beer
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
  }
};

function BeerEditController($scope, $http, $routeParams) {
  var httpRequest = {
        url: 'http://localhost:3000/api/beers/' + $routeParams.id
      , method: 'GET'
      }
    ;

  $http(httpRequest)
  .success(function(data) {
    console.log('SUCESSO: ', data);
    $scope.beer = data;
    $scope.msg = 'Consulta feita com sucesso.';
  })
  .error(function(err) {
    console.log('ERRO: ', err);
    $scope.msg = 'Consulta não podde ser feita.';

  });

  $scope.save = function(beer) {
    var httpRequest = {
          url: 'http://localhost:3000/api/beers/' + $routeParams.id
        , method: 'PUT'
        , data: beer
        }
      ;

    $http(httpRequest)
    .success(function(data) {
      console.log('SUCESSO: ', data);
      $scope.msg = 'Alteração feita com sucesso.';
    })
    .error(function(err) {
      console.log('ERRO: ', err);
      $scope.msg = 'Alteração não podde ser feita.';

    });
  }
};

// Injeção de dependências
BeerListController.$inject = ['$scope', '$http'];
BeerCreateController.$inject = ['$scope', '$http'];
BeerGetController.$inject = ['$scope', '$http', '$routeParams'];
BeerEditController.$inject = ['$scope', '$http', '$routeParams'];





