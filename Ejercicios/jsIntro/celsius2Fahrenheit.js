
//const celsius2Fahrenheit = (celsius) => (celsius * 9/5) + 32;

const arrayCelsius = [30, 56, 2, 87]

//const convertArrayToFahrenheit = (array) => array.map((element) => celsius2Fahrenheit(element)) //more explained
//const convertArrayToFahrenheit = (array) => array.map(celsius2Fahrenheit) //more simple
const convertArrayToFahrenheit = (array) => array.map((celsius) => (celsius * 9/5) + 32) //anonymous function


console.log(arrayCelsius)
console.log(convertArrayToFahrenheit(arrayCelsius));