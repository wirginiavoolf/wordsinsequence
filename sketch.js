var message1="hello";
var message2="goodbye";

function setup() {

  createCanvas(500, 500);

}

function draw() {
   //background(255); 
}

function mousePressed(){
fill(10,10,250);
textSize(32);
text(message1, 10, 10, 100, 100);

  
}

function mouseReleased(){
fill(0,250,0); 
textSize(32);
text(message2, 30, 30, 100, 100);
 
}



