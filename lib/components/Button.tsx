import { ReactNode } from "react"

export const Button = (props: { children: ReactNode }) => {
  return <button>{props.children}</button>
}
