//Tower Siege 1 - Wrecking up the box stacks
//WhiteHatJR Project 29 28-11-2020 11:30

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup(){
    createCanvas(1350, 600);
    engine = Engine.create();
    world = engine.world;

    BaseGround = new Ground(width/2, 590, 1350, 30);
    ShelfGround = new Ground(320, 350, 250, 20);
    ShelfGround2 = new Ground(1090, 350, 300, 20);

//----------------------------------------------------------------------------------------@
    PBox1 = new PBox(320, 330, 30, 30);
    PBox2 = new PBox(350, 330, 30, 30);
    PBox3 = new PBox(380, 330, 30, 30);
    PBox4 = new PBox(410, 330, 30, 30);
    PBox5 = new PBox(290, 330, 30, 30);
    PBox6 = new PBox(260, 330, 30, 30);
    PBox7 = new PBox(230, 330, 30, 30);
    YBox1 = new YBox(305, 300, 30, 30);
    YBox2 = new YBox(335, 300, 30, 30);
    YBox3 = new YBox(365, 300, 30, 30);
    YBox4 = new YBox(395, 300, 30, 30);
    YBox5 = new YBox(275, 300, 30, 30);
    YBox6 = new YBox(245, 300, 30, 30);
    PBox8 = new PBox(320, 270, 30, 30);
    PBox9 = new PBox(350, 270, 30, 30);
    PBox10 = new PBox(380, 270, 30, 30);
    PBox11 = new PBox(290, 270, 30, 30);
    PBox12 = new PBox(260, 270, 30, 30);
    YBox7 = new YBox(305, 240, 30, 30);
    YBox8 = new YBox(335, 240, 30, 30);
    YBox9 = new YBox(365, 240, 30, 30);
    YBox10 = new YBox(275, 240, 30, 30);
    PBox13 = new PBox(320, 210, 30, 30);
    PBox14 = new PBox(350, 210, 30, 30);
    PBox15 = new PBox(290, 210, 30, 30);
    YBox11 = new YBox(305, 180, 30, 30);
    YBox12 = new YBox(335, 180, 30, 30);
    PBox16 = new PBox(320, 150, 30, 30);
//-----------------------------------------------------------------------------------------@

    RBox1 = new RBox(1090, 330, 30, 30);
    RBox2 = new RBox(1120, 330, 30, 30);
    RBox3 = new RBox(1150, 330, 30, 30);
    RBox4 = new RBox(1180, 330, 30, 30);
    RBox5 = new RBox(1210, 330, 30, 30);
    RBox6 = new RBox(1060, 330, 30, 30);
    RBox7 = new RBox(1030, 330, 30, 30);
    RBox8 = new RBox(1000, 330, 30, 30);
    RBox9 = new RBox(970, 330, 30, 30);
    LBBox1 = new LBBox(1075, 300, 30, 30);
    LBBox2 = new LBBox(1105, 300, 30, 30);
    LBBox3 = new LBBox(1135, 300, 30, 30);
    LBBox4 = new LBBox(1165, 300, 30, 30);
    LBBox5 = new LBBox(1195, 300, 30, 30);
    LBBox6 = new LBBox(1045, 300, 30, 30);
    LBBox7 = new LBBox(1015, 300, 30, 30);
    LBBox8 = new LBBox(985, 300, 30, 30);
    RBox10 = new RBox(1090, 270, 30, 30);
    RBox11 = new RBox(1120, 270, 30, 30);
    RBox12 = new RBox(1150, 270, 30, 30);
    RBox13 = new RBox(1180, 270, 30, 30); 
    RBox14 = new RBox(1060, 270, 30, 30);
    RBox15 = new RBox(1030, 270, 30, 30);
    RBox16 = new RBox(1000, 270, 30, 30);
    LBBox9 = new LBBox(1075, 240, 30, 30);
    LBBox10 = new LBBox(1045, 240, 30, 30);
    LBBox11 = new LBBox(1015, 240, 30, 30);
    LBBox12 = new LBBox(1105, 240, 30, 30);
    LBBox13 = new LBBox(1135, 240, 30, 30);
    LBBox14 = new LBBox(1165, 240, 30, 30);
    RBox17 = new RBox(1090, 210, 30, 30);
    RBox18 = new RBox(1120, 210, 30, 30);
    RBox19 = new RBox(1150, 210, 30, 30);
    RBox20 = new RBox(1060, 210, 30, 30);
    RBox21 = new RBox(1030, 210, 30, 30);
    LBBox15 = new LBBox(1075, 180, 30, 30);
    LBBox16 = new LBBox(1105, 180, 30, 30);
    LBBox17 = new LBBox(1135, 180, 30, 30);
    LBBox18 = new LBBox(1045, 180, 30, 30);
    RBox22 = new RBox(1090, 150, 30, 30);
    RBox23 = new RBox(1120, 150, 30, 30);
    RBox24 = new RBox(1060, 150, 30, 30);
    LBBox19 = new LBBox(1075, 120, 30, 30);
    LBBox20 = new LBBox(1105, 120, 30, 30);  
    RBox25 = new RBox(1090, 90, 30, 30);

//-----------------------------------------------------------------------------------------@

    OrigPolygon = new Polygon(width/2, height/2, 30);
    PolySlingShot = new SlingShotT2(OrigPolygon.body, {x:675, y:350});

}

function draw(){
    rectMode(CENTER);
    background(color(102, 0, 204));
    Engine.update(engine);
    
    BaseGround.display();
    ShelfGround.display();
    ShelfGround2.display();

    OrigPolygon.display();
    PolySlingShot.display();
//-----------------------------------------------------------------
    PBox1.display();
    PBox2.display();
    PBox3.display();
    PBox4.display();
    PBox5.display();
    PBox6.display();
    PBox7.display();
    YBox1.display();
    YBox2.display();
    YBox3.display();
    YBox4.display();
    YBox5.display();
    YBox6.display();
    PBox8.display();
    PBox9.display();
    PBox10.display();
    PBox11.display();
    PBox12.display();
    YBox7.display();
    YBox8.display();
    YBox9.display();
    YBox10.display();
    PBox13.display();
    PBox14.display();
    PBox15.display();
    YBox11.display();
    YBox12.display();
    PBox16.display();
//------------------------------------------------------------------

    RBox1.display();
    RBox2.display();
    RBox3.display();
    RBox4.display();
    RBox5.display();
    RBox6.display();
    RBox7.display();
    RBox8.display();
    RBox9.display();
    LBBox1.display();
    LBBox2.display();
    LBBox3.display();
    LBBox4.display();
    LBBox5.display();
    LBBox6.display();
    LBBox7.display();
    LBBox8.display();
    RBox10.display();
    RBox11.display();
    RBox12.display();
    RBox13.display();
    RBox14.display();
    RBox15.display();
    RBox16.display();
    LBBox9.display();
    LBBox10.display();
    LBBox11.display();
    LBBox12.display();
    LBBox13.display();
    LBBox14.display();
    RBox17.display();
    RBox18.display();
    RBox19.display();
    RBox20.display();
    RBox21.display();
    LBBox15.display();
    LBBox16.display();
    LBBox17.display();
    LBBox18.display();
    RBox22.display();
    RBox23.display();
    RBox24.display();
    LBBox19.display();
    LBBox20.display();
    RBox25.display();

//--------------------------------------------------------------------------------@

    fill(color(255, 255, 255));
    text("Press, hold and release your mouse to release the ball !", 540, 50);
    fill(color(255, 125, 0));
    text("Try hitting the stacked boxes !", 600, 70);
    fill(color(255, 255, 0));
    text("Press SPACE to reset the ball, F5 to reset completely", 550, 100);
    
}

function mouseDragged() {
    Matter.Body.setPosition(OrigPolygon.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
    PolySlingShot.fly();
}

function keyPressed () {
if (keyCode === 32) {
    PolySlingShot.comeBack(OrigPolygon.body);
}
}
