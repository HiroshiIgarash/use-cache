"use cache"

import { Suspense } from "react";
import PokemonContainer from "../components/PokemonContainer";

const Page = async () => {

  return (
    <div className="w-full mx-auto px-8">
      <h1 className="text-5xl">use cacheを用いた場合</h1>
      <p className="mt-4">
        このページでは use cache を用いています。<br />
        fetchはキャッシュされています。<br />
        このことはページを更新をしても取得日時や乱数が変わらないことから確認できます。<br />
        また、fetchがキャッシュされるため静的ページとなり、開発モードでは左下にStatic Routeである印が表示されます。（buildした時にも確認できる）
      </p>

      <Suspense fallback={<p>loading</p>}>
        <PokemonContainer />
      </Suspense>
    </div>
  )
}

export default Page