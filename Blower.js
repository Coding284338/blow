class Blower
{
    constructor(x,y,w,h)
    {
        var blower_options = {
            isStatic: true
           };
           
           this.body = Bodies.rectangle(x, y, w,h ,blower_options);
           this.w = w;
           this.h = h;
           this.color = color;
           World.add(world, this.body);
    }

    show()
    {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        noStroke();
        fill("#8d6e63");
        rect(pos.x,pos.y, this.w, this.h);
        pop();
    }
}