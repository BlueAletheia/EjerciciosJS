let splitArray = (array, chunks) => {
    let result = [];
    for(let i = 0; i < array.length; i += chunks){
      result.push(array.slice(i, i+chunks));
    }
    return result;
  }
  
  
  const result = splitArray([1, 2, 3, 4, 5, 6, 7], 3);
  console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]
  