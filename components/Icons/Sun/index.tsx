import styles from "./index.module.scss"

export default function Sun() {
  return (
    <svg
      role="img"
      aria-label="light mode"
      width={28}
      height={28}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fb8e28"
      stroke-width={1.5}
      stroke-linecap="round"
      stroke-linejoin="round"
      className={styles.sun}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}