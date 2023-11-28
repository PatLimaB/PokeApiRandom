const pokemonAPI = "https://pokeapi.co/api/v2/pokemon/";

async function getRandomPokemon() {
    try {
        const randomPokemonId = getRandomNumber(1, 1008);
        const response = await fetch(`${pokemonAPI}${randomPokemonId}`);
        
        if (response.ok) {
            const data = await response.json();
            displayPokemon(data);
        } else {
            throw new Error(`Error de red: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error en la solicitud:', error.message);
    }
}

function displayPokemon(pokemon) {
    const pokemonImage = document.getElementById("pokemon-image");
    const pokemonName = document.getElementById("pokemon-name");
    const pokemonId = document.getElementById("pokemon-id");

    pokemonImage.src = pokemon.sprites.front_default;
    pokemonImage.alt = "Imagen de " + capitalizeFirstLetter(pokemon.name);
    pokemonName.textContent = capitalizeFirstLetter(pokemon.name);
    pokemonId.textContent = "#" + pokemon.id;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

getRandomPokemon();
