import Link from 'next/link'

export default function Custom404() {
    return (
      <div className="header">
        <h1><span>Sorry</span> file not found...</h1>
        <Link href="/"><a>Go back</a></Link>
      </div>
    )
  }
  