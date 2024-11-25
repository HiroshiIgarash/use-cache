import Image from "next/image";
import { fetchPokemon } from "../utils/function";

const PokemonView = ({ pokemon }: { pokemon: Awaited<ReturnType<typeof fetchPokemon>> }) => {
  return (
    <div key={pokemon.name}>
      <h2 className="text-4xl mt-8">{pokemon.name}</h2>
      <Image
        src={pokemon.sprites.front_default}
        width={200}
        height={200}
        alt={pokemon.name}
      />
      <div>
        <h3 className="text-xl font-bold">Status</h3>
        <ul className="grid grid-cols-2 max-w-4xl">
          {
            pokemon.stats.map(item => (
              <li key={item.stat.name} className="contents">
                <div>{item.stat.name}</div>
                <div>{item.base_stat}</div>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold">取得日時</h3>
        {pokemon.getTime.toString()}
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold">乱数</h3>
        {pokemon.rand}
      </div>
    </div>
  )
}

export default PokemonView