class Ball
{
    constructor(x,y,r)
    {
        let ball_options = {
            restitution : 0.8
           };
           
           this.body = Bodies.circle(x, y, r, ball_options);
           this.r = r;
           World.add(world, this.body);
    }

    show()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        ellipseMode(CENTER);
        noStroke();
        ellipse(pos.x,pos.y, this.w, this.h);
        pop();
    }
}