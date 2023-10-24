import './styles.css';

import { Link } from 'react-router-dom';


export default function Skill() {

    return (
        <>
            <section id="skill-section" className="skills-section">
                <div className="skills-section-header">
                    <h3>Here are some of my key skills</h3>
                </div>
                <div className="skills">
                    <ul>
                        <li>
                            <Link to="cv/eCertificateArchitect.pdf" target="_blank"></Link>
                            Oracle Cloud Certified Architect Associate
                            <span> by www.oracle.com</span>

                        </li>

                        <li>

                            <Link to="cv/eCertificateFoundations.pdf" target="_blank"></Link>
                            Oracle Cloud Certified Foundations Associate
                            <span> by www.oracle.com</span>
                        </li>

                        <li>

                            <Link to="cv/eCertificateFullStackUnyleya.pdf" target="_blank"></Link>
                            PGDip in Full Stack Web Development
                            <span> by Unyleya University, DF, BR</span>

                        </li>

                        <li>
                            <Link to="https://www.scrumstudy.com/certification/verify?type=SFC&number=984118" target="_blank"></Link>
                            Scrums Foundations Certified
                            <span> by SCRUMstudy - Accreditation Body for Scrum and Agile</span>
                        </li>

                        <li>
                            <Link to="https://freecodecamp.org/certification/fccafad993d-1fad-465d-a551-3837fe575f0d/responsive-web-design" target="_blank"></Link>
                            Responsive Web Design
                            <span> by freecodecamp.org</span>
                        </li>

                        <li>
                            <Link to="https://www.testdome.com/certificates/a0fda9bbcc034f0ea16c923103481670" target="_blank"></Link>OOP
                                Java Challenge
                            <span> by testdome.com</span>
                        </li>

                        <li>
                            <Link to="https://freecodecamp.org/certification/fccafad993d-1fad-465d-a551-3837fe575f0d/javascript-algorithms-and-data-structures"
                                target="_blank"></Link> 
                                Javascript - Algorithms and Data Structures
                            <span> by freecodecamp.org</span>
                        </li>

                        <li>
                            <Link to="https://www.testdome.com/certificates/78093b6cda7a4a9a8d0525373ca606df" target="_blank"></Link>
                                Linux OS System Administration
                             <span> by testdome.com</span>
                        </li>

                        <li>
                            <Link to="https://www.testdome.com/certificates/9c4c4b6b45c14f18b83802a08b844498" target="_blank"></Link>
                                Javascript Challenge
                            <span> by testdome.com</span>
                        </li>

                        <li>
                            <Link to="https://www.testdome.com/certificates/484a45e105754434b7d047e962ed287e" target="_blank"></Link>
                                Laravel Challenge
                            <span> by testdome.com</span>
                        </li>

                        <li>
                            <Link to="">PGDip in Software Engineering</Link>
                            <span> by Unyleya University, SP, BR</span>
                        </li>

                        <li>
                            <Link to="#">BSc in Electrical Engineering</Link>
                            <span> by Sao Judas University, SP, BR</span>
                        </li>

                        <li>
                            <Link to="#">PGDip in Computer Science </Link>
                            <span> by Mackenzie University SP, BR</span>
                        </li>

                        <li>
                            <Link to="#">PGDip in Cryptography</Link>
                            <span> by Fluminense Federal University, RJ, BR</span>
                        </li>
                    </ul>
                </div>
            </section>
        </>

    );
}