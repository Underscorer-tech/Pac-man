class button {

    constructor() {

            this.play = createImg("img/play.png");
            this.stop = createImg('img/mute.png');
            this.playG = createImg('img/playg.png')
            this.pause = createImg('img/pause.png')
        

        if (gameState == 0) {

            this.start = createImg("img/start.png")

        }


    }

    display() {

if (gameState !== 1){

    this.play.hide();
    this.stop.hide();
    this.playG.hide(); 
    this.pause.hide();


}
if (gameState !== 0){

this.start.hide()

}

            this.play.position(1025, 20);
            this.stop.position(1018, 13);
            this.playG.position(950, 20);
            this.pause.position(950, 20);
        

        if (gameState == 0) {

            this.start.position(width / 2 - 135, height / 13-25)
            this.start.show();
             this.start.mousePressed(()=>{

            gameState=1;

             })

        }



        if (gameState == 1) {
            if (stateofsound == 0) {

                this.play.mousePressed(() => {

                    pacSound.play();
                    pacSound.loop();
                    stateofsound = 1;

                })

            }


            if (stateofsound == 1) {

                this.stop.mousePressed(() => {

                    pacSound.stop();
                    stateofsound = 0;

                })

            }

            if (stateofsound == 0) {

                this.stop.hide();
                this.play.show();

            }

            if (stateofsound == 1) {

                this.play.hide();
                this.stop.show();

            }//
        }
    }

}