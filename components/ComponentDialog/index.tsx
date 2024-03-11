"use client"

import { useRef } from "react"
import styles from "./index.module.scss"

interface Props {
  children: React.ReactNode
  title: string
}

export default function ComponentDialog({ children }: Props) {
  const dialog = useRef<HTMLDialogElement | null>(null)
  const openHandler = () => {
    dialog.current?.showModal()
  }

  const closeHandler = () => {
    if (dialog.current) {
      dialog.current.close()
    }
  }

  return (
    <div>
      <button type="button" onClick={openHandler} className={styles.openButton}>
        open
      </button>
      <dialog ref={dialog} className={styles.dialog}>
        <div>{children}</div>
        <button type="button" onClick={closeHandler}>
          close
        </button>
      </dialog>
    </div>
  )
}
