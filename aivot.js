function diagrammiFunktio(){
    // etsitään harjoitus2.html sivulta elementti, jonka id=myCanvas
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let x = 40;
    let y = 250;
    //ctx.beginPath()
    ctx.fillText(50, 0, 450);
    ctx.fillText(100, 0, 400);
    ctx.fillText(150, 0, 350);
    ctx.fillText(200, 0, 300);
    ctx.fillText(250, 0, 250);
    ctx.fillText(300, 0, 200);
    ctx.fillText(350, 0, 150);
    ctx.fillText(400, 0, 100);
    ctx.fillText(450, 0, 50);
    ctx.fillText(5.1, 50,500);
    ctx.fillText(10.1, 100,500);
    ctx.fillText(15.1, 150, 500);
    ctx.fillText(20.1, 200, 500);
    ctx.fillText(25.1, 250, 500);
    ctx.fillText(30.1, 300, 500);
    ctx.beginPath()
    for(i=0; i<20; i++){
            ctx.fillText(x, x, y);
            ctx.lineTo(x+=10, y-=10);
    }
    ctx.stroke()};