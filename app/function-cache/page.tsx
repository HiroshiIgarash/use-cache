import { Suspense } from "react"
import PokemonView from "../components/PokemonView"
import { fetchPokemon } from "../utils/function"

const fetchNoCachePokemon = async () => {
  return await fetchPokemon(1)
}

const fetchCachePokemon = async () => {
  "use cache"
  return await fetchPokemon(1)
}

const Page = async () => {


  return (
    <div className="w-full mx-auto px-8">
      <h1 className="text-5xl">関数のcache</h1>
      <p>
        関数ごとにcacheをすることも可能<br />
        下の2つのポケモンは別の関数を使ってfetchしており、片方のみuse cacheを適用している。<br />
        （page.tsxの先頭にはuse cacheはつけていない）
      </p>
      <Suspense fallback={<p>loading</p>}>
        <PokemonContainer />
      </Suspense>
    </div>
  )
}

export default Page

const PokemonContainer = async () => {
  const cacheFuncPokemon = await fetchCachePokemon()
  const noCacheFuncPokemon = await fetchNoCachePokemon()
  return (
    <div className="flex gap-4 mt-8">
      <div>
        キャッシュしていない↓
        <PokemonView pokemon={noCacheFuncPokemon} />
      </div>

      <div>
        キャッシュしている↓
        <PokemonView pokemon={cacheFuncPokemon} />
      </div>
    </div>
  )
}