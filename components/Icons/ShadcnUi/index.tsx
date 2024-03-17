import styles from "./index.module.scss"

export default function ShadcnUi() {
  return (
    <>
      <div className={styles.container}>
        <svg
          role="img"
          aria-hidden="true"
          width="50"
          height="50"
          viewBox="0 0 256 256"
          className={styles.logo}
        >
          <rect width="256" height="256" fill="none" />
          <line
            x1="208"
            y1="128"
            x2="128"
            y2="208"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
          <line
            x1="192"
            y1="40"
            x2="40"
            y2="192"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
        </svg>
        <span className={styles.text}>shadcn/ui</span>
      </div>
    </>
  )
}
