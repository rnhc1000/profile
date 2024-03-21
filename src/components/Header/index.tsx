import './styles.css';
import homeLogo from '../../assets/svg/house-check.svg';
import skillLogo from '../../assets/svg/mortarboard.svg';
import contactLogo from '../../assets/svg/whatsapp.svg';
import codeLogo from '../../assets/svg/tools.svg';
import history from '../../assets/svg/txt.svg';

import { Link } from 'react-router-dom';

export default function Header() {

    return (

        <header className="nav-container">
            <nav id="navbar" className="nav-main">
                <Link to='/'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Home" src={homeLogo}/></Link>
                <Link to='/history'><img data-toggle="tooltip" data-placement="top" data-animation="" alt = "History" title="History" src={history}/></Link>
                <Link to='/skills'><img data-toggle="tooltip" data-placement="top" data-animation="" alt="Skills" title="Skills" src={skillLogo}/></Link>
                <Link to='/projects'><img data-toggle="tooltip" data-placement="top" data-animation="" alt="Projects" title="Projects"src={codeLogo}/></Link>
                <Link to='/contacts'><img data-toggle="tooltip" data-placement="top" data-animation="" alt="Contacts" title="Contact" src={contactLogo}/></Link>
          
            </nav>
        </header>
    );

}