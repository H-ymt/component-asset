"use client"

import { AlignRight, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import ThemeToggle from "../ThemeToggle"
import styles from "./index.module.scss"

export default function MenuMobile() {
  const [isOpen, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!isOpen)
  }

  return (
    <>
      <button type="button" className={styles.button} onClick={handleClick}>
        {isOpen ? (
          <X color="var(--color-text-menu)" strokeWidth={1.5} size={28} />
        ) : (
          <AlignRight
            color="var(--color-text-menu)"
            strokeWidth={1.5}
            size={28}
          />
        )}
      </button>
      <nav className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <div className={styles.menuContainer}>
          <ul className={styles.list}>
            <li>
              <Link href="/" className={styles.link} onClick={handleClick}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/showcase"
                className={styles.link}
                onClick={handleClick}
              >
                Showcase
              </Link>
            </li>
            <li>
              <Link href="/stack" className={styles.link} onClick={handleClick}>
                Stack
              </Link>
            </li>
          </ul>

          <div className={styles.appearance}>
            <p>Appearance</p>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </>
  )
}
