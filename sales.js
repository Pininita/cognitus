/* eres un analista de ventas en una empresa tail  cada dia necesitas generar un reporte automatico para el gerente.
crea una funcion que procese un array de numeros ventas por dia y genere estadostivas completas.
calcular suma tot5al, promedio valor  mayor y menor.
seprar las ventas en categorias altas medias y bajas
identiificar ventas pares e imparrews*/
//crear funcion
function analizesales(sales) {
    //suma total
    const plus = sales.reduce((accumulator, currentValue) => accumulator + currentValue)
         //calculo promedio
const prom = plus / sales.length;
finalprom = prom.toFixed(2)
//maximo y minimo en ventas
maxsales = Math.max(...sales);
mminsales = Math.min(...sales);
//precios altos
const highs = sales.filter(
num => num >1000
);

//precios medio
const mediums = sales.filter(
num => num >500 -1000
)
//precio en el bajo
const lows = sales.filter (
    num => num <500
);
//precios par e impar
let par = [];
let impar = [];

for (let i = 0; i < sales.length; i++) {
    const vf = sales[i]; 

if (vf %2===0) {
par.push(vf);
}    
else  {
impar.push(vf);
}
}
//objeto informe tptal
const salesinfo = [ 
    summary= {plus, finalprom, maxsales,mminsales},
    category = {highs, mediums,lows},
    standard = {par, impar}

]
console.log(salesinfo);

}
//llamado funcion analizesales
analizesales([11,150,120, 500, 10000, 2000, 1200])