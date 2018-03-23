var gravity = -1;
var player;
var obstacles = [];
var nextObstacleFrame = 1;
function setup() {
  createCanvas(900, 500);
  player = new Player();
}

function draw() {
  background(50, 89, 100);
  fill(color(0,0,100));
  player.move();
  player.display();
  if (frameCount == nextObstacleFrame){
    obstacles.push(new Obstacle());
    nextObstacleFrame += round(random(30,100))
  }
  fill(color(100,0,0))
  for (var i = 0; i < obstacles.length; i++) {
    obstacles[i].move();
    obstacles[i].display();
  };
}

function mousePressed() {
  player.jump();
}
