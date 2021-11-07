import Link from 'next/link';

export default function ClientsPage() {
    return (
        <div>
            <h1>The ClientsPage</h1>
            <ul>
                <li><Link href='/clients/jadakiss'>Jadakiss</Link></li>
                <li><Link href='/clients/benny'>Benny The Butcher</Link></li>

            </ul>
        </div>
    );
}