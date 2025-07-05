let numa = parseInt(prompt("Ingrese el primer número: "))
let operacion = prompt("Ingrese el operador :");
let numb = parseInt(prompt("Ingrese el segundo número: "))
function calculadora(operacion, numa, numb){
    if (operacion == "+") {
        return (numa + numb);
    }

    else if (operacion == "-") {
        return numa - numb;
    }

    else if (operacion == "*") {
        return numa * numb;
    }

    else if (operacion == "/") {
        return numa / numb;
    }
}

let resultado = calculadora(operacion, numa, numb);
console.log(resultado)