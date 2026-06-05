import "./styles.css";
import { Link } from "react-router-dom";
import { Zoom, Fade } from "react-awesome-reveal";

import springLogo from "../../assets/images/svg/Spring_Boot.svg";
import kafkalogo from '../../assets/images/svg/apache_kafka-icon.svg';
import reactLogo from "../../assets/images/svg/react.svg";
import mongoLogo from "../../assets/images/svg/mongo.svg";
import mysqlLogo from "../../assets/images/svg/mysql-official.svg";
import jenkinsLogo from "../../assets/images/svg/Jenkins_logo.svg";
import wakaLogo from "../../assets/images/svg/java-icon.svg";
import intellijLogo from "../../assets/images/icons/IntelliJ_IDEA_Icon.svg";
import gitLogo from "../../assets/images/icons/git-scm-icon.svg";
import bashLogo from "../../assets/images/icons/ts-logo.svg";
import dockerLogo from '../../assets/images/icons/docker-svgrepo-com.svg';
import awsLogo from "../../assets/images/svg/Amazon_Web_Services_Logo.svg";
import vscodeLogo from "../../assets/images/icons/icons8-visual-studio-code.svg";
import spark from "../../assets/images/svg/apache_spark-ar21~bgwhite.svg";
import kubernetes from "../../assets/images/svg/kubernetes.svg";
import logo from '../../assets/images/webp/avatar.png.webp';

export default function Contact() {

    return (
        <section id="contact-section" className="contacts-section">

            <Fade>
                <div className="contacts-header">
                    <p className="contacts-greeting">Get in Touch</p>
                    <h1 className="contacts-title">Let's Connect</h1>
                    <p className="contacts-subtitle">Open to opportunities, collaborations, and conversations</p>
                </div>
            </Fade>

            <Zoom>
                <div className="contacts-profile">
                    <img className="contacts-img" alt="Ricardo Ferreira" src={logo} />
                </div>
            </Zoom>

            <div className="contacts-content">
                <Zoom>
                    <div className="contacts-card">
                        <h2 className="card-title">📧 Reach Out</h2>
                        <p className="card-text">
                            Have a project in mind? Looking for a Java/Spring expert? 
                            Let's discuss how I can help bring your ideas to life.
                        </p>
                        <div className="contacts-actions">
                            <Link to="mailto:ricardo@ferreiras.dev.br" className="contact-btn contact-btn-primary">
                                Send Email
                            </Link>
                            <Link to="https://www.ferreiras.dev.br/cv/ResumeRicardoFerreira.pdf" target="_blank" className="contact-btn">
                                📄 Download Resume
                            </Link>
                        </div>
                    </div>
                </Zoom>

                <Zoom>
                    <div className="contacts-card">
                        <h2 className="card-title">🛠️ Current Stack</h2>
                        <p className="card-text">Technologies I work with daily:</p>
                        <div className="contacts-tech">
                            <img className="tech-icon" alt="Java" src={wakaLogo} title="Java" />
                            <img className="tech-icon" alt="Spring Boot" src={springLogo} title="Spring Boot" />
                            <img className="tech-icon" alt="Kafka" src={kafkalogo} title="Kafka" />
                            <img className="tech-icon" alt="Spark" src={spark} title="Apache Spark" />
                            <img className="tech-icon" alt="Kubernetes" src={kubernetes} title="Kubernetes" />
                            <img className="tech-icon" alt="TypeScript" src={bashLogo} title="TypeScript" />
                            <img className="tech-icon" alt="MySQL" src={mysqlLogo} title="MySQL" />
                            <img className="tech-icon" alt="MongoDB" src={mongoLogo} title="MongoDB" />
                            <img className="tech-icon" alt="Jenkins" src={jenkinsLogo} title="Jenkins" />
                            <img className="tech-icon" alt="Docker" src={dockerLogo} title="Docker" />
                            <img className="tech-icon" alt="React" src={reactLogo} title="React" />
                            <img className="tech-icon" alt="AWS" src={awsLogo} title="AWS" />
                            <img className="tech-icon" alt="Git" src={gitLogo} title="Git" />
                            <img className="tech-icon" alt="IntelliJ" src={intellijLogo} title="IntelliJ IDEA" />
                            <img className="tech-icon" alt="VS Code" src={vscodeLogo} title="VS Code" />
                        </div>
                        <Link to='/wakatime' className="card-link">View detailed stats →</Link>
                    </div>
                </Zoom>

                <Zoom>
                    <div className="contacts-card">
                        <h2 className="card-title">🔗 Connect</h2>
                        <p className="card-text">Find me on social platforms:</p>
                        <div className="social-links">
                            <Link to="https://www.linkedin.com/in/ricardoaferreirasilva/" target="_blank" className="social-btn">
                                <i className="fab fa-linkedin-in"></i> LinkedIn
                            </Link>
                            <Link to="https://github.com/rnhc1000" target="_blank" className="social-btn">
                                <i className="fab fa-github"></i> GitHub
                            </Link>
                            <Link to="https://wa.me/5571993005555" target="_blank" className="social-btn">
                                <i className="fab fa-whatsapp"></i> WhatsApp
                            </Link>
                            <Link to="https://t.me/RicardoFerreira57" target="_blank" className="social-btn">
                                <i className="fab fa-telegram"></i> Telegram
                            </Link>
                        </div>
                    </div>
                </Zoom>
            </div>

        </section>
    );
}



