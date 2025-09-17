"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className={styles.header}>
            <ul className={styles.navList}>
                <li>
                    <Link
                        href="/"
                        className={pathname === "/" ? styles.active : styles.inactive}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href=" /orcamento"
                        className={pathname === "/orcamento" ? styles.active : styles.inactive}
                    >
                        Orçamento
                    </Link>

                </li>      
                <li>
                    <Link
                        href="/suporte"
                        className={pathname === "/suporte" ? styles.active : styles.inactive}
                    >
                        Suporte
                    </Link>
                </li>
            </ul>
        </header>
    );
}
