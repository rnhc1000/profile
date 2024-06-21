import './styles.css';

import Zoom from 'react-reveal/Zoom';


export default function History() {

    return (
        <section id="history-section">
            <div className="history-container">
                <h1>Surfing the roadmap of my career!</h1>
                <dl>
                    <p className="history-important">
                        <Zoom>

                            <dd>
                                <br />
                                <h2>Getting started!</h2>
                                <blockquote className="history-quote">
                                    Playing into this market for almost 25 years 🕵️ I have been exposed to a myriad of technologies and for some of them, 
                                    being a very early adopter.
                                    My first contact with a programming language was Pascal in the university, where I learnt the key concepts of every
                                    programming language, but my first professional job was to deal with <span className="dt">Assembler</span> (8085, 8086 and Z-80) and <span className="dt">C</span> language,
                                    building device drivers for mass storage devices
                                    for the x86 platform (yep, XT and AT IBM PCs), having Turbo C and Turbo Assembler, by Herbert Schildt, as my bedside books
                                    to put some light on to those hours coding low-level 👨‍💻. Loved it 
                                </blockquote>
                            </dd>
                        </Zoom>
                        <Zoom>
                            <dd>
                                <br />
                                <dt> Surfing the web...</dt>
                                <blockquote className="history-quote">
                                    I jumped into networking market to surf the Internet wave at its infancy in the 90s and in order to tackle all brand new technologies, got some Cisco Networking certifications, to architect and build the web infrastructure of one the biggest networking and systems integration services provider. The jump to Web 🕸️ world  was natural and back to software development using <span className="dt">LAMP "framework" (Linux, Apache, MySQL and PHP)</span>...
                                    🥴 Yeah ... Good times or not so good, because you did not have available frameworks as you have currently such as ReactJS, Angular and others available today to help you build a dynamic and responsive UI/UX front-end application but you had to get the job done with the resources available. 🕵🏾
                                </blockquote>
                            </dd>
                            <br />
                            <dt> Increasing Hard Skills</dt>
                            <dd>
                                <blockquote className="history-quote">
                                    Back again to university 👨‍🎓 to get a Software Engineering postdegree and tackle OOP concepts, Design Patterns, Rest APIs, Databases, backend and frontend frameworks to increase my game and worked hard over the past years, to keep delivering clean, stable, mantainable and scalable applications.
                                </blockquote>
                            </dd>
                        </Zoom>
                        <br />
                        <Zoom>
                            <dt> Current Stack 👨🏾‍💻</dt>
                            <dd>
                                <blockquote className="history-quote">
                                    My current tech stack is <span className="dt">Java, Spring Boot and MySQL/MongoDB</span> for backend applications building REST APIs
                                    to support the business scalability and <span className="dt">Javascript, ReactJS, HTML, CSS </span>for frontend applications.
                                    Besides this responsability I have dealt in a daily basis with AWS S3, AWS EC2, Oracle Cloud, CI/CD, Jenkins, SonarQube, Git, NoSQL databases as MongoDB and tools such as Docker, Portainer, Kubernetes, Nginx and so many exciting technologies
                                    to provide secure-first financial applications available at each retail store across the country, capturing digital
                                    payments, preprocessing them, requiring authorization and help to improve the retail store productivity and profitability.
                                </blockquote>
                            </dd>
                        </Zoom>
                    </p>
                </dl>
                    <ul className="history-bullets">
                        <li>&#128204; Design, Development and Deployment of web-based digital payment applications,</li>
                        <li>&#128204;Development and Deployment of API Rest applications, </li>
                        <li>&#128204;Creating and maintaining a Jenkins-based pipeline for CI/CD,</li>
                        <li>&#128204;Writing Clean Code using Design Patterns as SOLID, MVC, etc</li>
                        <li>&#128204;Extensive knowledge of CSS, HTML, Javascript and ReactJS for front-end applications,</li>
                        <li>&#128204;Extensive knowledge of MySQL, PHP, Java and Spring Boot for backend applications</li>
                        <li>&#128204;Extensive knowledge of Linux, Bash, Script-based Automation, Reverse Proxy and DNS</li>
                        <li>&#128204;Cloud Certified Architect with extensive knowledge of services architecture and systems integration</li>
                    </ul>
                <Zoom>                                                                                                                                                                    
                    <p className="history-important">
                        If you want to go down to the nitty-gritty of my
                        challenging career as a solutions developer, text me, call me or drop me a quick message and
                        I will return as soon as possible.
                    </p>
                </Zoom>

            </div>
        </section>
    );
}