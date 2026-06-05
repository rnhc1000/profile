import './styles.css';
import { Link } from 'react-router-dom';
import { Zoom, Fade } from "react-awesome-reveal";

export default function Skill() {

    return (
        <section id="skill-section">
            <div className="skills-container">

                <Fade>
                    <p className="skills-greeting">Credentials</p>
                    <h1 className="skills-title">Skills & Certifications</h1>
                    <p className="skills-subtitle">Continuous learning in cloud, development, and architecture</p>
                </Fade>

                <div className="skills-grid">
                    <Zoom>
                        <div className="skills-category skills-highlight">
                            <h2 className="category-title">
                                <span className="category-icon">🤖</span>
                                Artificial Intelligence
                            </h2>
                            <ul className="skills-list">
                                <li>
                                    <span className="skill-link skill-in-progress">
                                        <span className="skill-name">PGDip Artificial Intelligence Expert</span>
                                        <span className="skill-issuer">UFV — In Progress</span>
                                    </span>
                                </li>
                                <li>
                                    <span className="skill-link skill-in-progress">
                                        <span className="skill-name">PGDip Artificial Intelligence Expert</span>
                                        <span className="skill-issuer">UniPDS — In Progress</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </Zoom>

                    <Zoom>
                        <div className="skills-category skills-highlight">
                            <h2 className="category-title">
                                <span className="category-icon">☕</span>
                                Java & Backend
                            </h2>
                            <ul className="skills-list">
                                <li>
                                    <Link to="https://www.ferreiras.dev.br/assets/images/webp/certificado-java-elite.png" target="_blank" className="skill-link">
                                        <span className="skill-name">Post-Graduate in Java Applied Engineering</span>
                                        <span className="skill-issuer">Java Elite</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.testdome.com/certificates/a0fda9bbcc034f0ea16c923103481670" target="_blank" className="skill-link">
                                        <span className="skill-name">OOP Java Challenge</span>
                                        <span className="skill-issuer">TestDome</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Zoom>

                    <Zoom>
                        <div className="skills-category">
                            <h2 className="category-title">
                                <span className="category-icon">☁️</span>
                                Cloud & Architecture
                            </h2>
                            <ul className="skills-list">
                                <li>
                                    <Link to="https://ferreiras.dev.br/cv/eCertificateArchitect.pdf" target="_blank" className="skill-link">
                                        <span className="skill-name">Oracle Cloud Certified Architect Associate</span>
                                        <span className="skill-issuer">Oracle</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://ferreiras.dev.br/cv/eCertificateFoundations.pdf" target="_blank" className="skill-link">
                                        <span className="skill-name">Oracle Cloud Certified Foundations Associate</span>
                                        <span className="skill-issuer">Oracle</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Zoom>

                    <Zoom>
                        <div className="skills-category">
                            <h2 className="category-title">
                                <span className="category-icon">⚛️</span>
                                Frontend & Web
                            </h2>
                            <ul className="skills-list">
                                <li>
                                    <Link to="https://paragon.academy/c/18-2287" target="_blank" className="skill-link">
                                        <span className="skill-name">ReactJS</span>
                                        <span className="skill-issuer">DevSuperior</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://freecodecamp.org/certification/fccafad993d-1fad-465d-a551-3837fe575f0d/responsive-web-design" target="_blank" className="skill-link">
                                        <span className="skill-name">Responsive Web Design</span>
                                        <span className="skill-issuer">freeCodeCamp</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://freecodecamp.org/certification/fccafad993d-1fad-465d-a551-3837fe575f0d/javascript-algorithms-and-data-structures" target="_blank" className="skill-link">
                                        <span className="skill-name">JavaScript Algorithms & Data Structures</span>
                                        <span className="skill-issuer">freeCodeCamp</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Zoom>

                    <Zoom>
                        <div className="skills-category">
                            <h2 className="category-title">
                                <span className="category-icon">🎓</span>
                                Academic
                            </h2>
                            <ul className="skills-list">
                                <li>
                                    <Link to="https://ferreiras.dev.br/cv/eCertificateFullStackUnyleya.pdf" target="_blank" className="skill-link">
                                        <span className="skill-name">PGDip Full Stack Web Development</span>
                                        <span className="skill-issuer">Unyleya University</span>
                                    </Link>
                                </li>
                                <li>
                                    <span className="skill-link">
                                        <span className="skill-name">PGDip Software Engineering</span>
                                        <span className="skill-issuer">Unyleya University</span>
                                    </span>
                                </li>
                                <li>
                                    <span className="skill-link">
                                        <span className="skill-name">PGDip Computer Science</span>
                                        <span className="skill-issuer">Mackenzie University</span>
                                    </span>
                                </li>
                                <li>
                                    <span className="skill-link">
                                        <span className="skill-name">PGDip Cryptography</span>
                                        <span className="skill-issuer">Fluminense Federal University</span>
                                    </span>
                                </li>
                                <li>
                                    <span className="skill-link">
                                        <span className="skill-name">BSc Electrical Engineering</span>
                                        <span className="skill-issuer">São Judas University</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </Zoom>

                    <Zoom>
                        <div className="skills-category">
                            <h2 className="category-title">
                                <span className="category-icon">🔄</span>
                                Agile & Methodology
                            </h2>
                            <ul className="skills-list">
                                <li>
                                    <Link to="https://www.scrumstudy.com/certification/verify?type=SFC&number=984118" target="_blank" className="skill-link">
                                        <span className="skill-name">Scrum Foundations Certified</span>
                                        <span className="skill-issuer">SCRUMstudy</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Zoom>
                </div>

            </div>
        </section>
    );
}