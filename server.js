var express = require("express");
var app = express();


var PORT = process.env.PORT || 4040;
app.set("PORT",PORT);
 
var server = app.listen(PORT,listening);

function listening() {
    console.log("listening on:", PORT);
}

app.use(express.static("public"));

//-------socket.io-----------------

var socket = require("socket.io");
var io = socket(server);

io.sockets.on("connection", newConnection);
function newConnection(socket) {
    
    console.log("new connection: ",socket.id);
    socket.on("mouse",
    function (data) {
   //io.sockets.emit("mouse",data);
  
    socket.broadcast.emit("mouse", data);
    console.log(data);
    });

}



