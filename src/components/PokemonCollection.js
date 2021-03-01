import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {
  const pokeArr = pokemon.map((poke) => {
    
    return( <PokemonCard 
      key={poke.id}
      poke={poke}
    />)
    })
    return (
      <Card.Group itemsPerRow={6}>
        {pokeArr}
      </Card.Group>
    );
}

export default PokemonCollection;
