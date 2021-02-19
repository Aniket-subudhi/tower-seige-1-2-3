class Box{
    constructor(x,y,width,height) {
      this.Vissibility= 255
    this.image = loadImage("box.png")
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':0.5
    }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed)
      if(this.body.speed < 3){
        var pos =this.body.position;
        rectMode(CENTER);
        stroke(3)
        fill("blue")
        
        
        image(this.image,pos.x,pos.y,50,50)
       }

       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         var pos =this.body.position;
        image(this.image,pos.x,pos.y,50,50)

         pop();
       }
      }
      
    
  };
