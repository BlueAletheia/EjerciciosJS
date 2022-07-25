function toLowercaseKeys(myObject) {
    let newKeys = Object.keys(myObject);
    let lowercaser = newKeys.map((newKey) => newKey.toLowerCase());
  
    newKeys.map((key, index) => {
      myObject[lowercaser[index]] = myObject[key]
      delete myObject[key]
      return myObject
    })
  return myObject
  }
  const myObject = { NamE: "Charles", ADDress: "Home Street" };
  const myObjLowercase = toLowercaseKeys(myObject);
  console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }  