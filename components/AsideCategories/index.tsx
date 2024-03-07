"use client"

import { CATEGORIES } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./index.module.scss"

export default function AsideCategories() {
  const pathname = usePathname()

  return (
    <ul className={styles.list}>
      {CATEGORIES.map(categories => (
        <li key={categories.slug}>
          <Link
            href={`/categories/${categories.slug}`}
            className={`${styles.link} ${
              pathname === `/categories/${categories.slug}` ? styles.active : ""
            }`}
          >
            {categories.categorie}
          </Link>
        </li>
      ))}
    </ul>
  )
}
