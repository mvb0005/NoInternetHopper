function Player() {
  this.x = 70;
  this.y = 0;
  this.v = 0;
  this.w = 30;
  this.h = 100;
  this.numJumps = 0;
  this.maxJumps = 2;

  this.move = function() {
    if (this.y > 0) {
      this.v += gravity;
      this.y += this.v;
    } else {
      this.v = 0;
      this.numJumps = 0;
    }
    this.y = max(this.y, 0);
  }

  this.display = function() {
    fill(0);
    rect(this.x, height - this.h - this.y, this.w, this.h);
  }

  this.jump = function() {
    if (this.numJumps < this.maxJumps) {
      this.v = 15;
      this.numJumps++;
      this.y += 10;
    }
  }
};
