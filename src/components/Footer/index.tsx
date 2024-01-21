import './styles.css';
import logoReact from '../../assets/icons/react.svg';
import logoJS from '../../assets/icons/icons8-javascript.svg';
import logoGit from '../../assets/icons/git-scm-icon.svg';
import logoCSS from '../../assets/icons/css3-original-wordmark.svg';
import logoHTML from '../../assets/icons/html5-original-wordmark.svg';
import logoTS from '../../assets/icons/ts-logo-128.svg';
import logoLinux from '../../assets/icons/linux-original.svg';

import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';
import Typewriter from '../../utils/TypeWriter';

export default function Footer() {
    
    return (
        <footer>
            <div className="footer-container">
                <p> &copy; 2024 - All Rights Reserved </p>
                    <span id="footnote" className="waviy">
                    <Typewriter text="Proudly designed and coded by @Ricardo Ferreira!" delay={200} infinite /></span>
            </div>
            <Zoom>
                <div className="footer-icons">
                    <Link to="https://react.dev" target="_blank">
                        <img src={logoReact} />
                    </Link>
                    <Link to="https://typescriptlang.org" target="_blank">
                        <img src={logoTS} />
                    </Link>
                    <Link to="https://www.ecma-international.org" target="_blank">
                        <img src={logoJS} />
                    </Link>
                    <Link to="https://git-scm.com/" target="_blank">
                        <img src={logoGit} />
                    </Link>
                    <Link to="https://www.w3.org/" target="_blank">
                        <img src={logoCSS} />
                    </Link>
                    <Link to="https://html.spec.whatwg.org/" target="_blank">
                        <img src={logoHTML} />
                    </Link>
                    <Link to="https://www.linux.org/" target="_blank">
                        <img src={logoLinux} />
                    </Link>
                </div>
            </Zoom>
        </footer>
    );

}