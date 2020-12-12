import Link from 'next/link'

function Nav() {
    return (
        <div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/insert-name-here"><a>Insert Name Here</a></Link>
            <Link href="/rhythm"><a>Rhythm</a></Link>
        </div>
    );
}

export default Nav;