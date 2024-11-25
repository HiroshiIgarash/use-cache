import { Suspense } from "react";
import PokemonContainer from "../components/PokemonContainer";

const Page = () => {
  return (
    <div className="w-full mx-auto px-8">
      <h1 className="text-5xl">部分的に静的コンテンツにする</h1>
      <p>
        layout.tsxに use cache を適用し、動的にしたい部分（キャッシュを用いたくない部分）でuse cacheをつけなければ、基本的にはキャッシュさせつつ、一部分のみ動的にすることが可能。<br />
        このpage.tsxではuse cacheを用いていないのでキャッシュされない。<br />
        （上の赤字のlayout.tsxの部分はキャッシュされているが、下のポケモンたちはキャッシュされていない。）
      </p>
      <Suspense fallback={<p>loading</p>}>
        <PokemonContainer />
      </Suspense>
    </div>
  );
}

export default Page