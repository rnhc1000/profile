import './styles.css';
import logoReact from '../../assets/icons/react.svg';
import logoRouter from '../../assets/icons/icons8-javascript.svg';
import logoGit from '../../assets/icons/git-scm-icon.svg';
import logoJS from '../../assets/icons/css3-original-wordmark.svg';
import logoHTML from '../../assets/icons/html5-original-wordmark.svg';
import logoTS from '../../assets/icons/ts-logo-128.svg';
import logoLinux from '../../assets/icons/linux-original.svg';
import Zoom from 'react-reveal/Zoom';

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <p> &copy; 2023 - All Rights Reserved -
                    <span className="waviy">Ricardo Ferreira</span>
                </p>

            </div>
            <Zoom>
                <div className="footer-icons">
                    <img src={logoReact} />
                    <img src={logoTS} />
                    <img src={logoRouter} />
                    <img src={logoGit} />
                    <img src={logoJS} />
                    <img src={logoHTML} />
                    <img src={logoLinux} />
                </div>
            </Zoom>
        </footer>
    );

}