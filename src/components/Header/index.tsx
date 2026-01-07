import './styles.css';
import homeLogo from '../../assets/images/svg/house-check.svg';
import skillLogo from '../../assets/images/svg/mortarboard.svg';
import contactLogo from '../../assets/images/svg/whatsapp.svg';
import codeLogo from '../../assets/images/svg/tools.svg';
import history from '../../assets/images/svg/book.svg';
import gitLogo from '../../assets/images/svg/code-slash.svg'
import logo from '../../assets/png/iconRferreiraBlack.png';

import { NavLink } from 'react-router-dom';

export default function Header() {

    return (
        <header>
            <nav id="navbar" className="nav-main">
                <div className="nav-brand">
                    <img data-toggle="tooltip" data-placement="top" data-animation="" title="Home" src={logo} alt="avatar by Meta&copy;" />  
                </div>

                <ul className="nav-list">
                    <li>
                        <NavLink to='/' aria-label="Home" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}><img data-toggle="tooltip" data-placement="top" data-animation="" title="Home" src={homeLogo} alt="Home" /></NavLink>
                    </li>

                    <li>
                        <NavLink to='/history' aria-label="History" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}><img data-toggle="tooltip" data-placement="top" data-animation="" alt="History" title="History" src={history} /></NavLink>
                    </li>

                    <li>
                        <NavLink to='/skills' aria-label="Skills" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}><img data-toggle="tooltip" data-placement="top" data-animation="" alt="Skills" title="Skills" src={skillLogo} /></NavLink>
                    </li>

                    <li>
                        <NavLink to='/projects' aria-label="Projects" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}><img data-toggle="tooltip" data-placement="top" data-animation="" alt="Projects" title="Projects" src={codeLogo} /></NavLink>
                    </li>

                    <li>
                        <NavLink to='/contacts' aria-label="Contacts" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}><img data-toggle="tooltip" data-placement="top" data-animation="" alt="Contacts" title="Contact" src={contactLogo} /></NavLink>
                    </li>

                    <li>
                        <NavLink to='/wakatime' aria-label="Wakatime" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}><img data-toggle="tooltip" data-placement="top" data-animation="" alt="Code" title="Code" src={gitLogo} /></NavLink>
                    </li>
                </ul>

            </nav>
        </header>
    );

}