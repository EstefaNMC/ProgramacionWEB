/**NUMERO ES PAR O NO  */
function  par(numero){

    numero=parseInt(prompt("Ingrese un numero."))
    if(numero%2==0){

        alert("El numero "+ numero +"  es par.  ");
        
    }else{

        alert("El numero "+ numero +" es impar.")
    }

}
/**NÚMERO MAYOR  
 * Para dar solucion a este problema se comparan los 3 numeros con cada uno mendiante la funcion if
*/
function NumMayor(num1,num2,num3){

    num1=parseInt(prompt("Ingrese un numero  #1:"));
    num2=parseInt( prompt("Ingrese un numero  #2:"));
    num3=parseInt(prompt("Ingrese un numero  #3:"));

    if(num1 >= num2 && num1>=num3){
        alert("El numero "+ num1+" que corresponde al número uno  ingresado es mayor.");
    }
     if(num2 >=num1 && num2>=num3){
        alert("El numero "+ num2+" que corresponde al número dos ingresado es mayor.");
    }
    if (num3 >=num1 && num3>=num2){
        alert("El numero "+ num3+" que corresponde al número tres ingresado es mayor.");
    }

}
/**ORDENACIÓN DE TRES NÚMEROS 
 * Para dar solución a este problema se toma en cuenta que al ser tres numeros tendra solamente 6 soluciones.
 * 3!= 3*2*1
 * 123
 * 132
 * 213
 * 321
 * 312
 * 123
 */
function ordenar(num1,num2,num3){

    num1=parseInt(prompt("Ingrese un numero  #1:"));
    num2=parseInt( prompt("Ingrese un numero  #2:"));
    num3=parseInt(prompt("Ingrese un numero  #3:"));

    if(num1 >= num2 && num1 >=num3){
        if(num2>num3){

        alert("El numero mayor es: " + num1 +"\nEl numero del medio es:  "+ num2 + "\nEl numero menor es: " + num3);
        
        }else{

        alert("El numero mayor es: " + num1 +"\nEl numero del medio es:  "+ num3 + "\nEl numero menor es:  " + num2);
        }
    }
    else if(num2 >= num1 && num2 >=num3){
        if(num1>num3){

        alert("El numero mayor es: " + num2 +"\nEl numero del medio es:  "+ num1 + "\nEl numero menor es: " + num3);
        
        }else{

        alert("El numero mayor es: " + num2 +"\nEl numero del medio es:  "+ num3 + "\nEl numero menor es:  " + num1);
        }
    }
    else if(num3 >= num1 && num3 >=num2){
        if(num1>num2){

        alert("El numero mayor es: " + num3 +"\nEl numero del medio es:  "+ num1 + "\nEl numero menor es: " + num2);
        
        }else{

        alert("El numero mayor es: " + num3 +"\nEl numero del medio es:  "+ num2+ "\nEl numero menor es:  " + num1);
        }
    }



}
/**NUMERO ES MÚLTIPLO DE OTRO  */
function Multiplo(numer1,numer2){
    
    numer1= parseInt(prompt("Ingrese el primer número."));
    numer2= parseInt(prompt("Ingrese el segundo número."));
    
    var resultado= numer1%numer2;
    

    if(resultado == 0 )
    {
        alert("El numero " + numer1+" es multiplo de "+ numer2);
    }
    else{

        alert("El numero " + numer1+" no es multiplo de "+ numer2);
    }

}
/**AÑO BICIESTO  */
function Biciesto(numero){

    numero= parseInt(prompt("Ingrese un años"));
    

    if(numero%4==0 && numero %100 !=0 || numero%400==0){

        alert("El año "+numero +", es biciesto.");
    }else{

        alert("El año "+numero +", no es biciesto.");
    }


}
/** NOMINA SENCILLA*/
function Nomina(){

    var nombre=prompt("Ingrese su Nombre y Apellido:");
    var horas= parseInt(prompt("Ingrese el número de horas trabajadas:"));
    var hora= parseInt(prompt("Ingrese el valor de hora:"));
    var salario= parseInt(prompt("Ingrese valor salario minimo mensual:"));

    var resul=  hora*horas;
    


    if(resul > salario){

        alert("Nombre: " + nombre + "\nSalario mensual: " + resul);

    }
    else{

        alert("Nombre: " + nombre);
    }



}
/**DESCUENTOS  */
function Descuentos(){
    var numero=parseInt(650000);

    var escritorios= parseFloat(prompt("Número de escritorios a comprar:"));

   var resultado= (numero* escritorios);

   var des1= resultado * 0.9 ;
   var des2 = resultado* 0.8;
   var des3= resultado * 0.6; 
   

    if(escritorios < 5){
        alert("El valor a pagar es: "+ des1) ;
    }
    else if(escritorios >=5 && escritorios<=10 ){
    alert("El valor a pagar es: "+ des2) ;
    }
    else if(escritorios >10){
        alert("El valor a pagar es: "+ des3) ;
    }
}
/**VALOR MATRICULA */
function Matricula(){

    //Pido datos de entrada
    var creditos=parseInt( prompt("Número de credito: "));
    var valorCredito=parseInt(prompt("Ingrese el valor del credito:"));    
    var estrato=parseInt(prompt("Ingrese el estrato del estrudiante"));

    //Calculos
    var Matricula= calcularMatricula(creditos,valorCredito,estrato);
    var Subsidio = calcularSubsidio(estrato);

    //Mostrar datos
    alert("\nCosto de la Matricula: " + Matricula + "\nValor del subsidio: " + Subsidio);

    //subfuncion para calcular el valor de la matricula
    function calcularMatricula(creditos,valorCredito,estrato){

        var vMatricula= 0;
        
        //Calculos
        if(creditos<=20){
            vMatricula= creditos * valorCredito;
        }else{
            vMatricula= 20 * valorCredito +( creditos-20) * valorCredito * 2;
        }         
        var Descuento=0;   
        if(estrato==1){
    
            Descuento= vMatricula*0.8;
        }else if(estrato==2){
            Descuento= vMatricula*0.5;
        }else if(estrato==3){
            Descuento= vMatricula*0.3;
        }  
          
        return vMatricula-Descuento;
    }
    //subfuncion para calcular el subsidio
    function calcularSubsidio(estrato){
    
        //calculos
        var subsidio=0;
            if(estrato==1){
            subsidio= 200000;
        }else if(estrato==2){
            subsidio= 100000;
        }
        return subsidio;
    }
}
/**ENVÍO DE MERCANCÍAS */ //ARREGLAR
function Mercancias(){


    //Perdir datos
    var peso=parseInt(prompt("Ingrese el peso de la mercancia: "));
    var valor=parseInt(prompt("Ingrese el valor de la mercancia: "));
    var lunes=prompt("Es lunes [S]i [N]o: ");
    var tipoPago=prompt("Tipo de pago [E]fectivo [T]arjeta: ");
    

    //Calculos
    var tarifa = calcular(peso);
    var descuento =  calculadest(valor, tarifa);
    var promocion = promociones(lunes, tipoPago,valor,tarifa);


    //Mostrar resultado
    if(promocion > 0){

        alert("Tarifa: "+ tarifa + "\nPromocion: "+ promocion +"\nTotal a pagar: "+ (tarifa-promocion));
        
    }
    else{
        alert("Tarifa: "+ tarifa + "\nDescuento: "+ descuento +"\nTotal a pagar: "+ (tarifa-descuento));

    }
    


        function calcular(peso){

            var  tarifa=0;

            if(peso <100){

                tarifa= 20000;

            }else if(peso >= 100 && peso <= 150){

                tarifa= 25000;

            }else if(peso > 150 && peso <= 200){
                tarifa= 30000;
            }else{
                var num= (peso-200)/10;

                tarifa= 35000 + num* 2000;
            }
          return tarifa;
        }
    

        function calculadest(valor,tarifa){

            var descuento=0;
           

            if(valor >= 300000 && valor <= 600000){

                descuento= tarifa*0.1;


            } else if(valor >600000 && valor <= 1000000){
                descuento= tarifa*0.2;


            }else if(valor >1000000 ){
                descuento= tarifa*0.3;

            }

          return descuento;
        }

        function promociones(lunes, tipoPago,valor,tarifa){

            var promocion = 0 ;

                 if(lunes == "s" ||  lunes == "S" && ( tipoPago == "t" || tipoPago =="T")  ){
                
                promocion= tarifa*0.5;
                
            }else if(tipoPago=="E" || tipoPago=="e" && ( valor > 1000000))
            {
                promocion= tarifa*0.6;
            }
          return promocion;
            

        }
    

}
/**ALMACENES SUCESO S.A */
function Almecenes(){

    /**Pedir datos */
    var cc=prompt("Costo de compra($): ");
    var tp=prompt("Tipo de producto [P]erecedero, [N]o perecedero: "); 
    var tc=prompt("Tipo de conservación [F]rio, [A]mbiente: "); 
    var pc=prompt("Periodo de conservación (días): "); 
    var pa=prompt("Periodo de almacenamiento (días): "); 
    var vol=prompt("Volumen (litros): "); 
    var ma=prompt("Medio de almacenamiento [N]evera, [C]ongelador, [E]estanteria, [G]uacal: "); 

    /**Calculos */


    var ca= calcularAlmace(tp,cc,tc,pc,pa,vol);
    var pdp= calcularPorcentaje(pa);
    var ce= costoExhibicion(tp, ma, ca);

    var vrp= (cc + ca + ce);
    var total= vrp * pdp;
    var vrv= 0;

    if(tp=="p" || tp=="P"){/**Perecedero */
        vrv = total * 1.4;
    }else{/**No perecederos */

        vrv = total * 1.2;
    }
    /**Mostrar resultados */
    alert("****CALCULOS****" + "\nCostos de almacenamiento:  "+ca +"\nPorcentaja de depreciación:  "+ pdp  + "\nCosto de exhibición: "+ ce +"\nValor producto: "+ total + "\nValor venta: "+ vrv  );
    
    function calcularAlmace(tp,cc,tc,pc,pa, vol){


        /***Perecederos */
        if(tp == "p" ||  tp == "P"){
    
            if(tc == "f" ||  tp == "F"){/**Frios */
    
                if(pc<10){
                    return cc *0.05;
                }else{
    
                    return cc * 0.1;
                }
    
            }else{/**Ambiente  */
                if(pa < 20){
    
                    return cc * 0.03;
                }else if (pa>20){
    
                    return cc * 0.1;
    
                }else{
                    return cc * 0.05;
                }
    
            }
        }else{/***No perecederos */
    
            if (vol >= 50){
    
                return cc * 0.1;
    
            }else {
    
                return cc * 0.2;
            }
        }
    
    }
    function calcularPorcentaje(pa){
    
        if(pa < 30){
    
            return 0.95;
        }
        else{
    
            return 0.85;
        }
    
    }
    function costoExhibicion(tp, ma, ca){
    
        if(tp == "p" || tp == "P"){/**Perecederos */
            if(ma == "N" || ma== "n"){ /**Nevera */
    
                return ca*2;
            }else{ /**Congelador */
    
                return ca;
            }
        }else{/**No perecederos */
    
         if(ma == "e" || ma =="E "){/**Estanteria */
    
            return ca *0.05;
         }  else{ /**Guacal */
    
            return cc * 0.07;
        }  
     }
    
    }
}
/**EMPRESA DE TRANSPORTES */
function empresaTransporte(){}

/**SERIE DE NÚMEROS, SUMATORIA Y PROMEDIO */
function serieNumeros(){

}
/**CÁLCULO DEL FACTORIAL DE UN NÚMERO  */
function factroialNumero(){

    var n=parseInt(prompt("Ingrese un numero"));

    alert("El número ingreado fue: "+ n +"\nEl factorial es: " + factorial(n) );
    
}   

function factorial(n){
       var factorial= 1

    for(var i = n; i > 0; i--){

        factorial= factorial * i;
    }
    return factorial;
}
/**SERIE DE TAYLOR */
function serieTylor(){
    
    var terminos=parseInt(prompt("Cuantos terminos desea:"));
    var x = parseInt(prompt("Imgrese el valor de x: "));
    
    var suma=0
    var t;
        
        for( var i =0 ; i<terminos ; i++){

            t= Math.pow(x,i)/factorial(i);
            suma += t;
            
        }
    alert("f(x) = " + suma.toFixed(6));

}
/**SERIE DE TAYLOR MODIFICADA */
function serieTaylorModificada(){

    var termino=parseInt(prompt("Cuantos terminos desea:"));
    var x = parseInt(prompt("Imgrese el valor de x: "));
    
    var suma=0
    var t;
    var signo= 1;
        
        for( var i =0 ; i<termino ; i++){

            t= Math.pow(x,i)/factorial(i)* signo;
            signo *= -1;
            suma += t;
            
        }
    alert("f(x) = " + suma.toFixed(6));


}

/**ECUACIONES CUADRÁTICAS  */
function ecuacionesCuadraticas(){

    var a = parseInt(prompt("Ingrese el valo de a: "));
    var b = parseInt(prompt("Ingrese el valo de b: "));
    var c = parseInt(prompt("Ingrese el valo de c: "));

    var raiz = Math.sqrt(b * b - 4 * a * c) ;
    var x1 = (-b + raiz ) / (2 * a);
    var x2 =  (-b - raiz ) / (2* a);

    alert("x1: " + x1.toFixed(5) + "\nx2: " + x2.toFixed(5));
}

/**SERIE FIBONACCI */
function fibonacci(){

    var fibonacci=parseInt(prompt("CUantos terminos quiere: "));

    var a=0 ;
    var b=1; 
    var c;
    var sumatoria=1; 
        

        for( var i = 2 ; i<= fibonacci ; i++){
            c= a + b;
           
            sumatoria += c;
            a = b;
            b = c;  

        }
        alert(a + " -" + b)
    alert("La sumatoria es :" + sumatoria);



}
/**SERIE FIBONACCI MOdificada*/
function fibonacciModificada(){

    var fibonacci=parseInt(prompt("Cuantos terminos quiere: "));

    var a=0 ;
    var b=1; 
    var c=2;
    var d;
    var sumatoria=3;         

        for( var i = 3 ; i<= fibonacci ; i++){
           d= a + b + c ;

           sumatoria +=d;
           a=b;
           b=c;
           c=d;

        }
        alert(a + " -" + b + "-" + c + "");
    alert("La sumatoria es :" + sumatoria);



}
/**ES PRIMO? */
function primo(){

    var primo= parseInt(prompt("Ingrese un numero:"));

    if(esPrimo(primo)){

        alert("El numero: " + primo + ", si es primo.");
    }
    else{

        alert("El numero: " + primo + ", no es primo.");
    }

}
function esPrimo(primo){

    for(var i = 2 ; i< primo ; i++){

        if(primo % i == 0){
            return false;

        }
        
    }
    return true;
}
/**NÚMEROS PRIMOS */
function numerosPrimos()
{
    var primo= parseInt(prompt("Ingrese un numero:"));
    var conPri= 0;
    var i =1;
    s=0;

    while(conPri < primo )
    { 
        if(esPrimo(i)){

            alert (i + "-");
            conPri ++;
            s += i;
        }
        i++;
    }
    var total = s / primo;
    alert("La suma es: " + s + "\nEl promedio es: " + total);
   
}
/**CALCULO DEL NÚMERO e	 */

function e(){

    var n= parseInt(prompt("Cuantos términos de precision desea: "));

    alert("e = " + ex(n));

        function ex(n){

            var s=0;
            var t;
        
            for( var i= 0 ; i < n ; i++ ){
        
                t= 1 / factorial(i);
                s+= t;
        
            }
            return s;
        }

}


/**CALCULO DEL NÚMERO PI	 */

function calcularpi(){
    var p = parseInt(prompt("Cuantos términos de precisión desea: "))

    alert("Pi = " + pi(p));


    function pi(p){

        var d =1;
        var sig =1;
        var t;
        var s=0;

        for(var i = 1; i <=p ; i++){

            t= 1/d *sig ;
            s+= t;
            d += 2;
            sig *= -1;

        }

        return s* 4;
        
    }
}




/**CALENDARIO DE UN AÑO  */

/**PARES E IMPARES EN UN ARREGLO  */