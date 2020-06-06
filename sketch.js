var sketch = [];

function setup() {
  createCanvas(1600,400);
}

function draw() {
  
  
  //textSize(50)
  //text(".", mouseX, mouseY);


  


 drawSprites();
}

function keyPressed(){


    if(keyCode === UP_ARROW){
   
      var points = {

       x: mouseX,
       y: mouseY


      }
    sketch.push(points); 

     }

  
  for(var i; i < sketch.length; i++){

    text(".", sketch[i].x, sketch[i].y);
  }

};
