import { ReactNode } from "react"
import { AppFooter, AppHeader, Container } from "../components"
import { Fondo } from "../components/fondo"

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Fondo></Fondo>
      <div className="h-screen pb-14 bg-right bg-cover">
        <Container>
          <AppHeader />
          {children}
          <AppFooter />
        </Container>
      </div>
    </>
  )
}

export default Layout