class Steel{
	constructor(x,y)
	{
		var options={
			restitution:0.8,
			friction:3,
			density:10000000
	}
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(x,y,50,50,options);
		World.add(world, this.body);

	}
	display()
	{
			var steelpos=this.body.position;
			var angle = this.body.angle;	
			push();
			translate(steelpos.x, steelpos.y);
			rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("silver");
			rect(0,0,80,50);
			pop()
	}

}