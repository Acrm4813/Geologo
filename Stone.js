class Stone{
	constructor(x,y,width,height)
	{
		var options={
			restitution:0.8,
			friction:0.9,
			density:110
	}
        this.body = Bodies.rectangle(x,y,width,height,options);
		this.x=x;
		this.y=y
		this.width=width;
		this.height=height;
        World.add(world, this.body);
	}
	display()
	{
			var stonepos=this.body.position;
			var angle = this.body.angle;
			push();
			translate(stonepos.x, stonepos.y);
			rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("gray");
			rect(0, 0, this.width, this.height);
			pop();
	}
}