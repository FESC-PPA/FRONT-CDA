import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { NavBar } from "../components/NavBar"

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <main>
      <div className="flex min-h-full w-full flex-col bg-slate-400 grow">
      <NavBar></NavBar>
        <div className="flex h-auto w-screen flex-row grow">
          <div className="flex w-full bg-blue-400">
            <section>{children}</section>
          </div>
        </div>
        <div className="flex h-32 w-screen bg-green-400">Footer</div>
      </div>
    </main>
  )
}

export default Layout