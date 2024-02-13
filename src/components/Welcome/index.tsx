import './styles.css';

import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import skillLogo from '../../assets/mortarboard.svg';
import contactLogo from '../../assets/whatsapp.svg';
import codeLogo from '../../assets/tools.svg';
import history from '../../assets/txt.svg';
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import "prismjs/themes/prism-tomorrow.css";
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import React, { useEffect } from 'react';
import { ReactTyped } from "react-typed";


export default function Welcome() {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <section id="welcome-section">
      <div className="welcome-container">

        <pre>
          <code className="language-javascript">
            {`
    import java.util.profile.ricardo;
    public class Greetings implements 
                    Hello, EveryBody {
      @Override
      public String hello() {
        return "Hello, ";
      }
      @Override
      public String everybody() {
        return "Everybody!";
      }

      public static void main(String... args) {
        Greetings greetings = new Greetings();
          System.out.println(
            greetings.hello() + 
              greetings.everybody()
          );
      }
    }   
`}
          </code>
        </pre>

        <Zoom>
          <ReactTyped style={{color: 'white'}}className="welcome-important" startWhenVisible strings={["Hello, Everybody!"]} typeSpeed={100} backSpeed={50}/>
          <br></br>

          <blockquote className="welcome-quote">
            I am called <span>Ricardo Ferreira</span> and as a <Link to="https://www.ferreiras.dev.br/cv/ResumeRicardoFerreira.pdf" target="_blank" className="contact-details"> Sr Software Engineer</Link>,
            🛠️ loves to design, writes clean code and deploy web-based business applications.
            I have been very succesful being the architect and head developer of solutions and applications that
            have met and even exceeded businesses and customers requirements in all companies I have been working for,
            specially in the digital payments industry, having deployed over the years, applications that have helped retail
            stores increase their profitablity and keeping up with a fast changing payment requirements.
            For a comprehensive description of my journey and roadmap up to today,
            take a look at my history, clicking on the links below to find out more about my career.
          </blockquote>
          <br></br>
        </Zoom>

        <Zoom>
          <div className="contact-me">
            <Link to='/history'><img data-toggle="tooltip" data-placement="top" data-animation="" title="History" src={history} alt="History" /></Link>
            <Link to='/skills'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Skills" src={skillLogo} alt="Skills" /></Link>
            <Link to='/projects'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Projects" src={codeLogo} alt="Projects" /></Link>
            <Link to='/contacts'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Contact" src={contactLogo} alt="Contact" /></Link>
          </div>
        </Zoom>
      </div>
    </section>
  );
}