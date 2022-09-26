const arrDirty = [NaN, 0, 5, false, -1, "", undefined, 3, null, "test"];

const check = (arr) => {
  return arr.filter(item => item);
};
  
  
// console.log("---")
//  return arr.map((item) => {
//  if (
//      item !== false &&
//      item !== null &&
//      item !== undefined &&
//     !isNaN(item) &&
//      item !== ""
//    ) {
//      return item;
//    } else {
//      return console.log("no valido");
//    }
//  });



check(arrDirty);
