class Baseclass{
    constructor(x,y,w,h,image){
        var options={
            isStatic:true
        }
        this.body= Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        this.number=0;
        this.image= loadImage(image);
        World.add(world,this.body);
    }

    display(){
        var pos= this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.w,this.h);
    }
}