import styles from "./index.module.scss"

export default function Moon() {
  return (
    <svg
      role="img"
      aria-label="dark mode"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-text-body)"
      strokeWidth={1.5}
      className={styles.moon}
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}
