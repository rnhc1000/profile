import './styles.css';
import homeLogo from '../../assets/house-check.svg';
import skillLogo from '../../assets/tools.svg';
import contactLogo from '../../assets/whatsapp.svg';
import codeLogo from '../../assets/activity.svg';

import { Link } from 'react-router-dom';

export default function Header() {

    return (

        <header className="nav-container">
            <nav id="navbar" className="nav-main">
                <Link to='/'><img src={homeLogo}/></Link>
                <Link to='/projects'><img src={codeLogo}/></Link>
                <Link to='/skills'><img src={skillLogo}/></Link>
                <Link to="/contacts"><img src={contactLogo}/></Link>
            </nav>
        </header>
    );

}