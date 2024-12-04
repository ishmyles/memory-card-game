import { useEffect, useState } from "react";
import "./CardGrid.css"

import { createUrls } from "../utils/CreateUrls";
import Card from "./Card";

export default function CardGrid({ scores }) {

    const [pokemonList, setPokemonList] = useState([]);
    const [prevPicks, setPrevPicks] = useState([]);

    const handleCardPick = (pokemonId) => {
        if (prevPicks.includes(pokemonId)) {
            console.log("Game over")
        } else {
            console.log("NOT duplicate")
            setPrevPicks(prevArr => [...prevArr, pokemonId])
        }
    }
  
    useEffect(() => {
        const pokemonUrls = [];

        for (let i = 0; i < 1; i++) {
            pokemonUrls.push(createUrls());
        }

        async function getPokemonList() {
            Promise.all(pokemonUrls.map(url => fetch(url)
                .then(response => {
                    return response.json()
                })
                .then(responseBody => responseBody)))
                .then(pokemonArr => {
                    setPokemonList(pokemonArr.map(pokemon => 
                        ({
                            id: pokemon.id, 
                            name: pokemon.name, 
                            hp: 120, 
                            type: pokemon.types[0].type.name, 
                            img: pokemon.sprites.front_default, 
                            moves: [pokemon.moves[0].move.name, pokemon.moves[1].move.name]
                        })
                    ));
                })
                .catch(err => {
                    console.error('Failed to fetch one or more of these URLs:');
                    console.log(pokemonUrls);
                    console.error(err);
                });
        }

        getPokemonList()
    }, []);
  
    return (
        <div id="cards">
            {pokemonList.map(pokemon => 
            <Card 
                key={pokemon.id} 
                id={pokemon.id} 
                name={pokemon.name} 
                hp={pokemon.hp} 
                type={pokemon.type} 
                img={pokemon.img} 
                moves={pokemon.moves} 
                clickFunc={handleCardPick}
            />)}
        </div>
    )
}