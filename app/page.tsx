import Container from "@/components/Container"
import styles from "./page.module.scss"

export default function Home() {
  return (
    <>
      <Container>
        <div className={styles.heading}>
          <h1 className={styles.headingTitle}>Component assets Web site</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            minus aliquam delectus temporibus, in nobis. A labore est iste
            minus.
          </p>
        </div>
      </Container>

      <Container>
        <section>
          <h2>About</h2>
        </section>
      </Container>
    </>
  )
}
