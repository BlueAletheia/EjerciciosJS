const arrCities = [
    { city: "Logroño", country: "Spain", capital: false },
    { city: "Paris", country: "France", capital: true },
    { city: "Madrid", country: "Spain", capital: true },
    { city: "Rome", country: "Italy", capital: true },
    { city: "Oslo", country: "Norway", capital: true },
    { city: "Jaén", country: "Spain", capital: false }
  ];
  
  let capitales = arrCities.filter((city) => city.capital !== false);
  let cities = capitales.map((city) => console.log(city.city, "is the capital of", city.country));
  
 