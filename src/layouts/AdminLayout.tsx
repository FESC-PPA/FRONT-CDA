import { ReactNode } from "react"
import { AppFooter, AppHeader, Container, AppFondo, AdminNavBar } from "../components"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks"
import { Children } from "../utils/types"



export const AdminLayout = ({ children }: Children) => {
    const navigate = useNavigate();
    const { getHasLogged } = useAuth()

    if (getHasLogged() === false) {
        // Redirige al usuario a la página ""
        navigate("/login");
    }

    console.log(getHasLogged())

    return (
        <>
            <div className="h-screen pb-14 bg-right bg-cover">
                <Container>
                    <AdminNavBar navigation={[
                        { name: 'Home', href: '/', current: false },
                        { name: 'Login', href: '/login', current: false },
                        { name: 'Register', href: '/register', current: false }
                    ]} />
                    {children}
                    <AppFooter />
                </Container>
            </div>
        </>
    )
}