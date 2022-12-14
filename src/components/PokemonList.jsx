import PokemonCard from "./PokemonCard";
import React from "react";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="pokemonList">
      {pokemons.map((pokemon) => {
        return <PokemonCard name={pokemon.name} key={pokemon.name} />;
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};

export default PokemonList;
