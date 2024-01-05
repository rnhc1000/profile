import './styles.css';

import { Link } from 'react-router-dom';
// @ts-ignore
import Zoom from 'react-reveal/Zoom';
// @ts-ignore
import skillLogo from '../../assets/mortarboard.svg';
import contactLogo from '../../assets/whatsapp.svg';
import codeLogo from '../../assets/tools.svg';
import history from '../../assets/txt.svg';
// import Prism from 'prismjs';
// import 'prismjs/components/prism-clike';
// import 'prismjs/themes/prism.css';

//import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

// import "../../css/prism.css";
// import { useEffect } from 'react';


export default function Welcome() {
    // useEffect(() => {
    //     Prism.highlightAll()
    //   }, [])

    return (
        <section id="welcome-section">
            <div className="welcome-container">

                <Zoom>
                    <pre>
                        <code className="welcome">{`
        interface Hello{ 
            String hello();
        }

        public class EveryBody implements Hello {
            public String hello() {
                return ("Hello Everybody!");
            }      
            public static void main(String... args) {
              System.out.println(new Everybody().hello());
            }
        }

        $javac EveryBody.java
        $java  EveryBody
        `}
                        </code>
                    </pre>

                    <Zoom>
                        <h1 className="welcome-important">'Hello Everybody!'</h1>
                    </Zoom>
                    <br></br>

                    <blockquote>
                        I am called <span>Ricardo Ferreira</span> and as a <Link to="https://www.ferreiras.dev.br/cv/ResumeRicardoFerreira.pdf" target="_blank" className="contact-details"> Sr Software Engineer</Link>,
                        🛠️ loves to design, writes clean code and deploy web-based business applications.
                        I have been very succesful being the architect of solutions and applications that have met and even exceeded businesses
                        and customers requirements in all companies I have been working for, specially in the digital payment industry, having deployes
                        over the years, applications that helped retail stores increase their profitablity and keeping up with a
                        fast changing payment requirements. For a comprehensive description of my journey and roadmap up to today,
                        take a look at my history, clicking on the links below to find out more about my career.
                    </blockquote>
                    <br></br>
                </Zoom>

                <Zoom>
                    <div className="contact-me">
                        <Link to='/history'><img data-toggle="tooltip" data-placement="top" data-animation="" title="History" src={history} /></Link>
                        <Link to='/skills'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Skills" src={skillLogo} /></Link>
                        <Link to='/projects'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Projects" src={codeLogo} /></Link>
                        <Link to='/contacts'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Contact" src={contactLogo} /></Link>
                    </div>
                </Zoom>
            </div>
        </section>
    );
}