import styles from "./layout.module.scss"

export default function CategoriesLayout({
  children,
}: { children: React.ReactNode }) {
  return <div className={styles.layout}>{children}</div>
}
