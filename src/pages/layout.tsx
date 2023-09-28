import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { NavBar } from "../components/NavBar"

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <main className="flex flex-col w-screen h-screen overflow-hidden relative justify-center">
      <NavBar></NavBar>
      <div className="px-5 sm:px-10 w-full h-full overflow-auto p-2 flex flex-col  items-center">
        <section>{children}</section>
      </div>
      <div className="flex bg-green-400">Footer</div>
    </main >
  )
}

export default Layout