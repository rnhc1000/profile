import './styles.css';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';


export default function Skill() {

    return (
        <section id="skill-section">
            <div className="skills-container">
                <Zoom>
                    <div className="skills">
                        <ul>
                            <li>
                                <Link rel="dns-prefetch" to="https://ferreiras.dev.br/cv/eCertificateArchitect.pdf" target="_blank">
                                    Oracle Cloud Certified Architect Associate<span> by www.oracle.com</span>
                                </Link>
                            </li>

                            <li>

                                <Link rel="dns-prefetch"to="https://ferreiras.dev.br/cv/eCertificateFoundations.pdf" target="_blank">
                                    Oracle Cloud Certified Foundations Associate<span> by www.oracle.com</span>
                                </Link>
                            </li>

                            <li>

                                <Link rel="dns-prefetch" to="https://ferreiras.dev.br/cv/eCertificateFullStackUnyleya.pdf" target="_blank">
                                    PGDip in Full Stack Web Development<span> by Unyleya University, DF, BR</span>
                                </Link>
                            </li>

                            <li>
                                <Link rel="dns-prefetch" to="https://www.scrumstudy.com/certification/verify?type=SFC&number=984118" target="_blank">
                                    Scrums Foundations Certified<span> by SCRUMstudy - Accreditation Body for Scrum and Agile</span>
                                </Link>
                            </li>

                            <li>
                                <Link rel="dns-prefetch" to='https://paragon.academy/c/18-2287' target="_blank">
                                    ReactJS<span> by devsuperior.com.br</span>
                                </Link>
                            </li>

                            <li>
                                <Link rel="dns-prefetch" to="https://freecodecamp.org/certification/fccafad993d-1fad-465d-a551-3837fe575f0d/responsive-web-design" target="_blank">
                                    Responsive Web Design<span> by freecodecamp.org</span>
                                </Link>
                            </li>

                            <li>
                                <Link rel="dns-prefetch" to="https://www.testdome.com/certificates/a0fda9bbcc034f0ea16c923103481670" target="_blank">OOP
                                    Java Challenge<span> by testdome.com</span>
                                </Link>
                            </li>

                            <li>
                                <Link rel="dns-prefetch" to="https://freecodecamp.org/certification/fccafad993d-1fad-465d-a551-3837fe575f0d/javascript-algorithms-and-data-structures"
                                    target="_blank">
                                    Javascript - Algorithms and Data Structures<span> by freecodecamp.org</span>
                                </Link>
                            </li>

                            <li>
                                <Link rel="dns-prefetch" to="https://www.testdome.com/certificates/78093b6cda7a4a9a8d0525373ca606df" target="_blank">
                                    Linux OS System Administration<span> by testdome.com</span>
                                </Link>
                            </li>

                            <li>
                                <Link rel="dns-prefetch" to="https://www.testdome.com/certificates/9c4c4b6b45c14f18b83802a08b844498" target="_blank">
                                    Javascript Challenge<span> by testdome.com</span>
                                </Link>
                            </li>

                            <li>
                                <Link rel="dns-prefetch" to="https://www.testdome.com/certificates/484a45e105754434b7d047e962ed287e" target="_blank">
                                    Laravel Challenge<span> by testdome.com</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="">PGDip in Software Engineering<span> by Unyleya University, SP, BR</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="#">BSc in Electrical Engineering<span> by Sao Judas University, SP, BR</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="#">PGDip in Computer Science<span> by Mackenzie University SP, BR</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="#">PGDip in Cryptography<span> by Fluminense Federal University, RJ, BR</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Zoom>

            </div>
        </section>
    );
}