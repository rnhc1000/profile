import "./styles.css";
import profilePhoto from "../../assets/webp/rnhc.jpg.webp";
import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

import springLogo from "../../assets/svg/Spring_Boot.svg";
import angularLogo from '../../assets/svg/angular-icon.svg';
import reactLogo from "../../assets/svg/react.svg";
import mongoLogo from "../../assets/svg/mongo.svg";
import mysqlLogo from "../../assets/svg/mysql-official.svg";
import jenkinsLogo from "../../assets/svg/Jenkins_logo.svg";
import wakaLogo from "../../assets/svg/java-icon.svg";
import rabbitLogo from "../../assets/svg/rabbitmq-logo-svgrepo-com.svg";
import intellijLogo from "../../assets/icons/IntelliJ_IDEA_Icon.svg";
import gitLogo from "../../assets/icons/git-scm-icon.svg";
import bashLogo from "../../assets/icons/ts-logo.svg";
import dockerLogo from '../../assets/icons/docker-svgrepo-com.svg';
import awsLogo from "../../assets/svg/Amazon_Web_Services_Logo.svg";
import vscodeLogo from "../../assets/icons/icons8-visual-studio-code.svg";
import resumeLogo from "../../assets/svg/cv.svg";



export default function Contact() {

    return (
        <section id="contact-section" className="contacts-section">

            <div className="contacts-section-header">

                <Zoom>
                    <img className="contacts-img" alt="Profile" src={profilePhoto} />
                    <h1>
                        Keep in touch to learn details about projects, coding challenges, tech stack...
                    </h1>
                    <br></br>
                    <h2 className="contacts-section-qanda">
                        Make a break, text me, send me an email or download my resume. &nbsp;<span className="sizeSmiley">&#128073;&#127998;&nbsp;</span>
                        
                        <Link rel="dns-prefetch" to="https://www.ferreiras.dev.br/cv/ResumeRicardoFerreira.pdf" target="_blank" className="contact-details"><img  alt="Resume" src={resumeLogo} /> </Link>
                    </h2>
                    <br></br>
                    <h3 className="questions">Q: What about your current hands-on skills and tech stack?
                    </h3>
                    <br></br>
                    <h3 className="questions">
                        A: I am currently working on some projects developing with the tools below <span className="sizeSmiley"><span>&#128071;&#127998;</span></span>:
                    </h3>
                    <div>
                        <br></br>
                        <img className="contacts-waka" alt="Wakatime" src={wakaLogo} />
                        <img className="contacts-waka" alt="Spring" src={springLogo} />
                        <img className="contacts-waka" alt="Spring" src={rabbitLogo} />
                        <img className="contacts-waka" alt="React" src={reactLogo} />
                        <img className="contacts-waka" alt="React" src={angularLogo} />
                        <img className="contacts-waka" alt="Bash" src={bashLogo} />
                        <img className="contacts-waka" alt="MySQL" src={mysqlLogo} />
                        <img className="contacts-waka" alt="Mongo" src={mongoLogo} />
                        <img className="contacts-waka" alt="Jenkins" src={jenkinsLogo} />
                        <img className="contacts-waka" alt="Spring" src={dockerLogo} width="48px" height="48px" />
                        <img className="contacts-waka" alt="Bash" src={awsLogo} />
                        <img className="contacts-waka" alt="Git" src={gitLogo} />
                        <img className="contacts-waka" alt="IntelliJ" src={intellijLogo} />
                        <img className="contacts-waka" alt="IntelliJ" src={vscodeLogo} />
                    </div>
                    <br></br>
                    <h3 className="questions">Q: Sounds exciting dealing with all these tools. How can I find out more info about these skills?
                    </h3>
                    <br></br>
                    <h3 className="questions">
                        A: Just click here...<Link to='/Wakatime' className="sizeSmiley">✋🏾</Link>
                    </h3>
                    <br></br>
                </Zoom>

            </div>

            <div className="contacts-section-header">

                <Zoom>
                    <h2 className="contacts-section-qanda">
                        Here you have all my contacts!!!.
                    </h2>
                    <h2 className="contacts-section-qanda">
                        Let's get connected...
                    </h2>
                </Zoom>

            </div>

        </section>
    );
}



