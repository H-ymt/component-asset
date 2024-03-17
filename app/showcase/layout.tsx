import Aside from "@/components/Aside"
import Container from "@/components/Container"
import styles from "./layout.module.scss"

export default function CategoriesLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <Container>
      <div className={styles.layout}>
        <Aside />
        <div>{children}</div>
      </div>
    </Container>
  )
}
