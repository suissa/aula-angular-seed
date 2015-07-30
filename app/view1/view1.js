'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', view1Config])

.controller('View1Ctrl', [function() {

}]);

function view1Config($routeProvider){
  $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
}
view1Config['$inject'] = ['$routeProvider'];