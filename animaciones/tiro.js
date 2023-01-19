/*     
    // # Dibujando un circulo al hacer click en la pantalla
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

    // # Dibujando un circulo de ida y vuelta
    var pizarra = document.querySelector("canvas");
    var tiza = pizarra.getContext("2d");
    tiza.fillStyle = "blue";
    tiza.fillRect(0, 0, 900, 500);

    function disenharCirculo(x, y, radio){
        tiza.fillStyle = "red";
        tiza.beginPath();
        tiza.arc(x, y, radio, 0, 2*Math.PI);
        tiza.fill();
        }

    function limpiarPantalla(){
        tiza.clearRect(0, 0 , 900, 500)
    }

    var x=0;
    var sentido = 1;

    function actualizarPantalla(){

        limpiarPantalla();

        if(x>300){
            sentido = -1;
        } else if (x<0){
            sentido = 1;
        }

        disenharCirculo(x, 20, 5);

        x = x + sentido;
        
    }

    setInterval(actualizarPantalla, 10);

*/

    // Creando un objetivo 

    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "lightgrey"
    pincel.fillRect(0, 0, 900, 600);

    var radio = 30;
    var xAleatorio;
    var yAleatorio;

    function disenharBlanco(x, y, radio, color){
        pincel.fillStyle = color;
        pincel.beginPath();
        pincel.arc(x, y, radio, 0, 2*Math.PI);
        pincel.fill();
    }

    function limpiarPantalla(){
        pincel.clearRect(0, 0, 900, 600);
    }

    function disenharObjetivo(x, y){
        disenharBlanco(x, y, radio + 20, "red");
        disenharBlanco(x, y, radio + 10, "white");
        disenharBlanco(x, y, radio, "red");
    }

    function sortearPosicion(minimo, maximo){
        return Math.floor(Math.random()*(maximo - minimo) + minimo);
    }

    function actualizarPantalla(){
        limpiarPantalla();
        xAleatorio = sortearPosicion(508, 1411);
        yAleatorio = sortearPosicion(216, 822);
        disenharObjetivo(xAleatorio, yAleatorio);
        console.log(xAleatorio, yAleatorio);
    }

   setInterval(actualizarPantalla, 1000);

    function disparar(evento){
        var x = evento.pageX - 508;
        var y = evento.pageY - 218;

        if((x < xAleatorio + radio) &&
            (x > xAleatorio - radio) &&
            (y < yAleatorio + radio) &&
            (y > yAleatorio - radio)){
            alert("Tiro Certero");
        } else{

            alert(" No acertaste " + " tu tiro fue " + x + " y " + y)
        }
    }

    pantalla.onclick = disparar;




