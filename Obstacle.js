function Obstacle() {
  this.x = width;
  this.y = 0;
  this.v = -4;
  this.w = 30;
  this.h = random(30,150);
  this.numJumps = 0;
  this.maxJumps = 2;

  this.move = function() {
    this.x += this.v
  }

  this.display = function() {
    fill(0);
    rect(this.x, height - this.h - this.y, this.w, this.h);
  }
  
};
