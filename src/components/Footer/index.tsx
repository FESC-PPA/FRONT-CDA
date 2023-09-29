import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="flex justify-between items-center py-4 px-6 bg-gray-200">
            <p className="text-sm text-gray-600">&copy; 2020 Your Company, Inc. All rights reserved.</p>
            <div className="flex space-x-2">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className="text-gray-600" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} className="text-gray-600" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="text-gray-600" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;