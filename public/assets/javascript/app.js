$(document).ready(function() {
var hello = "hello world";

console.log(hello);


});
//---------------------------------------------
var didMove = false;
var x = 0;
var c;
//------------------------------------
function setup() {
    c = createCanvas(600,400);

}
//-------------------------------------------------    
function draw() {
   background(0,0,0,0);


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
function keyPressed(){
    if(keyCode === 32){
        saveCanvas(c, "joshtest", "png")
        console.log("you hit da space bar!");
    }
}

  
  

    