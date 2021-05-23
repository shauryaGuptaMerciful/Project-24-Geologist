class Iron{
    constructor(x,y){

      var options = {
          'density':30,
          'friction':3,
          'restitution':0.8
      };
      this.x = x;
      this.y = y;
      this.body = Bodies.rectangle(this.x, this.y, 75, 75, options );
      this.width = 75;
      this.height = 75;
      World.add(world, this.body);
    }

    display(){
          var ironpos = this.body.position;
          push();
          translate(ironpos.x, ironpos.y);
          fill("black");
          rect(0, 0, this.width, this.height);
          pop();
       }
}