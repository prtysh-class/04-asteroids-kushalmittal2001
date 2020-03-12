var turn = 0;
var vel;
var pos;
var top;
var force;
var rocks = [];
function setup() {
  createCanvas(500, 500);
  pos = createVector(width/2, height/2);
  vel = createVector(0,-1);
  
  rocket = new Rocket();
  
  for (var i = 0; i<=10; i++){
  rocks.push(new Rocks());
    
  }

  
}

function draw() {
  background(220);
  if (keyIsDown(LEFT_ARROW)) {
        turn = turn - 0.1;

  }

  if (keyIsDown(RIGHT_ARROW)) {
    turn = turn + 0.1;
  }
  if (keyIsDown(UP_ARROW)) {
    
    // pos.add(vel);
      print(force);
      pos.add(force);
    
  }
   if (keyIsDown(DOWN_ARROW)) {
    
    pos.sub(vel);
  }
  rocket.tri();
  rocket.check();
  
  
  
  for(var i = 0; i<rocks.length; i++)
 {
   rocks[i].display();
  }
  
  
  
}

// function keyPressed() {
//   if(keyCode == RIGHT_ARROW)
//   {
//     turn = turn + 0.1;
//     print(turn);
//   }
//   if(keyCode == LEFT_ARROW)
//   {
//     turn = turn - 0.1;
//     print(turn);
//   }
  
// }


function Rocket(){
  
 
  this.tri = function() {
    push();
    translate(pos.x, pos.y)
    rotate(turn + PI / 2);
    noFill();
    stroke(0);
    triangle(-20,20,20,20,0,-20);
    force = p5.Vector.fromAngle(turn);
    pop();
    
  }
  
  this.check = function () {
    if(pos.x > width + 20)
    {
      pos.x = -20;
    }
    if(pos.x < -20)
    {
      pos.x = width + 20;
    }
    if(pos.y > width + 20)
    {
      pos.y = -20;
    }
    if(pos.y < -20)
    {
      pos.y = width + 20;
    }
  }
  
  
}

function Rocks() {
  var rad = random(30,50);
  this.pos = createVector(random(width),random(height));
                          
  this.display = function() {
    push();
    translate(this.pos.x, this.pos.y);
    fill(0);
    ellipse(0,0,rad*2);
    pop();
    
  }
  
  
}
