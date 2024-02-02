// basic
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(response => response.json())
.then(data => console.log(data.name , data.weight))
.catch(error => console.log(error))

// fetch with custom error
fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
.then(response => {
  if(!response.ok) {
    const resource = response.url.split('/').pop();
    throw new Error(`${resource} is not part of this API!!`);
  }
  return response.json();
})
.then(data => console.log(data.name, data.weight))
.catch(error => console.error(error));

// using async await
const getPokemon = async () => {
  try{
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/rattata");
    if(!response.ok) {
      const resource = response.url.split('/').pop();
      throw new Error(`${resource} is not part of this API!!`);
    }
    const data = await response.json();
    console.log(data.name, data.weight);
  }
  catch(error){
    console.log(error);
  }
}

getPokemon();