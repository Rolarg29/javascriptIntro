
function isPrimeNumber(num){
    let prime = true
    for (let i = num-1; i > 1; i--) {
        if (num%i === 0){
            prime = false;
            console.log(num + " no es primo");
            break;
        }
    }
    if (prime){
        console.log(num + " es primo");
    }
}

isPrimeNumber(29)


