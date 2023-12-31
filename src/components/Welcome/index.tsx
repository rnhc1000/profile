import './styles.css';

import { Link } from 'react-router-dom';
// @ts-ignore
import Zoom from 'react-reveal/Zoom';
// @ts-ignore
import Rotate from 'react-reveal/Rotate';
import contactLogo from '../../assets/whatsapp.svg';
import codeLogo from '../../assets/activity.svg';
import skillLogo from '../../assets/tools.svg';
import history from '../../assets/history.svg';
import prism from 'prismjs';
import "../../css/prism.css";


export default function Welcome() {

    return (
        <section id="welcome-section">
            <div className="welcome-container">
                
                <Zoom>
                    <pre>
                        <code className="language-javadoc">{`
        class HelloWorld {
            public static main void(String... args) {
                System.out.println("Hello everybody!");
            }
        }
                            `}
                        </code>
                    </pre>
                    <br></br>

                    <blockquote>
                        I am called <span>Ricardo Ferreira</span> and as a <Link to="https://www.ferreiras.dev.br/cv/ResumeRicardoFerreira.pdf" target="_blank" className="contact-details"> Sr Software Engineer</Link>,
                        🛠️ loves to design, writes clean code and deploy web-based business applications.
                        I have been very succesful in being the architect of solutions and applications that have met and even exceeded businesses
                        and customers requirements in all companies I have been working for. For a comprehensive description of my journey,
                        take a look at my history, clicking here. <Link to="/skills"><img src={history}></img></Link>
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