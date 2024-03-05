"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"
import Moon from "../Icons/Moon"
import Sun from "../Icons/Sun"
import styles from "./index.module.scss"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  let src: string

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  const Icon = () => {
    switch (resolvedTheme) {
      case "light":
        src = "/moon.svg"
        break
      case "dark":
        src = "/sun.svg"
        break
      default:
        src = "/loader.svg"
        break
    }

    return (
      <Image
        src={src}
        alt={resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
        width={28}
        height={28}
      />
    )
  }

  return (
    <button
      type="button"
      className={styles.button}
      onClick={toggleTheme}
      aria-label={resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
    >
      {/* <Icon /> */}
      {resolvedTheme === "dark" ? <Sun /> : <Moon />}
    </button>
  )
}
