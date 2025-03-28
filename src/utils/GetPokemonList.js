import { pokemonData } from "../../public/pokemonData";
import { generateRandomNum, generateRandomHealth } from "./NumGenerator";

const createUrls = () => {
  const randomNum = generateRandomNum();
  return `https://pokeapi.co/api/v2/pokemon/${randomNum}`;
};

async function getPokemonList() {
  const pokemonUrls = [];
  const listLength = 12;

  for (let i = 0; i < listLength; i++) {
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
      const uniquePokemonList = new Set(
        pokemonArr.map((pokemon) => pokemon.id)
      );

      if (uniquePokemonList.size !== listLength)
        throw new Error("Insufficient cards!");

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
      return pokemonData;
    });
}

export { getPokemonList };
