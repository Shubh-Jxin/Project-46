class Instructions{
    constructor(){
        this.ins0= createElement("h1");
        this.ins1= createP("⇝ Enter your Name");
        this.ins2= createP("⇝ Click on the Submit Button before Clicking on the Start Button");
        this.ins3= createP("⇝ Click on the Start Button, if no more players are joining");
        this.ins4= createP("⇝ Roll the Dice");
        this.ins5= createP("⇝ Answer Questions");
        this.ins6= createP("⇝ There are certain Trick Questions that can take you to Different Goals");
        this.ins7= createP("⇝ If you reach the UN Headquarters you will have to skip a Turn");
        this.ins8= createP("⇝ If you reach the Law Breaker you will have to give 5 points");
        this.ins9= createP("⇝ If you reach the Reward Tile you will get 3 points");
        this.ins10= createP("⇝ Each Questions has different points for it");
        this.ins11= createP("⇝ Enjoy the Game");
        this.next= createButton("Next ↦");
    }

    hide(){
        this.ins0.hide();
        this.ins1.hide();
        this.ins2.hide();
        this.ins3.hide();
        this.ins4.hide();
        this.ins5.hide();
        this.ins6.hide();
        this.ins7.hide();
        this.ins8.hide();
        this.ins9.hide();
        this.ins10.hide();
        this.ins11.hide();
        this.next.hide();
    }

    display(){

        this.ins0.html(" Instructions");
        this.ins0.style("color: black; font-family: 'Luckiest Guy', cursive; font-size:80px;" )
        this.ins0.position(500,140);
        this.ins1.position(100,150);
        this.ins2.position(100,200);
        this.ins3.position(100,250);
        this.ins4.position(100,300);
        this.ins5.position(100,350);
        this.ins6.position(100,400);
        this.ins7.position(100,450);
        this.ins8.position(100,500);
        this.ins9.position(100,550);
        this.ins10.position(100,600);
        this.ins11.position(100,650);
        this.next.position(1200,675);
        this.next.style("font-family: 'Luckiest Guy', cursive; font-size:40px")

        this.next.mousePressed(()=>{
            game.updateState(1);
            game.start();
            inst.hide();
        })
    }
}