function checkCondition(value) {
    if (typeof value === "string") {
      return value;
    } else {
      return;
    }
  }
  
  function returnFalsyValues(object, condition) {
    let newObject = {};
  
    Object.entries(object).forEach(([key, value]) => {
      if (!condition(value)) {
        newObject[key] = value;
      }
    });
  
    return newObject;
  }
  let newObject = { a: 1, b: "2", c: 3 };
  
  const result = returnFalsyValues(newObject, checkCondition);
  
  console.log(result);