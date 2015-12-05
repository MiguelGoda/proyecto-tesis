'use strict';

angular.module('tareasApp', [])
	.controller('MainCtrl', function ($scope) {
		//var socket = io();
		//alert("Se descargaron los archivos en la cache");
		//socket.on('mostrarDatos', function (rows) {
   		//	 console.log(rows);
  		//});

		$scope.tareas = [];
		$scope.addTarea = function (){
			$scope.tareas.push($scope.tarea);
			$scope.tarea = '';
		};
		$scope.eliminarTarea = function (index) {
			$scope.tareas.splice(index, 1);
		};
	});