import AsideCategories from "../AsideCategories"
import styles from "./index.module.scss"

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <div className={styles.asideInner}>
        <div className={styles.categories}>
          <h2 className={styles.asideTitle}>Categories</h2>
          <AsideCategories />
        </div>
      </div>
    </aside>
  )
}
