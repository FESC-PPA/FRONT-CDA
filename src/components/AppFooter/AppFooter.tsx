import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const AppFooter = () => {
    return (
        <footer >
            <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
                <a className="text-gray-500 no-underline hover:no-underline" href="#">&copy; App 2019</a>
            </div>
        </footer>
    )
}