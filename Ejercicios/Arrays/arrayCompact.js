const fromPairs = (array) => {
    let newobject = {}//we create a new object
    for (const element of array) {
     const [key, value] = element//deconstruct an array element into 2 values
     newobject[key] = value;//create a new properties with an assigned value
    }
    return newobject;
   }
   const data = [['a', 1], ['b', 2]];
   console.log(fromPairs(data)) // { 'a': 1, 'b': 2 }