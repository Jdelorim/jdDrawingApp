
var x = 0;
var c;
var saveME = false;
var clearME = false;
var alphadog = 255;
var firstTime = true;

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
   
}
  
function draw() {
  
   background(0,0,0,alphadog);
   saveLocal();
   clearMe();
   
}

function mouseDragged() {
    
    if(x<10) {
         x++;
    } else {
         x=0;   
    }
   
   fill(255);
   noStroke();
   ellipse(mouseX, mouseY, x, x);
}

//-----------my functions--------
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

  
  

    