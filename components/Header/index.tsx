import Image from "next/image"
import Link from "next/link"
import Container from "../Container"
import Github from "../Icons/Github"
import Menu from "../Menu"
import ThemeToggle from "../ThemeToggle"
import styles from "./index.module.scss"

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <div className={styles.headerMenu}>
            <Link href="/" className={styles.headerLogo}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={30}
                height={30}
                loading="eager"
              />
            </Link>
            <Menu />
          </div>

          <div className={styles.headerIcons}>
            <Github />
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  )
}
