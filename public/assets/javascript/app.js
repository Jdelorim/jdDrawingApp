
var jsize = 0;
var c;
var saveME = false;
var clearME = false;
var alphadog = 255;
var firstTime = true;
var socket;
var data;

//-----------jquery-------
$(document).ready(function() {
   
    var hello = "hello world";
  
    $("#jdSave").on("click", function() {
        saveME = true;
    });
    $("#jdClear").on("click",function(){
        clearME = true; 
        console.log("clearME: ", clearME);
    });
});
//--------p5-----------------
function setup() {
    c = createCanvas(600,400);
    
    setTimeout(function() {
    alphadog = 0;
    console.log("alphadog: ",alphadog);
   }, 1000);

  // socket = io.connect( "http://localhost:4040");
  socket = io.connect(process.env.PORT);
   socket.on("mouse", function(data) {
    console.log("got: ",data.x,"",data.y);
    newDrawing(data);
})
   
}
  
function draw() {
  
   background(0,0,0,alphadog);
   saveLocal();
   clearMe();
 // clearPromise();
 // promiseHolder(); 


  
   
}

function mouseDragged() {
  
  
    if(jsize<20) {
         jsize++;
    } else {
         jsize=0;   
    }

    data = {
        x: mouseX,
        y: mouseY,
        jsize: jsize
    };
   // var data2 = "hello world";
   socket.emit("mouse", data);
  //  console.log(data);
  console.log(data.x);
   fill(255);
   noStroke();
   ellipse(mouseX, mouseY, jsize, jsize);
  
}

//-----------my functions--------
function newDrawing(data) {
    fill(255);
    noStroke();
    ellipse(data.x, data.y, data.jsize, data.jsize);
}





function saveLocal() {
    if(saveME === true) {
        saveCanvas(c, "joshtest", "png")
        console.log("you saved the picture!");
        saveME = false;
    }
}

function clearMe() {
    
    if(clearME === true) {
        
        alphadog = 255;

        console.log("you hit clear, alphadog:", alphadog);
        setTimeout(function() {
        alphadog = 0;
        console.log("alphadog: ",alphadog);
       }, 1000);
        clearME = false;
       
    }
}
/*
function promiseHolder() {
    if(clearME === true) {
var clearPromise = new Promise(function(resolve, reject){
    console.log("IN PROMISE")
   
   var c = console.log("alpha", alphadog);
    resolve(c)
})
.then(function(){
    
   
    
    console.log(c);

})
clearME = false;
    }
}
*/
  
  

    