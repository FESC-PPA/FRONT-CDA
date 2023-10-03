import { useState } from "react"
import { Container } from ".."
import { Link } from "react-router-dom"
import "./AppHeader.css"

const links = [
    {
        to: "/#features",
        label: "Features",
    },
    {
        to: "/#solution",
        label: "Solution",
    },
    {
        to: "/#reviews",
        label: "Reviews",
    },
]

export const AppHeader = () => {
    const [isToggled, setIsToggled] = useState(false)

    const toggleNavlinks = () => {
        setIsToggled(!isToggled)
    }

    const handleHamburgerClick = () => {
        setIsToggled(!isToggled)
        toggleNavlinks()
    }

    const handleLinkClick = () => {
        setIsToggled(!isToggled)
        toggleNavlinks()
    }

    return (
        <header>
            <div className="w-full flex items-center justify-between">
                <Link to={'/'} >
                    <span className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                        Control de Asitencia
                    </span>
                </Link>
                <div className="flex w-1/2 justify-end content-center mt-3 lg:mt-1">
                    <Link to={'/login'}>
                        <button className="rounded-lg hover:scale-105 transition-transform h-auto items-center justify-center py-1 px-4">
                            <span className="relative text-sm font-semibold text-secondary"> Login </span>
                        </button>
                    </Link>
                    <Link to={'/register'}>
                        <button className="bg-primary rounded-lg hover:scale-105 transition-transform h-auto py-1 items-center justify-center px-4">
                            <span className="relative text-sm font-semibold text-white"> Get Started</span>
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    )
}