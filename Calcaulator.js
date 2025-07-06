/* crear funcion calculadora que reciba 2 numeros mas el operador como string  esto como parametros de esta funcion
validar qus no se divida por 0
mostrar mensaje de error
redondear los resultados a 2 decimales*/

let n4 = '';
function cal(n1, n2, op) {

    if (typeof op != 'number') {
    switch (op) {
        case "+":
       n3= n1+n2; 
       n4 = n3.toFixed(2)
console.log(n4);
              
            
            break;

        case "-":
 
           n3= n1 - n2; 
            n4 = n3.toFixed(2)
console.log(n4);
         break;
        
         case "*":
           n3= n1*n2; 
       n4 = n3.toFixed(2);
    console.log(n4);
         break;
        
         case "/":
            if (n2 == 0) {
                console.log("This number not divisible for 0");
                
                
            } else {
        n3= n1/n2; 
        n4 = n3.toFixed(2);
        console.log(n4);                
            }
    
                
            break;
        default:
            console.log("please enter numbers for the operation's")
            
            break;
    }
  
    
} else {
 console.log("this data are not operation symbol");
 
}
}

cal('+');
