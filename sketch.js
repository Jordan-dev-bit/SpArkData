var grow=30;
	grow2=225;
	grow3=275;
//The setup function only happens once
function setup() {
	createCanvas(500, 500);
	  background(0,0,0); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
 //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
	triangle(230, 230, 230, 260, 245, 245);
  line(grow,grow2,grow,grow3);
  
  	 // center of canvas, 20px dia
}
function mousePressed(){
	grow=grow+5;
	grow2=grow2-5;
	grow3=grow3+5;
}