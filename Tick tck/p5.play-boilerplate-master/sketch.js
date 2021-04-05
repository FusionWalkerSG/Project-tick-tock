var hr,mn,sc;
var hourAngle, minuteAngle,secondAngle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES); 
}

function draw() {
  background(255,255,255);  
  hr = hour();
  mn = minute();
  sc = second();

  secondAngle = map(sc, 0, 60,0,360);
  minuteAngle = map(mn, 0, 60,0,360);
  hourAngle = map(hr%12, 0, 12,0,360);
  translate(200,200);
  rotate(-90);
  push();
  rotate(secondAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,80,0);
  pop();

  push();
  rotate(minuteAngle);
  stroke("blue");
  strokeWeight(9);
  line(0,0,60,0);
  pop();

  push();
  rotate(hourAngle);
  stroke("green");
  strokeWeight(12);
  line(0,0,40,0);
  pop();

  drawSprites();
}