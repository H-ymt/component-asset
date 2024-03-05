import Image from "next/image"
import Link from "next/link"
import Container from "../Container"
import Menu from "../Menu"
import ThemeToggle from "../ThemeToggle"
import styles from "./index.module.scss"

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.headerLogo}>
            <Image src="/logo.png" alt="Logo" width={36} height={36} />
          </Link>
          <div className={styles.headerMenu}>
            <Menu />
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  )
}
