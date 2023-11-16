function filtro(value){
    if(typeof value !== 'number' || value === 0){
      return false;
    } return true;
  }  
  
  const compact = (array) => {
   return array.filter(filtro)
  }
  
  const data = [0, 1, false, 2, undefined, '', 3, null];
  console.log(compact(data)) // [1, 2, 3]