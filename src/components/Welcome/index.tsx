import './styles.css';

import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';
import contactLogo from '../../assets/whatsapp.svg';
import projectsLogo from '../../assets/activity.svg';
import skillsLogo from '../../assets/tools.svg';

export default function Welcome() {

    return (
        <>
            <section id="welcome-section">
                <div className="welcome-container">

                    <dl>
                        <p className="welcome-important">
                            <Zoom>

                                <dd>
                                    <dt> Hi everyone!</dt>
                                    <blockquote>I am a
                                        <Link to="https://www.ferreiras.dev.br/cv/ResumeRicardoFerreira.pdf" target="_blank" className="contact-details"> Full Stack Software Engineer</Link>,
                                        🛠️ who loves to design, code and deploy business applications.
                                        I have been very succesful in being the architect of solutions that have met and even exceeded businesses
                                        and customers requirements in all companies I have been working for, since the very beginning of my career
                                        as a Junior Engineer.
                                    </blockquote>
                                </dd>
                                <dd>
                                    <br />
                                    <dt> Getting up to speed!</dt>
                                    <blockquote>
                                        Playing into this market for almost 25 years 🕵️ I have been exposed to a myriad of
                                        technologies and for some of them, being a very early adopter.
                                        My first contact with a programming language was Pascal in the university, where I learnt the key concepts of any
                                        programming language, but my first professional job was to deal with Assembler (8085, 8086 and Z-80) and C languages, building device drivers for mass storage devices
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
                                        Moved to the networking market
                                        to surf the wave of the Internet at its infancy in the 90s and got the most of that including some Cisco Networking certifications
                                        and from that jumped to Web world 🕸️ and back to software development using LAMP... 🥴 Yeah ... Good times, where you did not
                                        have available frameworks suchs as ReactJS, Angular and others available today to help you build a professional UI/UX front-end
                                        of a web-based application...
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
                                        Currently, I have been playing with PHP, JS, HTML, CSS, Bootstrap, ReactJS for frontend
                                        and and Laravel, Java, Spring Boot for backend apps as well dealing in a daily basis with
                                        CI/CD, Jenkins, SonarQube, SOLID, MVC, Git, SQL and NoSQL databases as MySQL, MongoDB and tools
                                        such as Docker, Portainer, Kubernetes, Nginx and so many exciting technologies to provide secure
                                        first financial applications available at your fingertips across the country, designing, coding and supporting the lifecycle
                                        of cloud-based payment applications.
                                    </blockquote>
                                </dd>
                            </Zoom>
                        </p>
                    </dl>
                    <Rotate top-left>
                        <ul className="welcome-bullets">
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
                        <p className="welcome-important">
                            If you want to go down to the nitty-gritty of my
                            challenging career as a solutions developer, keep in touch clicking at my <span>contacts </span><Link to="/contacts"> <img src={contactLogo}></img></Link>  or 
                            take a quick look at the current projects I am working on, clicking here<Link to="/projects"> <img src={projectsLogo}/></Link> or 
                            even take a look at my current <span>skills</span>
                            <Link to="/skills">
                                <span className="resume">
                                    <img src={skillsLogo}/>
                                </span>
                            </Link>
                        </p>
                    </Zoom>
                </div>
            </section>
        </>
    );
}