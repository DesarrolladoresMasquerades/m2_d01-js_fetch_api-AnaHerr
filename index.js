console.log("JS Loaded");

fetch("https://pokeapi.co/api/v2/pokemon") // fetches and it is subject to network problem
.then((response) => response.json()) //transforms and it is subject to data quality (parsing)
.then(buildPokedex) // the third part, this is the actual data
.catch (console.log);

/*
function buildPokedex(pokedex){
    pokedex.results.forEach((pokemon) => {
      const newH1 = document.createElement("h1");
      newH1.innerText = pokemon.name;
  
      const newLink = document.createElement("a");
      newLink.innerText = "Link to Pokémon";
      newLink.href = pokemon.url;
  
      document.body.appendChild(newH1);
      document.body.appendChild(newLink);
    });
  }*/

function buildPokedex(pokedex){
    const pokeNames = pokedex.results.map(pokemon =>pokemon.name)
    const pokeLinks = pokedex.results.map(pokemon =>pokemon.url)
    //const pokeImg = []
   const fetchImgPromises = pokeLinks.map((link) => 
   fetch(link).then((response) => response.json())
   )

   Promise.all(fetchImgPromises) //when all promises are ready, try to do something with the data
   .then(arrayOfPokemon =>{
       addToDom(pokeNames, pokeLinks, arrayOfPokemon)//(response) => response.json();
   })
}

   function addToDom(names, links, pokemon){
     for(let i=0; i<pokemon.length; i++){
      const newH1 = document.createElement("h1");
      newH1.innerText = names[i];
      const newLink = document.createElement("a");
      newLink.innerText = "Link to Pokémon";
      newLink.href = links[i];
      const newImg = document.createElement("img");
      newImg.src = pokemon[i].sprites.front_shiny;
          document.body.appendChild(newH1);
          document.body.appendChild(newLink);
          document.body.appendChild(newImg);
      }
    }




  /*function buildPokedex(pokedex){
    pokedex.results.forEach((pokemon) => {
      const newH1 = document.createElement("h1");
      newH1.innerText = pokemon.name;
  
      const newLink = document.createElement("a");
      newLink.innerText = "Link to Pokémon";
      newLink.href = pokemon.url;
      document.body.appendChild(newLink);

      const newImg = document.createElement("img");
      fetch(pokemon.url)
      .then((response) => response.json())
      .then((onePokemon) =>{
        newImg.src = onePokemon.sprites.front_shiny;
        document.body.appendChild(newH1);
        document.body.appendChild(newImg);
      })

    });*/