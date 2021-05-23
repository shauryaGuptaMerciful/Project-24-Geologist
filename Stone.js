class Stone{
      constructor(x,y,r){

        var options = {
            'density':12,
            'friction':0.9,
            'restitution':0.8
        };
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options );
        World.add(world, this.body);
      }

      display(){
            var stonepos = this.body.position;
            push()
            translate(stonepos.x, stonepos.y);
            fill("red");
            ellipse(0, 0, this.r, this.r);
            pop();
         }
}