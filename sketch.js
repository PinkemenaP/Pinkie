//The setup function only happens once


function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  }
//The draw function happens over and over again
function draw() {
  background(245,87,170); //an RGB color for the canvas' background
  // //circle
  //make  the ellipse follow your mouse 
  stroke(245,80,90); // an RGB color for the circle's border
  strokeWeight(3);
  fill(270,152,180); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,20,20);
  ellipse(mouseX+40,mouseY,20,20);
  // Draw the shape
  
}
