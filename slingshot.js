class slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            bodyB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB
        this.slingshot = Constraint.create(options);
        World.add(world, this.chain);
        fly()
     {   this.sling.bodyA=null;
     }  
    }

    display(){
        if (this.slingshot.bodyA)
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}