//The setup function only happens once


function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  }
//The draw function happens over and over again
function draw() {
  background(245,87,170); //an RGB color for the canvas' background
  // //circle
  //make  the ellipse follow your mouse 
  stroke(245,80,90,255); // an RGB color for the circle's border
  strokeWeight(7);
  fill(240,152,180,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,20,20);
  ellipse(mouseX+30,mouseY,20,20);
  // Draw the shape
  
 

}


