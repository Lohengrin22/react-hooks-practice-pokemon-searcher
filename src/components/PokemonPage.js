import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(`http://localhost:3001/pokemon`)
    .then((r) => r.json())
    .then((pokemon) => setPokemon(pokemon))
  }, [])

  const searchedPoke = pokemon.filter((poke) => 
    poke.name.toUpperCase().includes(search.toUpperCase())
  ) 
  
  function handleAddPoke(poke){
    setPokemon([...pokemon, poke])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPoke={handleAddPoke}/>
      <br />
      <Search search={search} handleSearch={setSearch}/>
      <br />
      <PokemonCollection pokemon={searchedPoke}/>
    </Container>
  );
}

export default PokemonPage;
