/**Realizado por Estefania Natalie Moreno Corrales */
/**PARA VISUALIZAR EL ARCHIVO DE LAS CONSULTAS ABRA AQUI:
    https://github.com/EstefaNMC/ProgramacionWEB/tree/master/Parcial*/

function validar(){

    var  nombre,apellidos,fecha,perfil, correo, telefono,genero,direcciones,file,expresion;
    fecha= document.getElementById("fecha").value;
    perfil= document.getElementById("perfil").value;
    nombre= document.getElementById("nombre").value;
    apellidos= document.getElementById("apellidos").value;
    correo  = document.getElementById("correo").value;
    telefono= document.getElementById("telefono").value;
    genero= document.getElementById("genero").value;
    direcciones= document.getElementById("direcciones").value;
    file= document.getElementById("file").value;

    /**Debe haber un caracter, después un @, otravez caracter, por ultimo el punto */
    expresion = /\w+@\w+\.+[a-z]/;
   


    if(nombre=== ""  || apellidos=== "" || fecha=== "" || perfil=== "" || correo=== "" || telefono=== ""|| genero=== "" || direcciones=== "" || file=== ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(nombre.length > 30){
        alert("El nombre es muy largo");
        return false;
    }
   
    else if(apellidos.length > 100){
        alert("Los apellidos son muy largos");
        return false;
    }
     
    else if(correo.length > 80){
        alert("El correo es muy largo");
        return false;
    }
    else if(!expresion.test(correo)){
        alert("El correo no es valido");
        return false;
    }
    else if(perfil.length > 250){
        alert("El perfil es muy largo");
        return false;
    }
    else if(telefono.length > 10){
        alert("El telefono es muy largo");
        return false;
    }
    else if(isNaN(telefono)){
        alert("El telefono ingresado no es un número");
        return false;
    }else if ( genero == null || genero == 0 ) {
        return false;
    }
    else if(direcciones.length > 60){
        alert("La direccion es muy larga");
        return false;
    }
    /**
    localStorage.setItem("fecha",fecha);
    localStorage.setItem("perfil",perfil);
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellidos",apellidos);
    localStorage.setItem("correo",correo);
    localStorage.setItem("telefono",telefono);
    localStorage.setItem("genero",genero);
    localStorage.setItem("direcciones", direcciones);
    localStorage.setItem("file",file);
    */
   
}
var gerData= function(){

    var fecha= document.getElementById("fecha").value;
    var perfil= document.getElementById("perfil").value;
    var nombre= document.getElementById("nombre").value;
    var apellidos= document.getElementById("apellidos").value;
    var correo  = document.getElementById("correo").value;
    var telefono= document.getElementById("telefono").value;
    var genero= document.getElementById("genero").value;
    var direcciones= document.getElementById("direcciones").value;
    var file= document.getElementById("file").value;

    console.log("Fecha: " + fecha +"<br>"+"Perfil: "+ perfil +"<br>"+"Nombre: "+ nombre +"<br>"+"Apellidos: " 
   + apellidos +"<br>"+ "Correo:" + correo +"<br>"+ "Telefono:" + telefono +"<br>"  + "Genero" +genero +"<br>"+ "Dirección" + direcciones +"<br>"+ "File:" + file +"<br>"); 
}

$('#fecha').change(e => {
    var today = new Date()
    var fecha = new Date(e.target.value.replace(/-/g,'/'))
    var edad = today.getFullYear() - fecha.getFullYear()
    var differenceMonths = today.getMonth() - fecha.getMonth()
    if ( differenceMonths < 0 || (differenceMonths === 0 && today.getDate() < fecha.getDate())) {
      edad--
    }
    $('#edad').val(edad)
  })