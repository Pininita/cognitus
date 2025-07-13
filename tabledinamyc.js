/*eres un dessarrollador de una aplicacion educativa para niños , los masestro rrequieren tablas de multiplicar dinamicas para sus clases 
tablas de multiplicar  dinamicas*/

function edutable(basenumber, limitnumber, type) {
    //se define la tabla
    let ft = `la tabla del ${basenumber} \n`;
    //se define la variuable para almacenar los resultados de la multiplicacion
     let rn = [];
     let par =[];
     //ciclo para insertar los resultados de la mupltiplicavion y sumarlos 
    for (let i = 1; i <= limitnumber; i++) {
           
        
        const fp = basenumber* i;
              //se guarda el gotal de multiplicar los 10 numeros entre el numero base

         ft += (`${basenumber}* ${i} = ${fp}\n`);
         //se insertan en la variaable para almacenar resultadozs
                      rn.push(fp);

        
        //se hace insersion de los pares en los resultados
        if (i %2 ===0 ) {
        par.push(fp)
        }
    }
    //se hace la suma de los resultados tenoiendo encienta los pares nada mas
         const totalpluspar= par.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        //se define el total de limite numdrico permitido
        
             limitnumber = 10;
             //se define el tipo de dato
              type ='all';
// se crea ta tabla dinamicamente
               const dinamyctable  = {
                    ft,
                    totalpluspar,
                    basenumber,
                    limitnumber,
                    type
               };
         return dinamyctable;
            }
        
           
console.log(edutable(5,10,'all'));
