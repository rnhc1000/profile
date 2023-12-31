import './styles.css';

import { Link } from 'react-router-dom';
// @ts-ignore
import Zoom from 'react-reveal/Zoom';
// @ts-ignore
import Rotate from 'react-reveal/Rotate';
import contactLogo from '../../assets/whatsapp.svg';
import codeLogo from '../../assets/activity.svg';
import skillLogo from '../../assets/tools.svg';


export default function Welcome() {

    return (
        <section id="welcome-section">
            <div className="welcome-container">
                <p className="welcome-important"></p>
                    <Zoom>
                        <dt> Hi everyone!</dt>
                        <blockquote>
                            I am called <span>Ricardo Ferreira</span> and as a <Link to="https://www.ferreiras.dev.br/cv/ResumeRicardoFerreira.pdf" target="_blank" className="contact-details"> Full Stack Software Engineer</Link>,
                            🛠️ love to design, write clean code and deploy business applications.
                            I have been very succesful in being the architect of solutions that have met and even exceeded businesses
                            and customers requirements in all companies I have been working for, since the very beginning of my career
                            as a Junior Engineer.
                        </blockquote>
                    </Zoom>

                    <Zoom>
                        <div className="contact-me">
                            <Link to="/projects"><img src={codeLogo}></img></Link>
                            <Link to="/skills"><img src={skillLogo}></img></Link>
                            <Link to="/contacts"><img src={contactLogo}></img></Link>
                        </div>
                    </Zoom>
            </div>
        </section>
    );
}