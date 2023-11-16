
const array1 = [10, "hola", 5, false, 8, "mundo", 2];
let suma = 0;

array1.forEach(sum);
console.log(suma);

function sum(num){
    if (typeof num === 'number'){
        suma += num
    }
}


