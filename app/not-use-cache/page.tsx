import { Suspense } from "react";
import PokemonContainer from "../components/PokemonContainer";
import Link from "next/link";

const Page = () => {

  return (
    <div className="w-full mx-auto px-8">
      <h1 className="text-5xl">use cacheを用いない場合</h1>
      <p className="mt-4">
        このページでは use cache を用いていません。<br />
        fetchはキャッシュされることがなく、都度ポケモンを撮りに行っています。（Next14でデフォルトでキャッシュされていたData cacheもデフォルトでオフになっているのがわかる）<br />
        このことは取得日時や乱数が都度変わることから確認できます。<br />
        （余談：suspenseかuse cacheを使わないとおこられる）<br />
        <Link href="https://nextjs.org/docs/messages/next-prerender-missing-suspense" target="_blank">https://nextjs.org/docs/messages/next-prerender-missing-suspense</Link>
      </p>

      <Suspense fallback={<p>loading</p>}>
        <PokemonContainer />
      </Suspense>

    </div>
  )
}

export default Page