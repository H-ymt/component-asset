import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Stack",
  description: "Stack page",
}

export default function layoutout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
