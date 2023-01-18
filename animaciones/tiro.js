    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");

    function dibujar(evento){
        var x = evento.pageX - pantalla.offsetLeft;
        var y = evento.pageY - pantalla.offsetTop;

        pincel.fillStyle = "blue";
        pincel.beginPath();
        pincel.arc(x, y, 30, 0, 2*Math.PI);
        pincel.fill();
    }

    pantalla.onclick = dibujar;
