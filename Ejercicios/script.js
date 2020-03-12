//Funcion para calcular los milisegundos que han transcurrido desde el 2020-01-01 hasta la fecha actual
function mili(){

    setInterval(function(){
    // declaro una variable de tipo Date donde instacion la fecha desde la que quiero calcular los milisegundos
    var tiempo1 = new Date(2020, 01, 01, 0, 0, 0, 0);
    // declaro una nueva variable 
    var tiempo2 = new Date();
    //resto la variable del tiempo 1 con la del tiempo 2
    var dif = tiempo1.getTime() - tiempo2.getTime();

    document.getElementById("hola").innerHTML=Math.abs(dif);
},000);
}
mili();

//Fucion para leer una cadena de tipo texto y devuelva el valor de dicha cadena
function ContarCaracteres(cad){
    document.getElementById("cadena").innerHTML = cad.value.length+' caracteres';
}
ContarCaracteres();

//Funcion para calcular la diagonal de una pantalla
function diagonal() 
{
    //variable para obtener el ancho de una ventana
    var ancho = window.innerWidth;
    //varible para obtener el alto de la ventana
    var alto =  window.innerHeight;
    //Operacion para calcular la diagonal de una cvnetana web
    var diag = Math.sqrt( (Math.pow(ancho, 2) + Math.pow(alto, 2)) );
    document.getElementById("diago").innerHTML = "<strong>Tamaño de la ventana: " + ancho + " x " + alto + '</strong><br> Diagonal: ' + diag;
}
diagonal();

//Funcion para imprimir una ventana dentro de
function window1()
{
 
    myWindow=window.open("", "primerPunto", "width=500,height=500" );
    myWindow.document.write("<html>");
    myWindow.document.write("<head>");
    myWindow.document.write("<title> Primer Punto </title>");
    myWindow.document.write("</head>");
    myWindow.document.write("<body>");
    myWindow.document.write("<center> <h3> MILISEGUNDOS RECORRIDOS</h3>");
    myWindow.document.write("<p>Los milisegundos recorridos desde el 2020-01-01 hasta la fecha actual son:</p>");
    myWindow.document.write("<p id='hola'></p></center>");
    myWindow.document.write("<script src='script.js'></script>");
    myWindow.document.write("</body>");
    myWindow.document.write("</html>");
}

function window2()
{
 
    myWindow=window.open("", "segundoPunto", "width=500,height=500" );
    myWindow.document.write("<html>");
    myWindow.document.write("<head>");
    myWindow.document.write("<title> Segundo Punto </title>");
    myWindow.document.write("</head>");
    myWindow.document.write("<body>");
    myWindow.document.write("<center> <h3> LONGITUD DE UNA CADENA DE CARACTERES</h3>");
    myWindow.document.write('<input name="message" onkeyup="ContarCaracteres(this);" ></input>');
    myWindow.document.write("<p id='cadena'>0 caracteres.</p></center>");
    myWindow.document.write("<script src='script.js'></script>");
    myWindow.document.write("</body>");
    myWindow.document.write("</html>");
}

function window3()
{
 
    myWindow=window.open("", "tercerPunto", "width=500,height=500" );
    myWindow.document.write("<html>");
    myWindow.document.write("<head>");
    myWindow.document.write("<title> Tercer Punto</title>");
    myWindow.document.write("</head>");
    myWindow.document.write("<body>");
    myWindow.document.write("<center> <h3>DIAGONAL DE LA PANTALLA</h3>");
    myWindow.document.write("<button onclick='diagonal()'>Diagonal pantalla</button>");
    myWindow.document.write("<p id='diago'></p></center>");
    myWindow.document.write("<script src='script.js'></script>");
    myWindow.document.write("</body>");
    myWindow.document.write("</html>");
}

function window4()
{
 
    mywindow=window.open("", "cuartoPunto", "width=500,height=500" );
    mywindow.document.write("<html>");
    mywindow.document.write("<head>");
    mywindow.document.write("<title> Cuarto Punto </title>");
    mywindow.document.write("</head>");
    mywindow.document.write("<body>");
    mywindow.document.write("<style>");
    mywindow.document.write("body { background-color: gray; }");
    mywindow.document.write("p { color: white;  font: bold 250% monospace;}");
    mywindow.document.write("h1{  font: oblique bold 350% cursive;}");
    mywindow.document.write("</style>");
    mywindow.document.write("<center>");
    mywindow.document.write("<h1>Modificaciones del objeto Document</h1>");
    mywindow.document.write("<p id='color'>Texto blanco.</p></center>");
    mywindow.document.write("<script src='script.js'></script>");
    mywindow.document.write("</body>");
    mywindow.document.write("</html>");
}