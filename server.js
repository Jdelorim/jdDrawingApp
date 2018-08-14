var express = require("express");
var app = express();

var PORT = process.env.PORT || 4040;
var server = app.listen(PORT,listening);

function listening() {
    console.log("listening on:",PORT);
}

app.use(express.static("public"));