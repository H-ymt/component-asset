import Container from "@/components/Container"
import styles from "./page.module.scss"

export default function Page() {
  return (
    <Container>
      <section>
        <h1>Used by</h1>
        <div className={styles.container}>
          <a href="https//" className={styles.stackCard}>
            Vercel
          </a>
          <a href="https//" className={styles.stackCard}>
            Vercel
          </a>
          <a href="https//" className={styles.stackCard}>
            Vercel
          </a>
          <a href="https//" className={styles.stackCard}>
            Vercel
          </a>
          <a href="https//" className={styles.stackCard}>
            Vercel
          </a>
          <a href="https//" className={styles.stackCard}>
            Vercel
          </a>
        </div>
      </section>
    </Container>
  )
}
