import './styles.css';
import logoReact from '../../assets/icons/react.svg';
import logoCSS from '../../assets/icons/docker-svgrepo-com.svg';
import logoTS from '../../assets/icons/ts-logo.svg';


import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';


export default function Footer() {

    return (

        <footer>

            <nav id="feet-footer">

                <div className="footer-head">
                    <Zoom>
                        <ul className="footer-icons">

                            <li>
                                <Link rel="dns-prefetch" to="https://react.dev" target="_blank" aria-label="Visit react.dev">
                                    <img src={logoReact} alt="ReactJS" />
                                </Link>
                            </li>

                            <li>
                                <Link rel="dns-prefetch" to="https://typescriptlang.org" target="_blank" aria-label="Visit typescriptlang.org">
                                    <img src={logoTS} alt="Typescript" />
                                </Link>
                            </li>

                            <li>
                                <Link rel="dns-prefetch" to="https://www.w3.org/" target="_blank" aria-label="Visit w3.org">
                                    <img src={logoCSS} alt="CSS" />
                                </Link>
                            </li>

                        </ul>
                    </Zoom>
                </div>
            </nav>

        </footer>
    );

}