function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background("white");
  
    stroke("blue");
    fill("red");
    
   console.log(mouseIsPressed); 
    rect(mouseX, mouseY, 20, 35);
    
    
    
  }