import './styles.css';



import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';


export default function Footer() {

    return (

        <footer>

            <nav id="feet-footer">

                <div>
                    <Zoom>
                        <ul className="footer-icons">

                            <li>
                                <Link
                                    rel="dns-prefetch"
                                    to="https://www.linkedin.com/in/ricardoaferreirasilva/"
                                    target="_blank"
                                    className="contacts-details"
                                >
                                    <i className="fab fa-linkedin-in"></i>
                                </Link>

                            </li>
                            <Link
                                rel="dns-prefetch"
                                to="mailto:ricardo@ferreiras.dev.br"
                                target="_blank"
                                className="contacts-details"
                            >
                                <i className="fa fa-at"></i>
                            </Link>
                            <li>

                                <Link
                                    rel="dns-prefetch"
                                    to="https://wa.me/5571993005555"
                                    target="_blank"
                                    className="contacts-details"
                                >
                                    <i className="fab fa-whatsapp"></i>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    rel="dns-prefetch"
                                    to="https://t.me/RicardoFerreira57"
                                    target="_blank"
                                    className="contacts-details"
                                >
                                    <i className="fab fa-telegram"></i>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    rel="dns-prefetch"
                                    to="https://www.ferreiras.dev.br/cv/ResumeRicardoFerreira.pdf"
                                    target="_blank"
                                    className="contacts-details"
                                >
                                    <i className="fa fa-address-card"></i>
                                </Link>
                            </li>

                        </ul>
                    </Zoom>
                </div>
            </nav>

        </footer>
    )
}