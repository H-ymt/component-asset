import styles from "./index.module.scss"

interface Props {
  children: React.ReactNode
}

export default function Container({ children }: Props) {
  return <div className={styles.container}>{children}</div>
}
