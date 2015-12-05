var app = angular.module("myApp", []);

 app.controller('ClientesController', function($scope) {
   $scope.clientes=[
  {cod_cliente:"01", cod_zona:"01", nombres:"juanito", 		ap_paterno:"pinto", 	ap_materno:"galar", 	direccion:"heroinas esquina 25", 						telefono:"1234567",	celular:"6854297", CI:"4587932", cod_tipo_cliente:"1",},
  {cod_cliente:"02", cod_zona:"03", nombres:"alvaro", 		ap_paterno:"aue", 		ap_materno:"vasquez", 	direccion:"lanza esquina la paz",						telefono:"4451278",	celular:"7569415", CI:"7154293", cod_tipo_cliente:"2",},
  {cod_cliente:"03", cod_zona:"02", nombres:"maridel ana",	ap_paterno:"gonzales", 	ap_materno:"montaño", 	direccion:"calama y antezana",							telefono:"s/n", 	celular:"68962972", CI:"1245987", cod_tipo_cliente:"3",},
  {cod_cliente:"04", cod_zona:"01", nombres:"diana", 		ap_paterno:"telleria", 	ap_materno:"mamani", 	direccion:"cruce taquiña",								telefono:"s/n", 	celular:"7676747", CI:"98534127", cod_tipo_cliente:"1",},
  {cod_cliente:"05", cod_zona:"02", nombres:"juan carlos", 	ap_paterno:"viruez",	ap_materno:"souza",		direccion:"america entre libertadores y adela zamudio", telefono:"4489637",	celular:"7412589", CI:"4298762", cod_tipo_cliente:"2",},
 ];


 $scope.Save=function(){
 	$scope.clientes.push({	cod_cliente:$scope.nuevoCliente.cod_cliente,
							cod_zona:$scope.nuevoCliente.cod_zona, 
							nombres:$scope.nuevoCliente.nombres,
							ap_paterno:$scope.nuevoCliente.ap_paterno,
							ap_materno:$scope.nuevoCliente.ap_materno,
							direccion :$scope.nuevoCliente.direccion,
							telefono :$scope.nuevoCliente.telefono,
							celular :$scope.nuevoCliente.celular,
							CI :$scope.nuevoCliente.CI,
							cod_tipo_cliente:$scope.nuevoCliente.cod_tipo_cliente,
						});
 $scope.nuevoCliente="";
 $scope.formVisibility=false;
	console.log($scope.formVisibility)
 }
$scope.formVisibility=false;
$scope.ShowForm=function(){
	$scope.formVisibility=true;
	console.log($scope.formVisibility)
	}
 });


 