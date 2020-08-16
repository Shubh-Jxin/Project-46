class Pawn{
    constructor(x,y,image){
        var options={
            isStatic:true
        }
        this.body= Bodies.rectangle(x,y,100,70,options);
        this.image= loadImage(image);
        this.w=100;
        this.h=70;
        World.add(world,this.body);
    }

    display(){
        var pos= this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.w,this.h);
    }
}