var motoApp = angular.module('motoApp', ['ngRoute', 'ngAnimate']); 

motoApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/inicio', {
            templateUrl : 'html/inicio.html',
            controller : 'controladorFiltro'
        })
        .when('/motos', {
            templateUrl : 'html/motos.html',
            controller : 'controladorFiltro'
        }).otherwise({
            redirectTo : '/inicio'
        });
}]);

motoApp.controller('controladorFiltro', ['$scope', '$http', function($scope, $http){

    $scope.eliminarMoto = function(moto){
        var motoEliminada= $scope.motos.indexOf(moto);
        $scope.motos.splice(motoEliminada,1);
    }

    $scope.agregarMoto = function(){
        $scope.motos.push({
            nombre: $scope.motoNueva.nombre,
            motor: $scope.motoNueva.motor,
            precio: parseInt($scope.motoNueva.precio),
            color: $scope.motoNueva.color,
            disponible : true
        });

        $scope.motoNueva.nombre = "";
        $scope.motoNueva.motor = "";
        $scope.motoNueva.precio = "";
        $scope.motoNueva.color = "";
    };

    $http.get('json/motos.json').then(function(response){
        $scope.motos = response.data;
    });

}]);
