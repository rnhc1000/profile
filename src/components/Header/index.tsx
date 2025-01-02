import './styles.css';
import homeLogo from '../../assets/images/svg/house-check.svg';
import skillLogo from '../../assets/images/svg/mortarboard.svg';
import contactLogo from '../../assets/images/svg/whatsapp.svg';
import codeLogo from '../../assets/images/svg/tools.svg';
import history from '../../assets/images/svg/book.svg';
import gitLogo from '../../assets/images/svg/code-slash.svg'
import logo from '../../assets/images/webp/avatar.png.webp';

import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <header>
            <nav id="navbar" className="nav-main">
                <div className="nav-brand">
                    <img data-toggle="tooltip" data-placement="top" data-animation="" title="Home" src={logo} alt="avatar by Meta&copy;" />  
                </div>

                <ul className="nav-list">
                    <li>
                        <Link to='/'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Home" src={homeLogo} alt="Logo" /></Link>
                    </li>

                    <li>
                        <Link to='/history'><img data-toggle="tooltip" data-placement="top" data-animation="" alt="History" title="History" src={history} /></Link>
                    </li>

                    <li>
                        <Link to='/skills'><img data-toggle="tooltip" data-placement="top" data-animation="" alt="Skills" title="Skills" src={skillLogo} /></Link>
                    </li>

                    <li>
                        <Link to='/projects'><img data-toggle="tooltip" data-placement="top" data-animation="" alt="Projects" title="Projects" src={codeLogo} /></Link>
                    </li>

                    <li>
                        <Link to='/contacts'><img data-toggle="tooltip" data-placement="top" data-animation="" alt="Contacts" title="Contact" src={contactLogo} /></Link>
                    </li>

                    <li>
                        <Link to='/wakatime'><img data-toggle="tooltip" data-placement="top" data-animation="" alt="Code" title="Code" src={gitLogo} /></Link>
                    </li>
                </ul>

            </nav>
        </header>
    );

}