import "./styles.css";
import profilePhoto from "../../assets/rnhc.jpg";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import leetcode  from "../../assets/icons/leetcode-svgrepo-com.svg";



export default function Contact() {

    return (
        <section id="contact-section" className="contacts-section">
            <div className="contacts-section-header">
                <Zoom>
                    <p className="contacts-section-qanda"><img className="contacts-img" alt="Photo Profile" src={profilePhoto}/>
                        Keep in touch to learn details about projects, coding challenges, tech stack...
                    </p>
                    <br></br>
                    <p className = "contacts-section-qanda">
                        Make a break, text me, send me an email or even call me ...
                    </p>
                    <br></br>
                    <p className = "questions">Q: I still want to know more details such as current 
                    tech stack, CI/CD, AWS skills and more importantly what you been doing most of time ultimately...
                    </p>
                    <br></br>
                    <p className="questions"> 
                        A: OK! Sounds good for me. To find out, click here...<Link to='/Wakatime' className="sizeSmiley">✋🏾</Link>
                    </p>
                </Zoom>       
            </div>
            <div className="contacts-links">
                <Link
                    to="https://twitter.com/Ricardo18101957"
                    target="_blank"
                    className="contacts-details"
                >
                    <i className="fa-brands fa-x-twitter"></i>
                </Link>
                <Link
                    to="https://www.instagram.com/rnhc1000/"
                    target="_blank"
                    className="contacts-details"
                >
                    <i className="fab fa-instagram"></i>
                </Link>
                <Link
                    to="https://www.linkedin.com/in/ricardo-ferreira-91b84a26"
                    target="_blank"
                    className="contacts-details"
                >
                    <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link
                    to="https://leetcode.com/rferreira_757/"
                    target="_blank"
                    className="contacts-details"
                >
                    <img className="contacts-waka" alt="leetcode" src={leetcode}/>
                </Link>
                <Link
                    to="mailto:ricardo@ferreiras.dev.br"
                    target="_blank"
                    className="contacts-details"
                >
                    <i className="fa fa-at"></i>
                </Link>
                <Link
                    to="tel:+55 71 9 9300-5555"
                    target="_blank"
                    className="contacts-details"
                >
                    <i className="fab fa-whatsapp"></i>
                </Link>
                <Link
                    to="tel:+55 71 9 9300-5555"
                    target="_blank"
                    className="contacts-details"
                >
                    <i className="fab fa-telegram"></i>
                </Link>
                <Link
                    to="https://github.com/rnhc1000"
                    target="_blank"
                    className="contacts-details"
                >
                    <i className="fab fa-github"></i>
                </Link>
                <Link
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
