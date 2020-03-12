let pelota = document.getElementById("pelota");
let velocidad = 30;
let mTop = 0;
let mLeft= 0;

document.addEventListener("keydown", function(e){

    if(e.keyCode == "39"){
        moverDerecha();
    }

    if(e.keyCode == "37"){
        moverIzquierda();
    }

    if(e.keyCode == "38"){
        moverArriba();
    }

    if(e.keyCode == "40"){
        moverAbajo();
    }

})

function moverDerecha(){

    mLeft += velocidad;
    pelota.style.marginLeft = mLeft +"px";

}

function moverIzquierda(){
    mLeft-= velocidad;
    pelota.style.marginLeft = mLeft +"px";
}

function moverArriba(){

    mTop -= velocidad;
    pelota.style.marginTop = mTop +"px";

}

function moverAbajo(){

    mTop += velocidad;
    pelota.style.marginTop = mTop +"px";

}