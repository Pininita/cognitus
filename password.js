/*Crea una funcion  que valide si una contraseña es segura segun los critarios de la seguridad bsncarias

minimo 8 caracteres
almenos una lretra mayuscula.
al menos una minuscula*
al menos un numero.
al me os un caracyers especial*/

//fyubcion saber si contraseña es segura .
function pass(p) {
// vaida si la contraseña es corta.
     if(p.length <=8) {
          return ("necesitas una contraseña larga");
     }
    // vaida si hay letras minusculas.

if  (!/[a-z]/.test(p)) {
            return ("la contraseña no tiene letras minusculas");
}  
     // vaida si hay letras mayusculas.
 if (!/[A-Z]/.test(p)) {
            return("la contraseña no tiene letras mayusculas");
}

// vaida si hay numeros.

    if (!/[\d]/.test(p)) {
       return("la contraseña no tiene numeros");
            }
// vaida si hay caracteres especiales.

    if (/^[a-zA-Z0-9]*$/.test(p)){
    return ("la contraseña no caracteres especiales");
    }  
    // vaida si hay contraseña correcta.
{
    return("contraseña creada exitosamente y es segura")
    }
        
}

//llamado funcion en console log

     console.log(pass("lioneKKKKK12&"));