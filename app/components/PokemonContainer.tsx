import { fetchPokemon } from "../utils/function";
import PokemonView from "./PokemonView";



const PokemonContainer = async () => {
  const pokemons = await Promise.all([
    await fetchPokemon(1),
    await fetchPokemon(2),
    await fetchPokemon(3),
  ])

  return (
    <div className="flex gap-4">
      {pokemons.map(pokemon => (
        <PokemonView key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default PokemonContainer