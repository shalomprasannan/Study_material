import { useRouter } from 'next/router'
import  Link  from 'next/link'

export default function Page() {
  const router = useRouter()

  return (
    <div>
    <button type="button" onClick={() => router.push('/login')}>
      Click me
    </button>
    <ul>
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/about">About Us
      </Link>
    </li>
    <li>
      <Link href="/blog/hello-world">
        <a>Blog Post</a>
      </Link>
    </li>
  </ul>
  </div>
  )
}