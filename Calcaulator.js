/* crear funcion calculadora que reciba 2 numeros mas el operador como string  esto como parametros de esta funcion
validar qus no se divida por 0
mostrar mensaje de error
redondear los resultados a 2 decimales*/
//numero redondeado vacio
let n4 = '';
//fubcion operaciones vbasicas
function cal(n1, n2, op) {
//valida si la operacion no es un simbolo
    if (typeof op != 'number') {
        //opciones si  es un simbolo continuar con los casos
    switch (op) {
        //suma
        case "+":
       n3= n1+n2; 
       n4 = n3.toFixed(2)
      console.log(n4);
    break;
//resta
        case "-":
            n3= n1 - n2; 
            n4 = n3.toFixed(2)
         console.log(n4);
         break;
        //multiplicacion

         case "*":
           n3= n1*n2; 
       n4 = n3.toFixed(2);
    console.log(n4);
         break;
        //division
         case "/":
            //si n2 es igual  a 0
            if (n2 == 0) {
                console.log("This number not divisible for 0");
                
                
            } 
            // si no es igual a 0
            else {
        n3= n1/n2; 
        n4 = n3.toFixed(2);
        console.log(n4);                
            }
    
                
            break;
            //si no entras los numeros de la operacion
        default:
            console.log("please enter numbers for the operation's")
            
            break;
    }
  
    //si el operador es un numero
} else {
 console.log("this data are not operation symbol");
 
}
}
//llamado funcion
cal('+');
