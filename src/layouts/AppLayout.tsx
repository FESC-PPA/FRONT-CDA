import { ReactNode } from "react"
import { AppFooter, AppHeader, Container, AppFondo } from "../components"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks"
import { Children } from "../utils/types"



export const AppLayout = ({ children }: Children) => {
  const navigate = useNavigate();
  const { getHasLogged } = useAuth()

  if (getHasLogged() === true) {
    // Redirige al usuario a la página ""
    navigate("/dashboard");
  }

  return (
    <>
      <AppFondo></AppFondo>
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