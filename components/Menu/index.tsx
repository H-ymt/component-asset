"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./index.module.scss"

export default function Menu() {
  const pathname = usePathname()

  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link
            href="/"
            className={`${styles.link} ${
              pathname === "/" ? styles.active : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`${styles.link} ${
              pathname === "/about" ? styles.active : ""
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/stack"
            className={`${styles.link} ${
              pathname === "/stack" ? styles.active : ""
            }`}
          >
            Stack
          </Link>
        </li>
      </ul>
    </nav>
  )
}
