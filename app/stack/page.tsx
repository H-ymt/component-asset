import Container from "@/components/Container"
import Biome from "@/components/Icons/Biome"
import NextJs from "@/components/Icons/Next"
import ShadcnUi from "@/components/Icons/ShadcnUi"
import Stylelint from "@/components/Icons/Stylelint"
import Vercel from "@/components/Icons/Vercel"
import styles from "./page.module.scss"

export default function Page() {
  return (
    <Container>
      <section>
        <h1 className={styles.sectionTitle}>Used by</h1>
        <div className={styles.container}>
          <a target="_brank" href="https//" className={styles.stackCard}>
            <NextJs />
          </a>
          <a target="_brank" href="https//" className={styles.stackCard}>
            <Vercel />
          </a>
          <a target="_brank" href="https//" className={styles.stackCard}>
            <Vercel />
          </a>
          <a target="_brank" href="https//" className={styles.stackCard}>
            <Vercel />
          </a>
          <a target="_brank" href="https//" className={styles.stackCard}>
            <Vercel />
          </a>
          <a target="_brank" href="https//" className={styles.stackCard}>
            <Vercel />
          </a>
        </div>
      </section>

      <section>
        <h1 className={styles.sectionTitle}>Used in</h1>
        <div className={styles.container}>
          <a
            target="_brank"
            href="https://ui.shadcn.com/"
            className={styles.stackCard}
          >
            <ShadcnUi />
          </a>
          <a
            target="_brank"
            href="https://stylelint.io/"
            className={styles.stackCard}
          >
            <Stylelint />
          </a>
          <a target="_brank" href="https//" className={styles.stackCard}>
            <Biome />
          </a>
        </div>
      </section>
    </Container>
  )
}
