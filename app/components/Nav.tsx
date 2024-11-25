import { Button } from "@/components/ui/button"
import Link from "next/link"

const Nav = () => {
  return (
    <nav>
      <ul className="flex flex-wrap gap-4">
        <li>
          <Button asChild variant="link">
            <Link href="/">TOP</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant="link">
            <Link href="/not-use-cache">use cacheを用いない場合</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant="link">
            <Link href="/use-cache">use cacheを用いた場合</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant="link">
            <Link href="/layout-use-cache">部分的に静的コンテンツ</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant="link">
            <Link href="/function-cache">関数のcache</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant="link">
            <Link href="/cache-tag">cacheのタグ付け</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant="link">
            <Link href="/cachelife">cacheLife</Link>
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav