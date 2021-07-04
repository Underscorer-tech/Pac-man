var blueAnim, ranim, pacman, pimgl, pimgu, pimgd, pimgr, Edges, egdeUp, edgeDown
var Bghost, Rghost, Pghost, Oghost, edgeRight, edgeLeft, walls, obc1, boximg, value1, value2;
var Gobstacle, Bobstacle, o1, o2, o3, o4, o5, o6, o7, o8, o9, o10, o11, o12, o13, o14;
var obstacles, pacSound;
var pills1, pills2, pills3, pills4, pills5, pills6, pills7, pillG;
var pillimg;
var stateofsound = 0;
var b1;
var ghostG;
var c1, c2, c3, c4, c5, c6
var score;
var pauseImg, pause;
var gameState = 0;
var logo, logo1;
var rx,px;

function preload() {

    // loading animation

    //PAC-MAN animation:
    pimgl = loadAnimation("img/PAC MAN L.png", "img/PAC MAN 2.png")
    pimgu = loadAnimation("img/PAC MAN U.png", "img/PAC MAN 2.png")
    pimgd = loadAnimation("img/PAC MAN D.png", "img/PAC MAN 2.png")
    pimgr = loadAnimation("img/PAC MAN.png", "img/PAC MAN 2.png")

    //obstacles animation:
    boximg = loadAnimation("obstacles/obstacle 3.png")
    Gobstacle = loadAnimation("obstacles/obstacle 2.png")
    Bobstacle = loadAnimation("obstacles/obstacle 1.png")

    //ghosts animation
    redAnim = loadAnimation("ghosts/red l.png", "ghosts/red r.png")
    blueAnim = loadAnimation("ghosts/blueR.png", "ghosts/blueL.png")
    pinkAnim = loadAnimation("ghosts/pinkR.png", "ghosts/pink l.png")
    orangeAnim = loadAnimation("ghosts/orange l.png", "ghosts/orange r.png")

    //loading Sounds
    pacSound = loadSound("wakawaka.swf.mp3")

    //loading pills animation
    pillimg = loadImage("img/pill.png")

    // loading logo
    logo1 = loadImage("img/logo.png")

}



function setup() {

    //creating canvas
    createCanvas(innerWidth, innerHeight);

    //creating walls array:
    walls = []
    obstacles = new Group();

    // createing ghost group
    ghostG = new Group();

    // creating pillsGroup
    pillG = new Group();

    // creating button
    b1 = new button();

    //creating Edges
    egdeUp = createSprite(windowWidth / 2, 1, 2300, 5)
    edgeDown = createSprite(windowWidth / 2, 650, 2300, 5)
    edgeRight = createSprite(5, windowHeight / 2, 5, 2300)
    edgeLeft = createSprite(1360, windowHeight / 2, 5, 2300)

    //adding them in walls
    walls = [egdeUp, edgeDown, edgeLeft, edgeRight]

    //creating pacman
    pacman = createSprite(64, 470, 50, 50,)
    pacman.addAnimation("p1", pimgl);
    pacman.addAnimation("p2", pimgr);
    pacman.addAnimation("p3", pimgd);
    pacman.addAnimation("p4", pimgu);
    pacman.scale = 0.33


    // making ghosts
    Rghost = createSprite(596, displayHeight / 2 - 80, 50, 50)
    Rghost.addAnimation("red1", redAnim)
    Rghost.scale = 0.5;
    ghostG.add(Rghost);

    Bghost = createSprite(634, displayHeight / 2 - 80, 50, 50)
    Bghost.addAnimation("blue1", blueAnim)
    Bghost.scale = 0.5;
    ghostG.add(Bghost);

    Pghost = createSprite(680, displayHeight / 2 - 80, 50, 50)
    Pghost.addAnimation("pink1", pinkAnim)
    Pghost.scale = 0.55;
    ghostG.add(Pghost);

    Oghost = createSprite(720, displayHeight / 2 - 80, 50, 50)
    Oghost.addAnimation("orane1", orangeAnim)
    Oghost.scale = 0.5;
    ghostG.add(Oghost);

    // creating obstacles

    // box obstacles
    o1 = createSprite(655, 120, 100, 100);
    o1.addAnimation("o1", boximg)

    o2 = createSprite(655, 500, 100, 100);
    o2.addAnimation("o2", boximg)

    o7 = createSprite(185, 565, 100, 100);
    o7.addAnimation("o7", boximg)
    o7.scale = 1.3

    o8 = createSprite(185, 65, 100, 100);
    o8.addAnimation("o8", boximg)
    o8.scale = 1.3

    o13 = createSprite(1205, 65);
    o13.addAnimation("o13", boximg);
    o13.scale = 1.3;

    o14 = createSprite(1210, 535);
    o14.addAnimation("o14", boximg);
    o14.scale = 1.3

    //creating blue obstacles

    o3 = createSprite(640, 40, 100, 100);
    o3.addAnimation("o3", Bobstacle)
    o3.scale = 1.5

    o4 = createSprite(675, 620, 100, 100);
    o4.addAnimation("o4", Bobstacle)
    o4.scale = 1.5

    o10 = createSprite(655, 230, 100, 100)
    o10.addAnimation("o10", Bobstacle)
    o10.scale = 0.8

    o11 = createSprite(650, 400, 100, 100)
    o11.addAnimation("o11", Bobstacle)
    o11.scale = 0.8

    // creating green obstacles

    o5 = createSprite(945, 277, 100, 100);
    o5.addAnimation("o5", Gobstacle)
    o5.scale = 1.6

    o6 = createSprite(400, 275, 100, 100);
    o6.addAnimation("o5", Gobstacle)
    o6.scale = 1.6;

    o9 = createSprite(185, 300, 100, 100);
    o9.addAnimation("o9", Gobstacle)
    o9.scale = 1

    o12 = createSprite(1205, 300);
    o12.addAnimation("o12", Gobstacle)
    o12.scale = 1

    // adding obstacles in group
    obstacles.add(o1);
    obstacles.add(o2);
    obstacles.add(o3);
    obstacles.add(o4);
    obstacles.add(o5);
    obstacles.add(o6);
    obstacles.add(o7);
    obstacles.add(o8);
    obstacles.add(o9);
    obstacles.add(o10);
    obstacles.add(o11);
    obstacles.add(o12);
    obstacles.add(o13);
    obstacles.add(o14);

    // creating pills using for loop
    pill()

    // creating logo
    logo = createSprite(650, 310, 100, 100)
    logo.addImage(logo1);

if (gameState == 1){

Rghost.velocityX=-3

}
}


function draw() {

    if (gameState == 0) {

        pacman.visible = false;
        Rghost.visible = false
        Bghost.visible = false;
        Oghost.visible = false;
        Pghost.visible = false;
        o1.visible = false;
        logo.visible = true;

    } else if (gameState == 1) {

        logo.visible = false;
        pacman.visible = true;
        Rghost.visible = true;
        Bghost.visible = true;
        Oghost.visible = true;
        Pghost.visible = true;
        o1.visible = true;
        o2.visible = true;
        o3.visible = true;
        o4.visible = true;
        o5.visible = true;
        o6.visible = true;
        o7.visible = true;
        o8.visible = true;
        o9.visible = true;
        o10.visible = true;
        o11.visible = true;
        o12.visible = true;
        o13.visible = true;
        o14.visible = true;



    }

    background("black");

    //console.log(pillG.length)

    edgeDown.visible = false;
    edgeLeft.visible = false;
    edgeRight.visible = false;
    egdeUp.visible = false;

    if (gameState == 1) {
        // Texting mouseX and mouseY & frameCount
        textSize(20)
        textFont("fantasy")
        fill("white")
        text("MouseX : " + mouseX + " MouseY : " + mouseY + " FrameCount: " + frameCount, displayWidth / 2 - 200, 350)

        //COLLIDING GHOSTS TO OBSTACLES 
        ghostG[0].collide(obstacles);
        ghostG[1].collide(obstacles);
        ghostG[2].collide(obstacles);
        ghostG[3].collide(obstacles);

        //making edges invisible



        //making controls of PAC-MAN

        if (keyDown("d") || keyDown("RIGHT_ARROW")) {

            pacman.x = pacman.x + 10;
            pacman.changeAnimation("p2", pimgr);
        }

        if (keyDown("a") || keyDown("LEFT_ARROW")) {

            pacman.x = pacman.x - 10;
            pacman.changeAnimation("p1", pimgl);
        }

        if (keyDown("s") || keyDown("DOWN_ARROW")) {

            pacman.y = pacman.y + 10;
            pacman.changeAnimation("p3", pimgd);
        }

        if (keyDown("w") || keyDown("UP_ARROW")) {

            pacman.y = pacman.y - 10;
            pacman.changeAnimation("p4", pimgu);
        }

        //colliding sprites

        pacman.collide(obstacles)
        pacman.collide(walls)
        ghostG[0].collide(walls);
        ghostG[1].collide(walls);
        ghostG[2].collide(walls);
        ghostG[3].collide(walls);

        //setting collider

        pacman.setCollider("circle", -72, -98, 65);
        pacman.debug = false;

        // setting depth

        pacman.depth = Rghost.depth + 10;
        pacman.depth = Bghost.depth + 10;
        pacman.depth = Pghost.depth + 10;
        pacman.depth = Oghost.depth + 10;

        //destroying pills when touching pacman

        for (z = 0; z < pillG.length; z++) {
            if (pillG.get(z).isTouching(pacman)) {

                pillG.get(z).destroy()
                score += 50


            }


        }
    }


    checkpoints();    
    drawSprites();
    b1.display();
    

}



function pill() {



    for (var i = 40; i < 620; i = i + 30) {

        pills1 = createSprite(1325, i, 10, 10);
        //  pills1.debug=true;
        pills1.setCollider("circle", -6, -11, 5)
        pills1.addImage(pillimg)
        pillG.add(pills1)
        pills1.scale = 1.3;
    }

    for (var i = 40; i < 670; i = i + 30) {

        pills2 = createSprite(70, i, 10, 10);
        //pills2.debug=true;
        pills2.setCollider("circle", -6, -11, 5)
        pills2.addImage(pillimg)
        pillG.add(pills2)
        pills2.scale = 1.3;
    }



    for (var i = 40; i < 670; i = i + 30) {

        pills3 = createSprite(290, i, 10, 10);
        //  pills3.debug=true;
        pills3.setCollider("circle", -6, -11, 5)
        pills3.addImage(pillimg)
        pillG.add(pills3)
        pills3.scale = 1.3;
    }

    for (var i = 75; i < 620; i = i + 30) {

        pills4 = createSprite(1060, i, 10, 10);
        //  pills4.debug=true;
        pills4.setCollider("circle", -6, -11, 5)
        pills4.addImage(pillimg)
        pillG.add(pills4)
        pills4.scale = 1.3;

    }

    for (var i = 125; i < 580; i = i + 30) {

        pills5 = createSprite(460, i, 10, 10);
        //  pills5.debug=true;
        pills5.setCollider("circle", -6, -11, 5)
        pills5.addImage(pillimg)
        pillG.add(pills5)
        pills5.scale = 1.3;


    }//915,620,1300

    for (var i = 925; i < 1370; i = i + 30) {

        pills6 = createSprite(i, 640, 10, 10);
        pills6.setCollider("circle", -6, -11, 5)
        pills6.addImage(pillimg)
        pillG.add(pills6)
        pills6.scale = 1.3;

    }
    // 840,80,525

    for (var i = 124; i < 570; i += 30) {

        pills7 = createSprite(840, i, 10, 10);
        pills7.setCollider("circle", -6, -11, 5)
        pills7.addImage(pillimg)
        pillG.add(pills7)
        pills7.scale = 1.3;

    }//450,568,840

    for (var i = 330; i < 1180; i += 50) {

        pills8 = createSprite(i, 585, 10, 10);
        pills8.setCollider("circle", -6, -11, 5)
        pills8.addImage(pillimg)
        pillG.add(pills8)
        pills8.scale = 1.3;


    }//475,595,y:90

    for (var i = 320; i < 600; i += 30) {

        pills9 = createSprite(i, 105, 10, 10);
        pills9.setCollider("circle", -6, -11, 5)
        pills9.addImage(pillimg)
        pillG.add(pills9)
        pills9.scale = 1.3;


    }


    for (var i = 745; i < 1025; i += 30) {

        pills10 = createSprite(i, 105, 10, 10);
        pills10.setCollider("circle", -6, -11, 5)
        pills10.addImage(pillimg)
        pillG.add(pills10)
        pills10.scale = 1.3;

    }
    //1085,1295y440

    for (var i = 1085; i < 1300; i += 30) {

        pills11 = createSprite(i, 440, 10, 10);
        pills11.setCollider("circle", -6, -11, 5)
        pills11.addImage(pillimg)
        pillG.add(pills11)
        pills11.scale = 1.3;


    }

    for (var i = 1085; i < 1300; i += 30) {

        pills12 = createSprite(i, 190, 10, 10);
        pills12.setCollider("circle", -6, -11, 5)
        pills12.addImage(pillimg)
        pillG.add(pills12)
        pills12.scale = 1.3;


    }

    for (var i = 95; i < 280; i += 30) {

        pills13 = createSprite(i, 160, 10, 10);
        pills13.setCollider("circle", -6, -11, 5)
        pills13.addImage(pillimg)
        pillG.add(pills13)
        pills13.scale = 1.3;


    }

}

function checkpoints(){

c1 = createSprite(475,300,20,20)

console.log(c1.x+" "+Rghost.x)

if (Rghost.x == c1.x ){

var ran = Math.round(1,2);

if (ran == 1){

Rghost.setVelocity(0,-4)

} else 
if (ran == 2){

Rghost.setVelocity(0,4)

}

}

}

