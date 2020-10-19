/*class Rope{
    constructor(body1,body2){
        var options={
            bodyA:body1, 
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        //console.log(options);
        this.rope=Constraint.create(options);
        World.add(world,this.rope);

    }

    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        
        strokeWeight(2);
        var Anchor1X=pointA.x;
        var Anchor1Y=pointA.y;

        var Anchor2X=pointB.x+this.offsetX;
        var Anchor2Y=pointB.x+this.offsetY;

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

    }
}*/

class Rope{
     constructor(body1,pointB){
          var options={
             bodyA:body1,
             pointB:pointB, 
             stiffness:0.04, 
             length:200 }
           //console.log(options);
            this.rope=Constraint.create(options);
             this.pointB=pointB;
              World.add(world,this.rope);
             }
               display(){
                    var pointA=this.rope.bodyA.position; 
                    var pointB=this.pointB; 
                    strokeWeight(2);
                    line(pointA.x,pointA.y,pointB.x,pointB.y);
                 } 
                }