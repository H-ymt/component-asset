"use client"

import { AlignRight, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
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
        <ul>
          <li>
            <Link href="/" className={styles.link}>
              Menu
            </Link>
          </li>
          <li>
            <Link href="/">Menu</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
