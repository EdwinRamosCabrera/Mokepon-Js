let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-seleccionar');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);

    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click', ataqueTierra);


}

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge');
    let inputRatigueya = document.getElementById('ratigueya');
    let inputCapipepo = document.getElementById('capipepo');
    let spanMascotaJugador = document.getElementById('span-MascotaJugador')

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge';
    } else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo';
    } else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }

    seleccionarMascotaEnemigo;

}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function seleccionarMascotaEnemigo(){
    let mascotaEnemigo = aleatorio(1, 3);
    let spanMascotaEnemigo = document.getElementById('span-MascotaEnemigo');

    if(mascotaEnemigo == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge';
    } else if(mascotaEnemigo == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo';
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }    
}

function ataqueFuego(){
    ataqueJugador = 'fuego';
    seleccionarAtaqueEnemigo();
}

function ataqueAgua(){
    ataqueJugador = 'agua';
    seleccionarAtaqueEnemigo();
}

function ataqueTierra(){
    ataqueJugador = 'tierra';
    seleccionarAtaqueEnemigo();
}

function seleccionarAtaqueEnemigo(){
    let ataqueAleatorio = aleatorio(1, 3);

    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'fuego';
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'agua';
    } else {
        ataqueEnemigo = 'tierra';
    }

    combate();
    console.log(ataqueEnemigo);
    console.log(ataqueJugador);
}

function combate(){
    let resultadoCombate;
    let spanVidaJugador = document.getElementById('span-vidaJugador');
    let spanVidaEnemigo = document.getElementById('span-VidaEnemigo');
    let spanResultado = document.getElementById('resultado-combate');

    if (ataqueJugador == ataqueEnemigo){
        resultadoCombate = 'Empate';
        spanResultado.innerHTML = resultadoCombate;

    } else if(ataqueJugador == 'fuego' && ataqueEnemigo == 'tierra'){
        resultadoCombate = 'Ganaste';
        vidasEnemigo--;
        spanVidaEnemigo.innerHTML = vidasEnemigo;
        spanResultado.innerHTML = resultadoCombate;

        
    } else if(ataqueJugador == 'agua' && ataqueEnemigo == 'fuego'){
        resultadoCombate = 'Ganaste';
        vidasEnemigo--;
        spanVidaEnemigo.innerHTML = vidasEnemigo;
        spanResultado.innerHTML = resultadoCombate;

    } else if(ataqueJugador == 'tierra' && ataqueEnemigo == 'agua'){
        resultadoCombate = 'Ganaste';
        vidasEnemigo--;
        spanVidaEnemigo.innerHTML = vidasEnemigo;
        spanResultado.innerHTML = resultadoCombate;

    } else {
        resultadoCombate = 'Perdiste'
        vidasJugador--;
        spanVidaJugador.innerHTML = vidasJugador;
        spanResultado.innerHTML = resultadoCombate;
    }
}


window.addEventListener("load", iniciarJuego);


