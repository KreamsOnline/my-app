import HeaderStyles from './styles/HeaderStyles';
import Link from 'next/dist/client/link';


function Navbar() {
    return (
        <HeaderStyles>
            <ul>
                <li><Link href="/clients">Clients</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/blog">Blog</Link></li>
            </ul>
        </HeaderStyles>
    )
}

export default Navbar;
