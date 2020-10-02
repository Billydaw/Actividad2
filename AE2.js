//Ejercicio 1
let valores = ["Ana",2,"Javi",5,"Roberto",7,"Vanessa",10];

//Ejercicio 2
let dataArray = [3,6,14,21,30];
dataArray.sort((a,b) => a - b);
let low = Math.floor((dataArray.length - 1) / 2);
let high = Math.ceil((dataArray.length - 1) / 2);
let media = (dataArray[low] + dataArray[high]) / 2;
console.log(media);

//Ejercicio 3
let values = [1,4,7,10,12,15];

function findMinimum(values){
   return Math.min.apply(null, values);
}
console.log(findMinimum(values));

//Ejercicio 4
    let numero = 20;
    let valors = [1,2,5,10];
function findGreaterThan(numero,valors){
    
    if (numero > valors){
        return console.log("Cierto");
    }else{
        return console.log("Falso");
    }
}
console.log(findGreaterThan(numero,valors));