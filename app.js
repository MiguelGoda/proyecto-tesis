//SERVIDOR WEB

var express = require('express');
var app = express();
app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/bower_components'));
var server = app.listen(process.env.PORT ||3000);


//MYSQL

var mysql = require('mysql');
var connection = mysql.createConnection({
	host 		: 'localhost',
	user 		: 'root',
	password 	: '',
	database 	: 'distribuidora'
});

connection.connect();

//socket.io

var io = require('socket.io').listen(server);
io.set('transports', [ 'websocket' ]);
var handleClient = function (socket) {
    console.log("NUEVO USUARIO");
      
    socket.on("obtenerclientes", function(params){

      console.log("cliente pide datos");
    connection.query('SELECT * from clientes', 
		function (err, rows, fields) {
			if (!err){
			console.log(rows);
			socket.emit("mostrarDatos",rows);
			}
			
			else 
			console.log('Error mientras se preparaba la consulta!');
			}		
			);
    });
     socket.on("agregarcliente", 
     	function(params, fn){
     		var query = connection.query('insert into clientes set ?', params, function (err, result) {
     		if(err){
     			console.error(err);

     			fn(false);
     		}
     		else{
     		console.log(result);
     		fn(true);	

     			io.sockets.emit("mostrarcliente", params);
     		}
     		
     	});
                      
              });
};
io.on("connection", handleClient);

console.log ('asdad');




//connection.end();