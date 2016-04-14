var app = angular.module("applicazione",["ngRoute"]);

app.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: '/templates/home.html',
					controller: 'HomeController'
				})
				.otherwise({
					redirectTo : '/'
				});
        }]);

app.controller("HomeController",['$scope',function($scope){

  $scope.lista = [
    "Portare a spasso la zebra",
    "Gettare l'immondizia",
    "Guardare il trailer di Doctor Strange"
  ];
  $scope.addItem = function() {
  	$scope.lista.unshift($scope.newItem);
  	$scope.newItem = '';
  }
}]);