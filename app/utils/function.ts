import { Pokemon } from "./type";

export const fetchPokemon = async (id: number) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon: Pokemon = await response.json();

  return {
    ...pokemon,
    getTime: new Date(),
    rand: Math.random()
  }
}
