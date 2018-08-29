"use strict";

var paintTools = {
    jsize: 3,
    hue: 1,
    sat: 1,
    lum: 0.5
}
var c;
var saveMe = false;
var clearMe = false;
var alphadog = 255;
var firstTime = true;
var socket;
var data;

//-----------jquery-------
$(document).ready(function() {
     $("#jdSave").on("click", function() {
    saveMe = true;
    });
    
     $("#jdClear").on("click",function(){
        clearMe = true; 
        console.log("clearME: ", clearMe);
    });
});
//--------p5-----------------
function setup() {
    c = createCanvas(600,400);
    c.position(300, 150);
    setTimeout(function() {
    alphadog = 0;
    console.log("alphadog: ",alphadog);
   }, 1000);
    var port1 = "http://localhost:4040";
    var port2 = "process.env.PORT";
  // socket = io.connect( "http://localhost:4040");
   socket = io.connect();
   socket.on("mouse", function(data) {
  //  console.log("got: ",data.x,"",data.y);
    newDrawing(data);
    });
    paintTools.jsize = 2;
   
}
  
function draw() {
  
   background(0,0,0,alphadog);
   saveLocal();
   clearCanvas();
}

function mouseDragged() {
  data = {
        x: mouseX,
        y: mouseY,
        jsize: paintTools.jsize
    };
   
   socket.emit("mouse", data);
}

//-----------my functions--------
function newDrawing(data) {
    fill(255,100,100);
    noStroke();
    ellipse(data.x, data.y, data.jsize, data.jsize);
}





function saveLocal() {
    if(saveMe === true) {
        saveCanvas(c, "joshtest", "png")
        console.log("you saved the picture!");
        saveMe = false;
    }
}

function clearCanvas() {
    
    if(clearMe === true) {
        
        alphadog = 255;

      //  console.log("you hit clear, alphadog:", alphadog);
        setTimeout(function() {
        alphadog = 0;
     //   console.log("alphadog: ",alphadog);
       }, 1000);
        clearMe = false;
       
    }
}

  
  

    