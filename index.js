
const container = document.getElementById("container");

const getPokemones = async () => {
    try {
        const request = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await request.json();
        const pokemons = data.results;
        pokemons.forEach (pokemon => {
            pokeList(pokemon)
        });
    } catch (error) {
        console.log(error)
    }
}

const pokeList = async(pokemon) => {
    try {
        const pokemonData = await fetch(pokemon.url);
        const json = await pokemonData.json();
        console.log(json);
        showPokemons(json);
    } catch (error) {
        console.log(error)
    }
    
}

const showPokemons = (pokemon) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.width = "15rem";
    const p = document.createElement("p");
    p.className = "card-text";
    p.innerHTML = pokemon.name;
    const pokeImage = document.createElement("img");
    pokeImage.className = "card-img-top";
    pokeImage.src = pokemon.sprites.front_default;
    card.appendChild(pokeImage);
    card.appendChild(p);
    container.appendChild(card);
}

getPokemones()