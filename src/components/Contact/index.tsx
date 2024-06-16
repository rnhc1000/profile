import "./styles.css";
import profilePhoto from "../../assets/webp/rnhc.jpg.webp";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

import springLogo from "../../assets/svg/Spring_Boot.svg";
import angularLogo from '../../assets/svg/angular-icon.svg';
import reactLogo from "../../assets/svg/react.svg";
import mongoLogo from "../../assets/svg/mongo.svg";
import mysqlLogo from "../../assets/svg/mysql-official.svg";
import jenkinsLogo from "../../assets/svg/Jenkins_logo.svg";
import wakaLogo from "../../assets/svg/java-icon.svg";
import intellijLogo from "../../assets/icons/IntelliJ_IDEA_Icon.svg";
import gitLogo from "../../assets/icons/git-scm-icon.svg";
import bashLogo from "../../assets/icons/icons8-javascript.svg";
import dockerLogo from '../../assets/icons/docker-svgrepo-com.svg';
import awsLogo from "../../assets/svg/Amazon_Web_Services_Logo.svg";



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
                        Make a break, text me, send me an email or download my resume, <Link rel="dns-prefetch" to="https://www.ferreiras.dev.br/cv/ResumeRicardoFerreira.pdf" target="_blank" className="contact-details"> clicking here</Link>...
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
                        <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="Wakatime" src={wakaLogo} /></Link>
                        <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="Spring" src={dockerLogo} width="48px" height="48px" /></Link>
                        <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="Spring" src={springLogo} /></Link>
                        <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="React" src={reactLogo} /></Link>
                        <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="Mongo" src={mongoLogo} /></Link>
                        <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="React" src={angularLogo} /></Link>
                        <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="MySQL" src={mysqlLogo} /></Link>
                        <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="Jenkins" src={jenkinsLogo} /></Link>
                        <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="IntelliJ" src={intellijLogo} /></Link>
                        <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="Git" src={gitLogo} /></Link>
                        <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="Bash" src={bashLogo} /></Link>
                        <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="Bash" src={awsLogo} /></Link>
                    </div>
                    <br></br>
                    <h3 className="questions">Q: Sounds exciting dealing with all these tools. How can I find out more infot about these skills?
                    </h3>
                    <br></br>
                    <h3 className="questions">
                        A: To find out, click here...<Link to='/Wakatime' className="sizeSmiley">✋🏾</Link>
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

            <div className="contacts-links">

                <Link
                    rel="dns-prefetch"
                    to="https://www.linkedin.com/in/ricardoaferreirasilva/"
                    target="_blank"
                    className="contacts-details"
                >
                    <i className="fab fa-linkedin-in"></i>
                </Link>

                <Link
                    rel="dns-prefetch"
                    to="mailto:ricardo@ferreiras.dev.br"
                    target="_blank"
                    className="contacts-details"
                >
                    <i className="fa fa-at"></i>
                </Link>
                <Link
                    rel="dns-prefetch"
                    to="https://wa.me/5571993005555"
                    target="_blank"
                    className="contacts-details"
                >
                    <i className="fab fa-whatsapp"></i>
                </Link>
                <Link
                    rel="dns-prefetch"
                    to="https://t.me/RicardoFerreira57"
                    target="_blank"
                    className="contacts-details"
                >
                    <i className="fab fa-telegram"></i>
                </Link>
                <Link
                    rel="dns-prefetch"
                    to="https://github.com/rnhc1000"
                    target="_blank"
                    className="contacts-details"
                >
                    <i className="fab fa-github"></i>
                </Link>
                <Link
                    rel="dns-prefetch"
                    to="https://www.ferreiras.dev.br/cv/ResumeRicardoFerreira.pdf"
                    target="_blank"
                    className="contacts-details"
                >
                    <i className="fa fa-address-card"></i>
                </Link>
            </div>

        </section>
    );
}
