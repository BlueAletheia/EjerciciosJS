const arrNames = [
    {id: 1, name: 'Pepe'},
    {id: 2, name: 'Juan'},
    {id: 3, name: 'Alba'},
    {id: 4, name: 'Toby'},
    {id: 5, name: 'Lala'}
  ]
  
  let name = arrNames.find(function(name) {
    return name.id === 3;
  });
  
  console.log(name);
  