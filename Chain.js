class Chain
{
    constructor(birdA,logB)
    {
        var Options = 
        {
            bodyA : birdA,
            bodyB : logB,
            stiffness : 0.04,
            length : 12
        }
        this.chain = Constraint.create(Options);
        World.add(world,this.chain);
    }
    display()
    {
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,
            this.chain.bodyB.position.x,this.chain.bodyB.position.y )
    }
}