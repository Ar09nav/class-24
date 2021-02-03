class Log {
    constructor(x, y, height,angle) {
      var options = {
          'restitution':0.8,
          'friction':1.5,
          'density':1.0
      }
      this.logbody = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.logbody, angle);
      World.add(world, this.logbody);
    }
    display(){
      var pos =this.logbody.position;
      var angle = this.logbody.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(5);
      stroke("brown");
      fill("maroon");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };