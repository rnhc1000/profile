import './styles.css';

import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";
import { Zoom } from "react-awesome-reveal";
import logo from '../../assets/images/webp/avatar.png.webp';

export default function Welcome() {

  return (
    <section id="welcome-section">
      <div className="welcome-container">

        <Zoom>
        <img className="avatar"  src={logo} alt="avatar by Meta&copy;" />
          <ReactTyped className="welcome-important" startWhenVisible strings={["Hello, Everybody!!!"]} typeSpeed={100} backSpeed={50} />
          <blockquote className="welcome-quote">
            <br></br>
            Hey! Thanks for touching down. I am <span className="contact-details">Ricardo Ferreira</span> and as a <Link rel="dns-prefetch" to="https://www.ferreiras.dev.br/cv/ResumeRicardoFerreira.pdf" target="_blank" className="contact-details"> Sr Software Engineer</Link>, I love
            designing, and writing and deploying clean code web-based enterprise applications.
            I have been very successful as an architect and lead developer of solutions and applications that have fully met the requirements and needs of
            companies and customers, especially in the digital payments industry.
            <br /><br />

            I have developed and delivered applications that have helped thousands of retail stores increase their profitability, productivity and efficiency
            in receiving payments, using modern languages and frameworks, cloud computing, security and compliance to keep up with the demanding requirements of the digital payments industry.
            <br /><br />

            For a comprehensive description of my journey and roadmap up to today, take a look at my history,
            clicking on the links below to find out more about my career.
          </blockquote>
          <br></br>
        </Zoom>


      </div>
    </section>
  );
}