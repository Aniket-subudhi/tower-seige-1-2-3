class String {
    constructor(bodyA,point_b){
var options = {
bodyA:bodyA,
pointB:point_b,
length:10,
stiffness : 0.04


}
//console.log(Constrained)
this.string=Constraint.create(options)
World.add(world,this.string)

 

    }
display(){
    if(this.string.bodyA){

  
var point_a  = this.string.bodyA.position
var point_b = this.string.pointB
line(point_a.x,point_a.y,point_b.x,point_b.y)
 console.log(this.string.bodyA.position)
}
}
attach(body){
    this.string.bodyA = body 
}
fly(){
    this.string.bodyA=null;
    
    
        }
       
        
            
            
        }


