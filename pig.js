class Pig {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.pigbody = Bodies.rectangle(x, y,50,50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.pigbody);
    }
    display(){
      var pos =this.pigbody.position;
      var angle = this.pigbody.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };