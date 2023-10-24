import './styles.css';
import projectLogo from '../../assets/projects.png';
import homeLogo from '../../assets/icons8-home-48.png';
import skillLogo from '../../assets/icons8-problem-solving-64.png';
import contactLogo from '../../assets/chat_7422510.png';

import { Link } from 'react-router-dom';

export default function Header() {

    return (

        <header className="nav-container">
            <nav id="navbar" className="nav-main">
                <Link to='/'><img src={homeLogo}/></Link>
                <Link to='/projects'><img src={projectLogo}/></Link>
                <Link to='/skills'><img src={skillLogo}/></Link>
                <Link to="/contacts"><img src={contactLogo}/></Link>
            </nav>
        </header>
    );

}