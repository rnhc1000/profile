import "./styles.css";
import profilePhoto from "../../assets/webp/rnhc.jpg.webp";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";



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
                    <p className = "questions">Q: Do you still want to know more details such as current 
                    tech stack, CI/CD, AWS skills and more importantly what I have been doing most of time ultimately?
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
                    to="https://www.linkedin.com/in/ricardoaferreirasilva/"
                    target="_blank"
                    className="contacts-details"
                >
                    <i className="fab fa-linkedin-in"></i>
                </Link>

                <Link
                    to="mailto:ricardo@ferreiras.dev.br"
                    target="_blank"
                    className="contacts-details"
                >
                    <i className="fa fa-at"></i>
                </Link>
                <Link
                    to="https://wa.me/5571993005555"
                    target="_blank"
                    className="contacts-details"
                >
                    <i className="fab fa-whatsapp"></i>
                </Link>
                <Link
                    to="https://t.me/RicardoFerreira57"
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
