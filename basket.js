class basket{
    constructor(x,y,width,height){
        var options={
            density:80
        }

       this.basketbody=Bodies.rectangle(x,y,width,height,options);
       this.basketW=width;
       this.basketH=height;
       World.add(wld,this.basketbody)
       this.rightWall=Bodies.rectangle()
       this.leftWall=Bodies.rectangle()
       this.bottomWall=Bodies.rectangle()
       this.image= loadImage("DUSTBIN.png")

    }

    display(){
        var pos = this.basketbody.position;
        var angle= this.basketbody.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        this.image(DUSTBIN.png,[20],[40])
        rect(0,0,this.basketW,this.basketH)
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }

    
}