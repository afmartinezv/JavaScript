'Use strict'

document.addEventListener('DOMContentLoaded', () =>{
    obtenerPokemons('https://pokeapi.co/api/v2/pokemon/');
});

async function obtenerPokemons(url){

    try {
        let pokemons = await fetch(url);
        pokemons = await pokemons.json();
        console.log(pokemons);

    }catch(error){
    }
}



