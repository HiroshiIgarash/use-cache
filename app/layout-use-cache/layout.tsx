"use cache"

import { ReactNode } from "react"
import { fetchPokemon } from "../utils/function"

const Layout = async ({ children }: { children: ReactNode }) => {
  const pokemon = await fetchPokemon(1)
  return (
    <>
      <p className="text-red-500">
        この赤字の部分はlayout.tsxに書かれています。<br />
        この階層ではlayout.tsxにuse cacheを適用しています。<br />
        layout部分ではキャッシュされていることを確認するために、layout.tsxでfetchPokemon関数を実行しています：乱数 {pokemon.rand}←キャッシュされてる！
      </p>
      {children}
    </>
  )
}

export default Layout