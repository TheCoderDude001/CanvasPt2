var sketch = [];
var pointx = 0; 
var pointy = 0;
var database;


function setup() {
  createCanvas(1600,400);
  database = firebase.database();
 
}

function draw() {
  
  

  //textSize(50)
  //text(".", mouseX, mouseY);

  


  getX();
  getY();
  point(pointx, pointy);


  console.log(pointx);
  console.log(pointy);


  var points = {

    x: mouseX,
    y: mouseY


  }

  sketch.push(points)


  updateX(sketch[sketch.length-1].x);
  updateY(sketch[sketch.length-1].y);


  //console.log(sketch[sketch.length -1])




}

  function getX(){
    var pointsRef = database.ref('points/x');
    pointsRef.on("value",(data)=>{
      pointx = data.val();
    })
  }

  function getPoints(){
    var pointsRef = database.ref('points/y');
    pointsRef.on("value",(data)=>{
      pointy = data.val();
    })
  }

  
  function updateX(xVal){
    var pointsX = "points";
    database.ref(pointsX).update({
      x: xVal
    });
  }

  function updateY(yVal){
    var pointsY = "points";
    database.ref(pointsY).update({
      y: yVal
    });
  }


/*
function keyPressed(){


    if(keyCode === 32){
   
      var points = {

       x: mouseX,
       y: mouseY


      }
    sketch.push(points); 

     }

  
  for(var i; i < sketch.length; i++){

    //text(".", sketch[i].x, sketch[i].y);
    point(sketch[i].x, sketch[i].y);
  }

};
*/
