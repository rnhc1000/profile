import './styles.css';
import homeLogo from '../../assets/house-check.svg';
import skillLogo from '../../assets/mortarboard.svg';
import contactLogo from '../../assets/whatsapp.svg';
import codeLogo from '../../assets/tools.svg';
import history from '../../assets/txt.svg';

import { Link } from 'react-router-dom';

export default function Header() {

    return (

        <header className="nav-container">
            <nav id="navbar" className="nav-main">
                <Link to='/'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Home" src={homeLogo}/></Link>
                <Link to='/history'><img data-toggle="tooltip" data-placement="top" data-animation="" title="History" src={history}/></Link>
                <Link to='/skills'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Skills" src={skillLogo}/></Link>
                <Link to='/projects'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Projects"src={codeLogo}/></Link>
                <Link to='/contacts'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Contact" src={contactLogo}/></Link>
          
            </nav>
        </header>
    );

}