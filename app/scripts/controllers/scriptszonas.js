var app = angular.module("myApp", []);

 app.controller('ZonasController', function($scope) {
   $scope.zonas=[
  {cod_zona:"01", nombre_zona:"centro", descripcion_zona:"estadio hasta heroinas", },
  {cod_zona:"02", nombre_zona:"norte", descripcion_zona:"america y circunvalacion", },
  {cod_zona:"03", nombre_zona:"sur", descripcion_zona:"heroinas oquendo",},
  ];


 $scope.Save=function(){
 	$scope.zonas.push({	cod_zona:$scope.nuevaZona.cod_zona,
							nombre_zona:$scope.nuevaZona.nombre_zona, 
							descripcion_zona:$scope.nuevaZona.descripcion_zona,
							
						});
 $scope.nuevaZona="";
 $scope.formVisibility=false;
	console.log($scope.formVisibility)
 }
$scope.formVisibility=false;
$scope.ShowForm=function(){
	$scope.formVisibility=true;
	console.log($scope.formVisibility)
	}
 });
