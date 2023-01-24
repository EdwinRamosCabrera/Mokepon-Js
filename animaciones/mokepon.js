let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;


function iniciarJuego(){

    let sectionElegirAtaque = document.getElementById('elegir-ataque');
    sectionElegirAtaque.style.display = 'none';

    let sectionReinicar = document.getElementById('reiniciar');
    sectionReinicar.style.display = 'none';

    let sectionMensajes = document.getElementById('mensajes');
    sectionMensajes.style.display = 'none';

    let botonMascotaJugador = document.getElementById('boton-seleccionar');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);

    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click', ataqueTierra);

    let botonReiniciar = document.getElementById('boton-reiniciar');
    botonReiniciar.addEventListener('click', reiniciarJuego);
}

function seleccionarMascotaJugador(){

    let sectionElegirMascota = document.getElementById('elegir-mascota');
    sectionElegirMascota.style.display = 'none';

    let sectionElegirAtaque = document.getElementById('elegir-ataque');
    sectionElegirAtaque.style.display = 'block'

    let sectionMensajes = document.getElementById('mensajes');
    sectionMensajes.style.display = 'block';

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

    seleccionarMascotaEnemigo();

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
        spanMascotaEnemigo.innerHTML = 'Ratigueya';
    }    
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO';
    seleccionarAtaqueEnemigo();
}

function ataqueAgua(){
    ataqueJugador = 'AGUA';
    seleccionarAtaqueEnemigo();
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA';
    seleccionarAtaqueEnemigo();
}

function seleccionarAtaqueEnemigo(){
    let ataqueAleatorio = aleatorio(1, 3);

    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO';
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA';
    } else {
        ataqueEnemigo = 'TIERRA';
    }

    combate();
  
}

function combate(){
  
    let spanVidaJugador = document.getElementById('span-vidaJugador');
    let spanVidaEnemigo = document.getElementById('span-vidaEnemigo');
    
    if (ataqueJugador == ataqueEnemigo){
        crearMensaje('Empate');
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje('Ganaste');
        vidasEnemigo--;
        spanVidaEnemigo.innerHTML = vidasEnemigo;      
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje('Ganaste');
        vidasEnemigo--;
        spanVidaEnemigo.innerHTML = vidasEnemigo;
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje('Ganaste');
        vidasEnemigo--;
        spanVidaEnemigo.innerHTML = vidasEnemigo;
    } else {
        crearMensaje('Perdiste');
        vidasJugador--;
        spanVidaJugador.innerHTML = vidasJugador;
    }

    revisarVidas();
}

function revisarVidas(){
    if(vidasJugador == 0){
        crearMensajeFinal('LO SIENTO - PERDISTE 😔');
    } else if(vidasEnemigo == 0){
        crearMensajeFinal('FELICIDADES!!! - GANASTE 😉'); 
    }
}

function crearMensaje(resultado){
    let mensajeEncuentros = document.getElementById('mensajes');
    let parrafo = document.createElement('p');

    parrafo.innerHTML = 'Tú mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + ' - ' + resultado ;

    mensajeEncuentros.appendChild(parrafo);
}

function crearMensajeFinal(resultadoFinal){

    let sectionReinicar = document.getElementById('reiniciar');
    sectionReinicar.style.display = 'block';

    let resultadoJuego = document.getElementById('mensajes');
    let parrafoFinal = document.createElement('p');

    parrafoFinal.innerHTML = resultadoFinal;
    resultadoJuego.appendChild(parrafoFinal);

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.disabled = true;

    let botonAgua = document.getElementById('boton-agua');
    botonAgua.disabled = true;

    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.disabled = true;

}

function reiniciarJuego(){
    location.reload();
}

window.addEventListener("load", iniciarJuego);


