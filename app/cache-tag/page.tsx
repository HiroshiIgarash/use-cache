import { Suspense } from "react"
import PokemonView from "../components/PokemonView"
import { fetchPokemon } from "../utils/function"
import { cacheTag } from "next/dist/server/use-cache/cache-tag"
import { expireTag } from "next/cache"
import { Button } from "@/components/ui/button"

const fetchPokemonFirst = async () => {
  "use cache"
  cacheTag("first")
  return await fetchPokemon(1)
}

const fetchPokemonSecond = async () => {
  "use cache"
  cacheTag("second")
  return await fetchPokemon(1)
}

const Page = async () => {


  return (
    <div className="w-full mx-auto px-8">
      <h1 className="text-5xl">cacheのタグ付け</h1>
      <p>
        キャッシュにタグ付けをして、「特定のキャッシュだけパージする」ということが可能。<br />
        下の2つのポケモンはどちらもキャッシュしており、それぞれ「first」「second」というタグをつけている<br />
        server actions内でrevalidateTagによってパージすることができる...と書かれているが非推奨マークがついており、expireTagを使えとのことらしい
      </p>
      <Suspense fallback={<p>loading</p>}>
        <PokemonContainer />
      </Suspense>
    </div>
  )
}

export default Page

const PokemonContainer = async () => {
  const cacheFuncPokemon = await fetchPokemonSecond()
  const noCacheFuncPokemon = await fetchPokemonFirst()
  return (
    <div className="flex gap-4 mt-8">
      <div>
        first↓
        <PokemonView pokemon={noCacheFuncPokemon} />
        <form action={async () => {
          "use server"
          expireTag("first")
        }}>
          <Button>「first」をパージ</Button>
        </form>
      </div>

      <div>
        second↓
        <PokemonView pokemon={cacheFuncPokemon} />
        <form action={async () => {
          "use server"
          expireTag("second")
        }}>
          <Button>「second」をパージ</Button>
        </form>
      </div>
    </div>
  )
}