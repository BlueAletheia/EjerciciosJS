const arrCities2 = [
    { city: "Logroño", country: "Spain", capital: false },
    { city: "Bordeaux", country: "France", capital: false },
    { city: "Madrid", country: "Spain", capital: true },
    { city: "Florence", country: "Italy", capital: true },
    { city: "Oslo", country: "Norway", capital: true },
    { city: "Jaén", country: "Spain", capital: false }
  ];
  let noCapitals = arrCities2.filter((city) => !city.capital);
  
  let isSpain = noCapitals.map((city) => {
    let newValue = city;
    if (city.country === "Spain") {
      newValue.isSpain = true;
    } else {
      newValue.isSpain = false;
    }
    return newValue;
  });
  
  console.log("---");
  isSpain.map((item) => console.log(item.city, item.isSpain ? 'Is spain': 'fuera'));
  