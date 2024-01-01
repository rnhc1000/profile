import './styles.css';

import { Link } from 'react-router-dom';
// @ts-ignore
import Zoom from 'react-reveal/Zoom';
// @ts-ignore
import Rotate from 'react-reveal/Rotate';
import homeLogo from '../../assets/house-check.svg';
import skillLogo from '../../assets/mortarboard.svg';
import contactLogo from '../../assets/whatsapp.svg';
import codeLogo from '../../assets/tools.svg';


export default function History() {

    return (
        <section id="history-section">
            <div className="history-container">
                <h3>Take a quick look at my journey!</h3>


                <dl>
                    <p className="history-important">
                        <Zoom>

                            <dd>
                                <br />
                                <dt> Getting up to speed!</dt>
                                <blockquote>
                                    Playing into this market for almost 25 years 🕵️ I have been exposed to a myriad of
                                    technologies and for some of them, being a very early adopter.
                                    My first contact with a programming language was Pascal in the university, where I learnt the key concepts of any
                                    programming language, but my first professional job was to deal with Assembler (8085, 8086 and Z-80) and C languages,
                                    building device drivers for mass storage devices
                                    for the x86 platform (yep, XT and AT IBM PCs), having Turbo C and Turbo Assembler, by Herbert Schildt, as my bedside books
                                    to put some light on to those hours coding in C and using inline Assembler 👨‍💻. Loved it 💘 ...
                                </blockquote>
                            </dd>
                        </Zoom>
                        <Zoom>
                            <dd>
                                <br />
                                <dt> Surfing the web...</dt>
                                <blockquote>
                                    Moved to the networking market to surf the wave of the Internet at its infancy in the 90s and got the most of that
                                    getting some Cisco Networking certifications and help to build the infrastructure of systems integration service provider
                                    and from that jumped to Web world 🕸️ and back to software development using LAMP "framework" (Linux, Apache, MySQL and PHP)...
                                    🥴 Yeah ... Good times or not, when you did not have available frameworks as you have currently such as ReactJS, Angular and others
                                    available today to help you build a dynamic and responsive UI/UX front-end application...
                                </blockquote>
                            </dd>
                            <br />
                            <dt> Back to Dev</dt>
                            <dd>
                                <blockquote>Back again to the university 👨‍🎓 to get a Software Engineering postdegree and dove deeply into
                                    the OOP concepts, Java and Spring framework to increase my game and worked hard over the past years, to keep delivering clean,
                                    stable, mantainable and scalable applications.
                                </blockquote>
                            </dd>
                        </Zoom>
                        <br />
                        <Zoom>
                            <dt> Current Stack</dt>
                            <dd>
                                <blockquote>
                                    My current stack is Java, Spring Boot and PostgreSQL for backend applications building REST APIs
                                    to support the business scalability and JavaScript, ReactJS for frontend applications.
                                    Besides this responsability I have dealt in a daily basis with CI/CD, Jenkins, SonarQube, SOLID, MVC, Git,
                                    NoSQL databases as MongoDB and tools such as Docker, Portainer, Kubernetes, Nginx and so many exciting technologies
                                    to provide secure-first financial applications available at each retail store across the country, capturing digital
                                    payments, preprocessing them, requiring authorization and help to improve the retail store productivity  and profitability.
                                </blockquote>
                            </dd>
                        </Zoom>
                    </p>
                </dl>
                <Rotate top-left>
                    <ul className="history-bullets">
                        <li>Design, Development and Deployment of web-based digital payment applications,</li>
                        <li>Development and Deployment of OOP applications, </li>
                        <li>Creating and maintaining a Jenkins-based pipeline for CI/CD,</li>
                        <li>Writing Clean Code using Design Patterns as SOLID, MVC, etc</li>
                        <li>Extensive knowledge of CSS, HTML, Javascript and ReactJS for front-end app,</li>
                        <li>Extensive knowledge of MySQL, PHP, Java and Spring Boot for backend app</li>
                        <li>Extensive knowledge of Linux, Bash, Script-based Automation, Reverse Proxy and DNS</li>
                        <li>Extensive knowledge of IntelliJ and VSCode</li>
                    </ul>
                </Rotate>
                <Zoom>
                    <p className="history-important">
                        If you want to go down to the nitty-gritty of my
                        challenging career as a solutions developer, text me, call me or drop me a quick message and
                        I will return as soon as possible.
                    </p>
                </Zoom>
                <Zoom>
                    <div className="contact-me">
                        <Link to="/"><img src={homeLogo}></img></Link>
                        <Link to="/projects"><img src={codeLogo}></img></Link>
                        <Link to="/skills"><img src={skillLogo}></img></Link>
                        <Link to="/contacts"><img src={contactLogo}></img></Link>
                    </div>
                </Zoom>
            </div>
        </section>
    );
}