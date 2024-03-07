"use client"

import { useTheme } from "next-themes"
import { Suspense, useEffect, useState } from "react"
import Moon from "../Icons/Moon"
import Sun from "../Icons/Sun"
import styles from "./index.module.scss"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loader} />
      </div>
    )
  }

  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <button
      type="button"
      className={styles.button}
      onClick={toggleTheme}
      aria-label={resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
    >
      {resolvedTheme === "dark" ? <Sun /> : <Moon />}
    </button>
  )
}
