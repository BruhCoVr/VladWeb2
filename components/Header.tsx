import Link from "next/link";
import './Header.css'; // Make sure to import your CSS

export default function Header() {
    return (       
        <nav>
            <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
                <li>
                    <Link href="/">
                        <h1 className="text-2xl font-bold underline">Home</h1>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <h1 className="text-2xl font-bold underline">Projects</h1>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <h1 className="text-2xl font-bold underline">Records</h1>
                    </Link>
                </li>
            </ul>
        </nav> 
    );
}

