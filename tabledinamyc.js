/*eres un dessarrollador de una aplicacion educativa para niños , los masestro rrequieren tablas de multiplicar dinamicas para sus clases 
tablas de multiplicar  dinamicas*/

function edutable(basenumber, limitnumber, type) {
    //se define la tabla
    let finaltable = `la tabla del ${basenumber}\n`;
    //se define la variuable para almacenar los resultados de la multiplicacion
     let finalresult = [];
     //se degine variable par
     let par =[];
     //ciclo para insertar los resultados de la mupltiplicavion y sumarlos 
    for (let i = 1; i <= limitnumber; i++) {
           
        
        const finalplus = basenumber* i;
              //se guarda el total de multiplicar los 10 numeros entre el numero base

         finaltable += (`${basenumber}* ${i} = ${finalplus} \n`);
         //se insertan en la variable para almacenar resultadozs
                    finalresult.push(finalplus);

        
        //se hace insersion de los pares en los resultados
        if (i %2 ===0 ) {
        par.push(finalplus)
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
                    finaltable,
                    totalpluspar,
                    basenumber,
                    limitnumber,
                    type
               };
               //se regresa la tabla
         return dinamyctable;
            }
      //llam ado edutables  
           
console.log(edutable(5,10,'all'));
