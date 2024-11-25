"use cache"

import { Suspense } from "react"
import PokemonView from "../components/PokemonView"
import { fetchPokemon } from "../utils/function"
import { cacheLife } from "next/dist/server/use-cache/cache-life"
import { cacheTag } from "next/dist/server/use-cache/cache-tag"
import { Button } from "@/components/ui/button"
import { expireTag } from "next/cache"

const fetchPokemonWithCacheLife = async () => {
  "use cache"
  cacheLife("minutes")
  cacheTag("cachelife")
  return await fetchPokemon(1)
}


const Page = async () => {


  return (
    <div className="w-full mx-auto px-8">
      <h1 className="text-5xl">関数のcache</h1>
      <p>
        cacheLifeにより、cacheに有効期限をつけることができる。<br />
        下の例では minutes を指定しており、キャッシュ期間が1分となっている。<br />
        また、expireTagをつかって任意のタイミングでパージできる。
      </p>
      <Suspense fallback={<p>loading</p>}>
        <PokemonContainer />
      </Suspense>
    </div>
  )
}

export default Page

const PokemonContainer = async () => {
  const pokemon = await fetchPokemonWithCacheLife()
  return (
    <div className="flex gap-4 mt-8">
      <div>
        cacheLife(&quot;minutes&quot;)
        <PokemonView pokemon={pokemon} />
        <form action={async () => {
          "use server"
          expireTag("cachelife")
        }}>
          <Button>パージする</Button>
        </form>
      </div>
    </div>
  )
}