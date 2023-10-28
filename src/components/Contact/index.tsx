import './styles.css';
import profilePhoto from '../../assets/rnhc.jpg';

import { Link } from 'react-router-dom';
// @ts-ignore
import Zoom from 'react-reveal/Zoom';

export default function Contact() {

    return (
        <section id="contact-section" className="contacts-section">
            <div className="contacts-section-header">
                <Zoom>
                <p><img className="welcome-img" src={profilePhoto} />Want to keep in touch to know more about projects, coding techniques, tech stuff...</p>
                
                <p>Make a break, text me, send me an email or even call me ...</p>
                </Zoom>
            </div>
            <div className="contacts-links">
                <Link to="https://twitter.com/Ricardo18101957" target="_blank" className="contacts-details">
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link to="https://www.instagram.com/rnhc1000/" target="_blank" className="contacts-details">
                    <i className="fab fa-instagram"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/ricardo-ferreira-91b84a26" target="_blank"
                    className="contacts-details">
                    <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link to="mailto:ricardo@ferreiras.dev.br" target="_blank" className="contacts-details">
                    <i className="fa fa-at"></i> 
                </Link>
                <Link to="tel:+55 71 9 9300-5555" target="_blank" className="contacts-details">
                    <i className="fab fa-whatsapp"></i> 
                </Link>
                <Link to="tel:+55 71 9 9300-5555" target="_blank" className="contacts-details">
                    <i className="fab fa-telegram"></i> 
                </Link>
                <Link to="https://github.com/rnhc1000" target="_blank" className="contacts-details">
                    <i className="fab fa-github"></i> 
                </Link>
                <Link to="https://www.ferreiras.dev.br/cv/ResumeRicardoFerreira.pdf" target="_blank" className="contacts-details">
                    <i className="fa fa-address-card"></i>
                </Link>
            </div>
        </section>
    );
}