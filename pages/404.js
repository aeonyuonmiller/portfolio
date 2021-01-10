import Link from 'next/link';

export default function Custom404() {
    return (
      <div className="header">
        <h1>Page <span>not found...</span></h1>
        <Link href="/"><a>Back to index</a></Link>
      </div>
    )
  }
  