const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg 


 


function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,400);
     engine = Engine.create();
    world = engine.world;
    bob = new Bob(100,330,30,30);
    stick = new Ground(100,300,10,10)
string = new String(bob.body,{x:100,y:50})


 ground = new Ground(600,360,250,20);
 box1 = new Box(495,330,30,75);
 box2 = new Box(555,330,30,75);
 box3 = new Box(590,270,220,30)
 box4 = new Box(620,330,30,75);
box5= new Box(680,330,30,75);
box6 = new Box(525,200,30,75);
box7  = new Box(650,200,30,75);
box8  = new Box(585,200,30,75);
box9 = new Box(585,150,160,30);
box10 = new Box(555,120,30,75);
box11 = new Box(615,120,30,75);
box12= new Box(585,90,100,30);

} 

function draw(){
    background(bg)
Engine.update(engine)
    strokeWeight(4);
      bob.display()
     stick.display()
     string.display()
        ground.display()
        box1.display()
        box2.display()
        box3.display()
       box4.display()
      box5.display()
      box6.display()
      box7.display()
      box8.display()
      box9.display()
      box10.display()
      box11.display()
      box12.display()
      
      
}
function mouseDragged() {
    Matter.Body.setPosition(bob.body,{x:mouseX,y:mouseY})
    
    
    }

    function mouseReleased(){
        string.fly()
        
        }
        function keyPressed(){
            if(keyCode === 32){
            string.attach(bob.body)
            }
        }
        async function getBackgroundImg(){
            var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
            var responseJSON = await response.json();
        
            var datetime = responseJSON.datetime;
            var hour = datetime.slice(11,13);
            
            if(hour>=0600 && hour<=1900){
                bg = "red"
            }
            else{
                bg = "blue"
                
            }
        
        }

