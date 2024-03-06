import styles from "./index.module.scss"

export default function Moon() {
  return (
    <svg
      role="img"
      aria-label="dark mode"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9670f0"
      stroke-width={1.5}
      stroke-linecap="round"
      stroke-linejoin="round"
      className={styles.moon}
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}
