import "./CardGrid.css"

import Card from "./Card";

export default function CardGrid() {
    const pokemonList = [
        {id: 25, name: "pikachu", hp: 120, type: "electric", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", moves: ["mega-punch", "pay-day"]},
        {id: 151, name: "mew", hp: 150, type: "psychic", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png", moves: ["pound", "mega-punch"]},
        {id: 25, name: "pikachu", hp: 120, type: "electric", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", moves: ["mega-punch", "pay-day"]},
        {id: 151, name: "mew", hp: 150, type: "psychic", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png", moves: ["pound", "mega-punch"]},
        {id: 25, name: "pikachu", hp: 120, type: "electric", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", moves: ["mega-punch", "pay-day"]},
        {id: 151, name: "mew", hp: 150, type: "psychic", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png", moves: ["pound", "mega-punch"]},
        {id: 25, name: "pikachu", hp: 120, type: "electric", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", moves: ["mega-punch", "pay-day"]},
        {id: 151, name: "mew", hp: 150, type: "psychic", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png", moves: ["pound", "mega-punch"]},
        {id: 25, name: "pikachu", hp: 120, type: "electric", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", moves: ["mega-punch", "pay-day"]},
        {id: 151, name: "mew", hp: 150, type: "psychic", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png", moves: ["pound", "mega-punch"]},
        {id: 25, name: "pikachu", hp: 120, type: "electric", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", moves: ["mega-punch", "pay-day"]},
        {id: 151, name: "mew", hp: 150, type: "psychic", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png", moves: ["pound", "mega-punch"]},
    ];

    return (
        <div id="cards">
            {pokemonList.map(pokemon => <Card key={pokemon.id} id={pokemon.id} name={pokemon.name} hp={pokemon.hp} type={pokemon.type} img={pokemon.img} moves={pokemon.moves} />)}
        </div>
    )
}