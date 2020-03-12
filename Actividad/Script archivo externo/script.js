function mostrarAlerta(){

    window.alert('Hizo click sobre el texto')
}
function hacerclic(){

    document.getElementsByTagName('p')[0].onclick = mostrarAlerta;

}
window.onload=hacerclic;

function clicBoton1(){

    document.getElementById("boton1").onclick = cambiarTitulo;

}
function cambiarTitulo(){

    document.getElementById('titulo').innerHTML ="<h1> Ejemplo JavaScript con Archivo Externo</h1>";

}

function startFunciones(){

    hacerclic();
    clicBoton1();
}
window.onload=startFunciones;