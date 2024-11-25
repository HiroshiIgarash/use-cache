export default function Home() {
  return (
    <div className="w-full mx-auto px-8">
      <h1 className="text-5xl">TOP</h1>
      <p>
        use cacheについて色々試します。<br />
        devではなくbuild→start推奨
      </p>
      <p className="mt-8">
        このサイトで用いているfetchPokemon関数は、fetchしてきたポケモンの情報のほかに取得日時と乱数を返しています。
      </p>
    </div>
  );
}
