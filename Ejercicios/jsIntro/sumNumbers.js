

const array1 = [10, "hello", 5, true, 8];
let sum = 0;

for (let x of array1) {
    if (typeof x === "number")
    sum += x
}

console.log(sum)