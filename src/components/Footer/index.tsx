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
import CountUp from 'react-countup';

export default function Footer() {
    
    return (
        <footer>
            <div className="footer-container">
            <CountUp separator="" delay={2} end={2024} />
                 &copy;Ricardo Ferreira - All rights reserved
                    <span id="footnote" className="waviy">
                    <Typewriter text="Powered by AWS EC2" delay={200} infinite /></span>
            </div>
            <Zoom>
                <div className="footer-icons">
                    <Link to="https://react.dev" target="_blank" aria-label="Visit react.dev">
                        <img src={logoReact} alt="ReactJS" />
                    </Link>
                    <Link to="https://typescriptlang.org" target="_blank" aria-label="Visit typescriptlang.org">
                        <img src={logoTS} alt="Typescript" />
                    </Link>
                    <Link to="https://www.ecma-international.org" target="_blank" aria-label="Visit ecma-international.org">
                        <img src={logoJS} alt="Javascript" />
                    </Link>
                    <Link to="https://git-scm.com/" target="_blank" aria-label="Visit git-scm.com">
                        <img src={logoGit} alt="Git" />
                    </Link>
                    <Link to="https://www.w3.org/" target="_blank" aria-label="Visit w3.org">
                        <img src={logoCSS} alt="CSS"/>
                    </Link>
                    <Link to="https://html.spec.whatwg.org/" target="_blank" aria-label="Visit html.spec.whatwg.org">
                        <img src={logoHTML} alt="HTML" />
                    </Link>
                    <Link to="https://www.linux.org/" target="_blank" aria-label="Visit linux.org">
                        <img src={logoLinux} alt="Linux" />
                    </Link>
                </div>
            </Zoom>
        </footer>
    );

}