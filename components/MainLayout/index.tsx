import Aside from "../Aside"
import styels from "./index.module.scss"

export default function MainLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className={styels.layout}>
      <Aside />
      <main className={styels.main}>{children}</main>
    </div>
  )
}
