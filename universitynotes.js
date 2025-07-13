/*cree una funcion que procese las calificaciones de ub estudiante y determine su estado academico 
calkcular promedio academico
determinar la calificacion ABCDF
Identificar si esta en rieago academico
sugerir acciones de mejora.*/
//funcion calculo propmedio y la nota y sugerencias
  
function studenprom(records, name) {
  //se suma las notas

 const plusrecords = records.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
 //se divide la sumatoria por la cantidad de notas y ahi da el poeromedio

   const prom = plusrecords/records.length;
   //el switch mediante true evalua cual de los casos es verdadero y  muestra el mensaje segun ek quew encontro real
    switch (true) {
        //caso 1 aprobado saco a
        case  (prom >= 90 && prom <=100):
          return (`${name} sacaste A, felicidades cumpliste con los logros no tienes riesgo academico alto aun asi sigue estudiando lo que no comprendas`);
         // caso 2 apribado saco b  debi algunas dificultades
          case  (prom >= 80 && prom <=89):
            return(`${name} sacaste B, aprobaste la mayoria de los logros tu riesgo academico del 20 al 11 % un poco alto; pero sigue asi no te rindas`);
            //caso 3 sacaste c apenas  pasaste
            case (prom >= 70 && prom <=79):
           return(`${name} Sacaste C,  Pilas es aceptable pero  ahi riesgo de reprobar del 30% pon mas cuidado en tus lecciones`);
        //caso 4: sacaste d no pasaste puedes recuperar atiempo
            case  (prom >= 60 && prom <=69):
            return(`${name}Sacaate D, reprobaste alguna materia, te recomiendo a empezar a estudiar mas matematicas u otra materia que se te dificulte`);
         // reprobaste todo toca repetior desde 0 sin oportunidad de hacerlo de nuevo
           default :
            return (`${name} Sacaste F, lamentablemente tienes que hacer actividades de recuperacion riesgo academico 100%`);
        }
}
//llamado studenprom
console.log(studenprom([100,40,80,90,95,96], "juan jose",));
