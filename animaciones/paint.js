var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 900, 600);
pincel.fill();

pincel.fillStyle = "red"
pincel.fillRect(0, 0, 50, 50);

pincel.fillStyle = "blue"
pincel.fillRect(50, 0, 50, 50);

pincel.fillStyle = "yellow";
pincel.fillRect(100, 0, 50, 50);

var color = "red";
var puedoDibujar = false;

function dibujarCirculo(evento){

    if(puedoDibujar){
        var x = evento.pageX - pantalla.offsetLeft;
        var y = evento.pageY - pantalla.offsetTop;
        pincel.fillStyle = color;
        pincel.beginPath();
        pincel.arc(x, y, 5, 0, 2*Math.PI)
        pincel.fill();
    }   
}

function elegirColor(evento){
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;
    if((x<=50)&&(y<=50)){
        color = "red";
    }else if((x<=100)&&(x>50)&&(y<=50)){
        color = "blue";
    } else if((x<=150)&&(x>100)&&(y<=50)){
        color = "yellow";
    }
}

function habilitarDibujar(){
    puedoDibujar = true;
}

function deshabilitarDibujar(){
    puedoDibujar = false;
}

pantalla.onmousedown = habilitarDibujar;
pantalla.onmouseup = deshabilitarDibujar;
pantalla.onmousemove = dibujarCirculo;
pantalla.oncontextmenu = elegirColor;



