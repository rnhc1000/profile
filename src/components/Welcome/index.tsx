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
          <img className="avatar" src={logo} alt="Ricardo Ferreira" />

          <h1 className="welcome-title">
            <ReactTyped
              className="welcome-important"
              startWhenVisible
              strings={["Hello! I’m Ricardo Ferreira."]}
              typeSpeed={75}
              backSpeed={35}
            />
          </h1>

          <blockquote className="welcome-quote">
            I’ve been building software for almost <span className="dt">25 years</span> — from low-level work with
            <span className="dt"> Assembler</span> and <span className="dt">C</span>, to surfing the early web with
            <span className="dt"> LAMP</span>, and eventually specializing in architecting and delivering secure, scalable platforms for
            the <span className="dt">digital payments</span> industry.
          </blockquote>

          <blockquote className="welcome-quote">
            Today, I focus on enterprise systems that run in production, serve real customers, and stand up to strict requirements:
            security and compliance, observability, performance, and operational excellence.
          </blockquote>

          <blockquote className="welcome-quote">
            This portfolio is split in two parts:
            a deeper narrative in <Link to="/history" className="contact-details">History</Link> and concrete work samples in
            <Link to="/projects" className="contact-details"> Projects</Link>.
          </blockquote>

          <ul className="welcome-bullets">
            <li>&#128204; Digital payments SaaS platforms (cards + Pix), secure communications, and transaction processing</li>
            <li>&#128204; Observability &amp; operations tooling (dashboards, monitoring, logs) for microservices at scale</li>
            <li>&#128204; Financial auditing &amp; reconciliation solutions to prevent losses and validate contracts/rates</li>
            <li>&#128204; REST APIs with clean architecture, CI/CD pipelines, and cloud infrastructure (AWS/Oracle Cloud)</li>
          </ul>

          <p className="welcome-footnote">
            If you want to see what I’ve been shipping recently, jump to Projects. If you prefer the full story and roadmap, start with History.
          </p>
        </Zoom>


      </div>
    </section>
  );
}