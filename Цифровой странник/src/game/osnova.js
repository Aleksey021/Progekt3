var canvas 	= document.getElementById( 'game' );
var context = canvas.getContext( '2d' );


var player ={x:935,y:900,del:4};
var boss =[];
var fire0 =[];
var fire1=[];
var fire2=[];
var vrag1 =[];
var vrag2=[];
var expl=[];
var timer=0;

var playerimg = new  Image();
playerimg.src = 'player/redfighter0005.png';

var fire0img = new Image();
fire0img.src ='images/Fire0.png';

var fire1img = new Image();
fire1img.src ='images/Fire1.png';

var fire2img = new Image();
fire2img.src ='images/Fire2.png';

var vrag1img =[];
//document.getElementById(vrag1img);
//vrag1img.src = 'images/ships/ship1.png';


//new Image();
//vrag2img.src = 'images/ships/ship2.png';

var bossimg = new Image();
bossimg.src ='images/ships/Boss.png';

var explimg 	= new Image();
explimg.src = 'images/Tile.png';

var fonimg = new Image();
fonimg.src = 'y90h9Aylqw4.jpg';

//fonimg.getElementsByClassName('stile2.2');

window.onmousemove =function(event) {
    player.x = event.pageX*1.56;
};

fonimg.onload = function () {
game();
};


function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var t =getRandomInRange(0, 50);
var p =getRandomInRange(0, 50);
var q = t+p;
var vrag2img = q;

for(i in vrag1){
    vrag1img[i] = getRandomInRange(0, 100)
}


function game() {
    update();
    render();
    requestAnimFrame(game);
}


function update() {
    timer++;

    if (timer % 50 == 0) {
        vrag1.push({
            x: Math.random() * 1870,
            y: -100,
            dx: Math.random() * 2 - 4,
            dy: Math.random() * 0.5 +0.5 ,
            del: 2
        })
    }
    if (timer % 1000 == 0) {
        vrag2.push({
            x: Math.random() * 1870,
            y: -150,
            dx: Math.random() * 2 - 4,
            dy: Math.random() * 0.5 +0.5 ,
            del: 2
        })
    }
    if (timer % 5000 ==0) {
        boss.push({
            x: Math.random() * 1870,
            y: -1050,
            dx: Math.random() * 2 - 4,
            dy: Math.random() * 0.5 +0.5 ,
            del: 201
        })
    }

    for (i in fire0) {
        fire0[i].x = fire0[i].x + fire0[i].dx;
        fire0[i].y = fire0[i].y + fire0[i].dy;


        if (fire0[i].y <= -100) {
            fire0.splice(i, 1)
        }
    }
//if (window.onmousedown) {
    if (timer % 50 == 0) {
        fire0.push({x: player.x + 10, y: player.y, dx: 0, dy: -20});
    }
//}

    for (i in expl) {
        expl[i].animx=expl[i].animx+1.5;
        if (expl[i].animx>7) {expl[i].animy++; expl[i].animx=0}
        if (expl[i].animy>7)
            expl.splice(i,1);}


    vrag1img[timer-1 ] = getRandomInRange(0, 99);



    for (i in vrag1) {
        //if (timer % 50 == 0) {
       // vrag1img[timer] = getRandomInRange(0, 99);//}

        vrag1[i].x = vrag1[i].x + vrag1[i].dx;
        vrag1[i].y = vrag1[i].y + vrag1[i].dy;

        if (vrag1[i].x >= 1940 || vrag1[i].x < -140) {
            vrag1[i].dx = -vrag1[i].dx
        }
        if (vrag1[i].y >= 1100) {
            vrag1.splice(i, 1)
        }

        for (j in fire0) {

            if (Math.abs(vrag1[i].x + 35 - fire0[j].x - 35+80) < 70 && Math.abs(vrag1[i].y - fire0[j].y+30) < 35) {
                //произошло столкновение

                //спавн взрыва
                expl.push({x:vrag1[i].x-35+50,y:vrag1[i].y-35+30,animx:0,animy:0});

                //помечаем на удаление
                vrag1[i].del = vrag1[i].del-1;
                fire0.splice(j, 1);if (vrag1[i].del==1)break;
            }
        }
        //удаляем vrag1
        if (vrag1[i].del == 1) vrag1.splice(i, 1);


        /*for (l in fire1) {
            fire1[l].x = fire1[l].x + fire1[l].dx;
            fire1[l].y = fire1[l].y + fire1[l].dy;


            if (fire1[l].y >= 1100) {
                fire1.splice(l, 1)
            }
        }*/

        /*if (timer % (Math.floor(Math.random()*100+50)) == 0) {
            fire1.push({x: vrag1[i].x + 10+80, y: vrag1[i].y+30, dx: 0, dy: 3});
        }*/
    }

    for (j in vrag1) {

        if (Math.abs(player.x + 35  - vrag1[j].x - 35) < 75 && Math.abs(player.y - vrag1[j].y+100) < 75) {
            //произошло столкновение

            //спавн взрыва
            //expl.push({x:player.x-75,y:player.y,animx:0,animy:0});

            //помечаем на удаление
            player.del = player.del-1;
            vrag1.splice(j, 1);
        }
    }
    //удаляем player
   // if (player.del == 1){player.splice();}

    for (i in vrag2) {


        vrag2[i].x = vrag2[i].x + vrag2[i].dx;
        vrag2[i].y = vrag2[i].y + vrag2[i].dy;

        if (vrag2[i].x >= 1940 || vrag2[i].x < -140) {
            vrag2[i].dx = -vrag2[i].dx
        }
        if (vrag2[i].y >= 1100) {
            vrag2.splice(i, 1)
        }

        for (j in fire0) {

            if (Math.abs(vrag2[i].x + 95 - fire0[j].x - 35+80) < 70 && Math.abs(vrag2[i].y - fire0[j].y+30) < 35) {
                //произошло столкновение

                //спавн взрыва
                expl.push({x:vrag2[i].x-35+80,y:vrag2[i].y-35+30,animx:0,animy:0});

                //помечаем на удаление
                vrag2[i].del = vrag2[i].del-1;
                fire0.splice(j, 1);if (vrag2[i].del==1)break;
            }
        }
        //удаляем vrag2
        if (vrag2[i].del == 1) {vrag2.splice(i, 1);
        p = getRandomInRange(0, 50);
        t = getRandomInRange(0, 50);
        q = p + t;
        vrag2img = q;
        }


       /* for (l in fire2) {
            fire2[l].x = fire2[l].x + fire2[l].dx;
            fire2[l].y = fire2[l].y + fire2[l].dy;


            if (fire2[l].y >= 1100) {
                fire2.splice(l, 1)
            }
        }

        if (timer % (Math.floor(Math.random()*100+50)) == 0) {
            fire2.push({x: vrag2[i].x + 10+80, y: vrag2[i].y+30, dx:(player.x-vrag2[i].x)*0.01, dy: 5});
        }*/
    }

    for (j in vrag2) {

        if (Math.abs(player.x + 35  - vrag2[j].x - 35) < 75 && Math.abs(player.y - vrag2[j].y+100) < 75) {
            //произошло столкновение

            //спавн взрыва
            //expl.push({x:player.x-75,y:player.y,animx:0,animy:0});

            //помечаем на удаление
            player.del = player.del-1;
            vrag2.splice(j, 1);
        }
    }


    /*for (i in boss) {
        boss[i].x = boss[i].x + boss[i].dx;
        boss[i].y = boss[i].y + boss[i].dy;

        if (boss[i].x >= 1340 || boss[i].x < -340) {
            boss[i].dx = -boss[i].dx
        }
        if (boss[i].y >= -200) {
            boss[i].dy = 0
        }

        for (j in fire0) {

            if (Math.abs(boss[i].x + 35 - fire0[j].x - 35+435) < 400 && Math.abs(boss[i].y - fire0[j].y+30) < 400) {
                //произошло столкновение

                //спавн взрыва
                expl.push({x:boss[i].x-35+400,y:boss[i].y-35+400,animx:0,animy:0});

                //помечаем на удаление
                boss[i].del = boss[i].del-1;
                fire0.splice(j, 1);if (boss[i].del==1)break;
            }
        }
        //удаляем vrag1
        if (boss[i].del == 1) boss.splice(i, 1);


        for (l in fire1) {
            fire1[l].x = fire1[l].x + fire1[l].dx;
            fire1[l].y = fire1[l].y + fire1[l].dy;


            if (fire1[l].y >= 1100) {
                fire1.splice(l, 1)
            }
        }

        if (timer % (Math.floor(Math.random()*100+50)) == 0) {
            fire1.push({x: boss[i].x + 10+435, y: boss[i].y+30+400, dx: 0, dy: 3});
        }

        for (l in fire2) {
            fire2[l].x = fire2[l].x + fire2[l].dx;
            fire2[l].y = fire2[l].y + fire2[l].dy;


            if (fire2[l].y >= 1100) {
                fire2.splice(l, 1)
            }
        }

        if (timer % (Math.floor(Math.random()*100+50)) == 0) {
            fire2.push({x: boss[i].x + 10+250, y: boss[i].y+430, dx:(player.x-boss[i].x)*0.01, dy: 5});
        }

        for (l in fire2) {
            fire2[l].x = fire2[l].x + fire2[l].dx;
            fire2[l].y = fire2[l].y + fire2[l].dy;


            if (fire2[l].y >= 1100) {
                fire2.splice(l, 1)
            }
        }

        if (timer % (Math.floor(Math.random()*100+50)) == 0) {
            fire2.push({x: boss[i].x + 10+620, y: boss[i].y+430, dx:(player.x-boss[i].x)*0.01, dy: 5});
        }
    }*/


}

function render() {
    context.clearRect(0, 0, 1870, 1100);
    context.drawImage(fonimg,0,0,1870,1100);
    context.drawImage(playerimg,player.x-130,player.y,150,150);
   // for (i in boss){context.drawImage(bossimg,boss[i].x,boss[i].y,800,800)}
    for (i in vrag1){context.fillText(vrag1img[i],vrag1[i].x,vrag1[i].y,200);
        context.font = "64px Footlight MT Light";}
    for (i in vrag2){context.fillText(vrag2img,vrag2[i].x,vrag2[i].y,200);
        context.font = "64px Footlight MT Light";}
    for (i in fire0) context.drawImage(fire0img, fire0[i].x-80, fire0[i].y-30, 30, 70);
    //for (i in fire1) context.drawImage(fire1img, fire1[i].x-80, fire1[i].y-30, 30, 70);
    //for (i in fire2) context.drawImage(fire2img, fire2[i].x-80, fire2[i].y-30, 50, 100);
    for (i in expl)
        context.drawImage(explimg, 256*Math.floor(expl[i].animx),256*Math.floor(expl[i].animy),256,256, expl[i].x, expl[i].y, 100, 100);
    context.fillText((t+"+"+p), 20, 70, 500);
    context.font = "64px Footlight MT Light";
}


var requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 20);
        };
})();
