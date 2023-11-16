const without = (array, ...args) => {
    return array.filter((element) => !args.includes(element))
    }
    const data = [1, 2, 3, 1, 2];
    console.log(without(data, 1, 2)); // [3]