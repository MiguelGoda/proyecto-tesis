var app = angular.module("myApp", []);

 app.controller('Tipo_ClientesController', function($scope) {
   $scope.tipo_clientes=[
  {cod_tipo_cliente:"01", nombre_tipo_cliente:"restaurante", descripcion_tipo_cliente:"restaurante", 		descuento:"3", 	},
  {cod_tipo_cliente:"02", nombre_tipo_cliente:"hotel", descripcion_tipo_cliente:"hoteles", 		descuento:"2", 		},
  {cod_tipo_cliente:"03", nombre_tipo_cliente:"cliente", descripcion_tipo_cliente:"personas naturales",	descuento:"0", 	},
  ];


 $scope.Save=function(){
 	$scope.tipo_clientes.push({	cod_tipo_cliente:$scope.nuevotipo_Cliente.cod_tipo_cliente,
							nombre_tipo_cliente:$scope.nuevotipo_Cliente.nombre_tipo_cliente, 
							descripcion_tipo_cliente:$scope.nuevotipo_Cliente.descripcion_tipo_cliente,
							descuento:$scope.nuevotipo_Cliente.descuento,
							
						});
 $scope.nuevotipo_Cliente="";
 $scope.formVisibility=false;
	console.log($scope.formVisibility)
 }
$scope.formVisibility=false;
$scope.ShowForm=function(){
	$scope.formVisibility=true;
	console.log($scope.formVisibility)
	}
 });


 