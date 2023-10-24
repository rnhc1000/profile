import './styles.css';

export default function Contact() {

    return (
        <section id="contact-section" className="contacts-section">
            <div className="contacts-section-header">
                <p>Want to keep in touch to know more about projects, coding techniques, tech stuff...</p>
                <p>Make a break, text me, send me an email or even call me ...</p>
            </div>
            <div className="contacts-links">
                <a href="https://twitter.com/Ricardo18101957" target="_blank" className="contacts-details">Twitter
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/rnhc1000/" target="_blank" className="contacts-details">Instagram
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/ricardo-ferreira-91b84a26" target="_blank"
                    className="contacts-details">Linkedin
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="mailto:ricardo@ferreiras.dev.br" target="_blank" className="contacts-details">
                    <i className="fa fa-at"></i> Email
                </a>
                <a href="tel:+55 71 9 9300-5555" target="_blank" className="contacts-details">
                    <i className="fab fa-whatsapp"></i> Call me
                </a>
                <a href="tel:+55 71 9 9300-5555" target="_blank" className="contacts-details">
                    <i className="fab fa-telegram"></i> Telegram
                </a>
                <a href="https://github.com/rnhc1000" target="_blank" className="contacts-details">
                    <i className="fab fa-github"></i> Code
                </a>
                <a href="https://www.ferreiras.dev.br/cv/ResumeRicardoFerreira.pdf" target="_blank" className="contacts-details">
                    <i className="fa fa-address-card"></i> Resume
                </a>
            </div>
        </section>
    );
}