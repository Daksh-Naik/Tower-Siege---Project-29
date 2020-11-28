class RBox {
    constructor(x, y, width, height) {
      var RBoxOptions = {
          'restitution': 0.03,
          'fricion': 2.0,
          'density': 1.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, RBoxOptions);
      this.width = width;
      this.height = height;

      World.add(world, this.body);
    }

  display() {
    var pos = this.body.position;

    push();
    rectMode(CENTER);
    fill(color(255, 0, 0));
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }
}