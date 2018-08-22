var express = require("express");
var bodyParser = require("body-parser");
var app = express();


var PORT = process.env.PORT || 4040;
//app.set("PORT",PORT);

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());




app.use(express.static("public"));
require("./routing/htmlRoutes")(app);
/*
app.get("*",function (req,res) {
    res.sendFile(path.join(_dirname, "../public/index.html"));
});

app.get("/gallery",function (req,res) {
 res.sendFile(path.join(_dirname, "../public/gallery.html"));
});
*/
var server = app.listen(PORT,listening);

function listening() {
    console.log("listening on:", PORT);
}

//-------socket.io-----------------

var socket = require("socket.io");
var io = socket(server);

io.sockets.on("connection", newConnection);
function newConnection(socket) {
    
    console.log("new connection: ",socket.id);
    socket.on("mouse",
    function (data) {
   io.sockets.emit("mouse",data);
   // socket.broadcast.emit("port",process.env.PORT);   
  // console.log(process.env.PORT); 
    socket.broadcast.emit("mouse", data);
    console.log(data);
    });

}



