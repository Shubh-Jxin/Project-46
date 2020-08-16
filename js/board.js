class Board{
    constructor(){
        
    }
     
    start(){
            start= new Baseclass(displayWidth-1370,250,150,150,"pic/start.png");
            start.number=0;
            sdg1= new Baseclass(displayWidth-1370,100,150,150,"pic/sdg1.png");
            sdg1.number=1;
            sdg2= new Baseclass(displayWidth-1200,100,200,150,"pic/sdg2.png");
            sdg2.number=2;
            sdg3= new Baseclass(displayWidth-1040,100,160,150,"pic/sdg3.png");
            sdg3.number=3;
            sdg4= new Baseclass(displayWidth-890,100,150,150,"pic/sdg4.png");
            sdg4.number=4;
            trick1= new Baseclass(displayWidth-740,100,150,150,"pic/trick.jpg");
            trick1.number=5;
            sdg5= new Baseclass(displayWidth-590,100,150,150,"pic/sdg5.png");
            sdg5.number=6;
            sdg6= new Baseclass(displayWidth-440,100,150,150,"pic/sdg6.png");
            sdg6.number=7;
            sdg7= new Baseclass(displayWidth-290,100,150,150,"pic/sdg7.png");
            sdg7.number=8;
            un= new Baseclass(displayWidth-120,100,200,200,"pic/un.png");
            un.number=9;
            sdg8= new Baseclass(displayWidth-95,275,150,150,"pic/sdg8.png");
            sdg8.number=10;
            sdg9= new Baseclass(displayWidth-95,425,150,150,"pic/sdg9.png");
            sdg9.number=11;
            trick2= new Baseclass(displayWidth-95,575,150,150,"pic/trick.jpg");
            trick2.number=12;
            law= new Baseclass(displayWidth-120,750,150,150,"pic/law.png");
            law.number=13;
            sdg10= new Baseclass(displayWidth-290,750,150,150,"pic/sdg10.png");
            sdg10.number=14;
            sdg11= new Baseclass(displayWidth-440,750,150,150,"pic/sdg11.png");
            sdg11.number=15;
            sdg12= new Baseclass(displayWidth-590,750,150,150,"pic/sdg12.png");
            sdg12.number=16;
            sdg13= new Baseclass(displayWidth-740,750,150,150,"pic/sdg13.png");
            sdg13.number=17;
            trick3= new Baseclass(displayWidth-890,750,150,150,"pic/trick.jpg");
            trick3.number=18;
            sdg14= new Baseclass(displayWidth-1040,750,150,150,"pic/sdg14.png");
            sdg14.number=19;
            sdg15= new Baseclass(displayWidth-1190,750,150,150,"pic/sdg15.png");
            sdg15.number=20;
            reward= new Baseclass(displayWidth-1360,725,200,200,"pic/reward.png");
            reward.number=21;
            sdg16= new Baseclass(displayWidth-1370,550,150,150,"pic/sdg16.png");
            sdg16.number=22;
            sdg17= new Baseclass(displayWidth-1370,400,150,150,"pic/sdg17.png");
            sdg17.number=23;
            logo= new Baseclass(displayWidth/2-19,displayHeight/2,1000,400,"pic/sdg.png"); 
            //sdg1.number=1;
            
            
    }

    display(){
        start.display();   
        sdg1.display();
        sdg2.display();
        sdg3.display();
        sdg4.display();
        trick1.display();
        sdg5.display();
        sdg6.display();
        sdg7.display();
        un.display();
        sdg8.display();
        sdg9.display();
        trick2.display();
        law.display(); 
        sdg10.display();
        sdg11.display();
        sdg12.display();
        sdg13.display();
        trick3.display();
        sdg14.display();
        sdg15.display();
        reward.display();
        sdg16.display();
        sdg17.display();     
        fill(255)
        rectMode(CENTER);
       // rect(displayWidth-740,100,150,150);
        //rect(displayWidth-95,575,150,150);
        //rect(displayWidth-890,750,150,150)
        //fill()
        rect(displayWidth/2-19,displayHeight/2,1000,400 )
        noFill();
        stroke(255);
        strokeWeight(3);
        rect(displayWidth-120,750,190,190);
        logo.display();
       
      
        
    }
        
}