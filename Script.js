// Uso de la PokeAPI empleando el método fetch() y API REST


function createPokemon(pokemon) { //Función que crea un elemento con la info del Pokemon dentro de la página 
    
    const pokemonContainer = document.getElementById("contenedor_pokemon");
    //Se crea un nuevo elemento (etiqueta div) dentro de  la página usando el método createElement()

    
    const card = document.createElement('div');
    card.classList.add('pokemon-block'); //Se le añade la clase 'pokemon-block al elemento que se ha creado'

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src= pokemon.sprites.front_default //Esto es una jquery que buscará la dirección del sprite del pokemon en la BD

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    pokemonContainer.appendChild(card);
};


function InputPokemon() {
    
    let identificador = parseInt(prompt("Introduce el número del Pokemón que quieres bucar: "));


    fetch(`https://pokeapi.co/api/v2/pokemon/${identificador}/`)

    .then(res => res.json())

    .then(data => {
        createPokemon(data) //Se realiza la llamada a la API y luego se introduce en la página el contenido de la consulta.
    }); 



};

