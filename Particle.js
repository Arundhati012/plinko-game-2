class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

};

function mousePressed (){
    }
    if(gameState!=="end")
    particle=new Particle(mouseX,10,10,10) ;  
    
    function keyPressed(){
        if(keyCode===32)
        particle.trajectory=[];

        Matter.Body.setPosition(particle.body,{x:200,y:50});
    }

    if(particle!=null){
    }

    particle.display();

    if(particle.body.position.y>760){
    }
    if(particle.body.position.x<300){
    }
    score=score+500;
    particle=null;

    if(count>= 5)gameState="end";
    
    
