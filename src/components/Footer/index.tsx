import './styles.css';
import logoReact from '../../assets/icons/react.svg';
import logoJS from '../../assets/icons/icons8-javascript.svg';
import logoGit from '../../assets/icons/git-scm-icon.svg';
import logoCSS from '../../assets/icons/docker-svgrepo-com.svg';
import logoHTML from '../../assets/icons/react-router.svg';
import logoTS from '../../assets/icons/ts-logo.svg';
import logoLinux from '../../assets/icons/linux-original.svg';


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
                            <Link rel="dns-prefetch" to="https://typescriptlang.org" target="_blank" aria-label="Visit typescriptlang.org">
                                <img src={logoTS} alt="Typescript" />
                            </Link>
                        </li>

                        <li>
                            <Link rel="dns-prefetch" to="https://react.dev" target="_blank" aria-label="Visit react.dev">
                                <img src={logoReact} alt="ReactJS" />
                            </Link>
                        </li>

                        <li>
                            <Link rel="dns-prefetch" to="https://www.ecma-international.org" target="_blank" aria-label="Visit ecma-international.org">
                                <img src={logoJS} alt="Javascript" />
                            </Link>
                        </li>

                        <li>
                            <Link to="https://git-scm.com/" target="_blank" aria-label="Visit git-scm.com">
                                <img src={logoGit} alt="Git" />
                            </Link>
                        </li>

                        <li>
                            <Link rel="dns-prefetch" to="https://www.w3.org/" target="_blank" aria-label="Visit w3.org">
                                <img src={logoCSS} alt="CSS" />
                            </Link>
                        </li>

                        <li>
                            <Link rel="dns-prefetch" to="https://html.spec.whatwg.org/" target="_blank" aria-label="Visit html.spec.whatwg.org">
                                <img src={logoHTML} alt="HTML" />
                            </Link>
                        </li>

                        <li>
                            <Link rel="dns-prefetch" to="https://www.linux.org/" target="_blank" aria-label="Visit linux.org">
                                <img src={logoLinux} alt="Linux" />
                            </Link>
                        </li>
                    </ul>
                    </Zoom>
                </div>
            </nav>
 
        </footer>
    );

}