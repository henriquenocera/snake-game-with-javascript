window.onload = function() {
    var stage = document.querySelector('#stage');
    var ctx = stage.getContext("2d");
    document.addEventListener("keydown", keyPush)
    
    setInterval(game, 90);

    /* Define a Velocidade da Cobra */
    const vel = 1;

    /* Inicia na Velocidade 0*/
    var vx = vy = 0;

    /* Inicia no Ponto x e Ponto Y = 0*/
    var px = 10;
    var py = 15;

    /* Tamanho das Peças definidos com 20*/
    var tp = 20;

    /* Quantidade de Peças = 20 */
    var qp = 20;

    /* Posição Inicial da Maça*/
    var ax = ay = 5;

    /* Rastro da Cobra*/
    var trail = [];
    tail = 5;

    /* A cada 60ms a função será chamada */
    function game() {
        px += vx;
        py += vy;
        if (px < 0) {
            px = qp - 1;
        }
        if (px > qp - 1) {
            px = 0;
        }
        if (py < 0) {
            py = qp - 1;
        }
        if (py > qp - 1) {
            py = 0;
        }

    /* Tabuleiro */    
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, stage.width, stage.height);

    /* Maça */
    ctx.fillStyle = "red";
    ctx.fillRect(ax*tp, ay*tp, tp, tp);


    ctx.fillStyle = "gray";
    for (var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp-1, tp-1);
        if(trail[i].x == px && trail[i].y == py) {
            vx = vy = 0;
            tail = 5;
        }
    }
    trail.push({x:px, y:py})
    while(trail.length > tail) {
        trail.shift();
    }
    if (ax==px && ay==py) {
        tail++;
        ax = Math.floor(Math.random()*qp);
        ay = Math.floor(Math.random()*qp);
    }
}
    function keyPush(event) {
        switch (event.keyCode) {
            case 37: // Left
                vx = -vel;
                vy = 0;
                break;
            case 38: // Up
                vx = 0;
                vy = -vel;
                break;
            case 39: // Right
                vx = vel;
                vy = 0;
                break;
            case 40: // Down
                vx = 0
                vy = vel;
                break;
            default:
                break;
        }

    }
}