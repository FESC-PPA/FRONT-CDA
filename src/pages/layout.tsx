import { ReactNode } from "react"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import { NavBarDefault } from "../components/NavBar"

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <main className="flex flex-col w-screen h-screen overflow-hidden relative justify-center">
      <NavBarDefault />
      <div className="px-5 sm:px-10 w-full h-full overflow-auto p-2">
        <section className="flex flex-col  items-center">{children}</section>
      </div>
      <Footer />
    </main >
  )
}

export default Layout