const generateRandomNum = () => Math.floor(Math.random() * (151 - 1)) + 1;

const generateRandomHealth = () =>
  (Math.floor(Math.random() * (20 - 6)) + 6) * 10;

const createUrls = () => {
  const randomNum = generateRandomNum();
  return `https://pokeapi.co/api/v2/pokemon/${randomNum}`;
};

async function getPokemonList() {
  const pokemonUrls = [];

  for (let i = 0; i < 2; i++) {
    pokemonUrls.push(createUrls());
  }

  return Promise.all(
    pokemonUrls.map((url) =>
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((responseBody) => responseBody)
    )
  )
    .then((pokemonArr) => {
      return pokemonArr.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        hp: generateRandomHealth(),
        type: pokemon.types[0].type.name,
        img: pokemon.sprites.front_default,
        moves: [pokemon.moves[0].move.name, pokemon.moves[1].move.name],
      }));
    })
    .catch((err) => {
      console.error("Failed to fetch one or more of these URLs:");
      console.log(pokemonUrls);
      console.error(err);
    });
}

export { getPokemonList };
