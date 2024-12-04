import { useEffect, useState } from "react";
import { getPokemonList } from "../utils/GetPokemonList";
import { shuffleArray } from "../utils/ShuffleArray";
import "./CardGrid.css"

import Card from "./Card";

export default function CardGrid({ updateScores, resetScores }) {

    const [pokemonList, setPokemonList] = useState([]);
    const [prevPicks, setPrevPicks] = useState([]);

    const handleCardPick = (pokemonId) => {
        if (prevPicks.includes(pokemonId)) {
            setPrevPicks([]);
            resetScores();
        } else {
            if (prevPicks.length === pokemonList.length - 1) {
                setPrevPicks([]);
            } else {
                setPrevPicks(prevArr => [...prevArr, pokemonId])
            }
            updateScores();
        }
        
        shuffleCards();
    }

    const shuffleCards = () => {
        setPokemonList(shuffleArray(pokemonList));
    }
  
    useEffect(() => {
        async function getPokemonData() {
            const pokemonArr = await getPokemonList();
            setPokemonList(pokemonArr);
        }
        getPokemonData();
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