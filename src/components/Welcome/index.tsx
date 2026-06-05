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

          <p className="welcome-greeting">Hello, I'm</p>
          <h1 className="welcome-title">
            <ReactTyped
              className="welcome-name"
              startWhenVisible
              strings={["Ricardo Ferreira"]}
              typeSpeed={75}
              backSpeed={35}
            />
          </h1>
          <p className="welcome-tagline">Java Engineer · AI & Machine Learning · Data & Payments · Cloud Architect</p>

          <div className="welcome-intro">
            <p className="welcome-lead">
              Building with <span className="welcome-tech">Java</span>, <span className="welcome-tech">Spring Boot</span>,
              <span className="welcome-tech"> Apache Spark, Kafka, Snowflake, AWS, Datadog</span> to power <span className="welcome-highlight">data-driven platforms</span>.
            </p>
            <p className="welcome-lead">
              Focused on <span className="welcome-highlight">reactive applications</span>, high-throughput APIs, and
              <span className="welcome-highlight"> real-time analytics</span> for the web analytics and payments industries,
              <span className="welcome-highlight"> microservices</span> at scale and of course, leveraging <span className="welcome-highlight">AI and machine learning </span>to power the next generation of applications.
            </p>
          </div>

          <div className="welcome-ai-highlight">
            <h2 className="welcome-ai-title">🤖 AI & Machine Learning</h2>
            <p className="welcome-ai-text">
              Currently pursuing <span className="welcome-highlight">two Post-Graduate MBA programs in AI</span> at 
              <span className="welcome-tech">UFV</span> and <span className="welcome-tech">UniPDS</span>. 
              Building intelligent solutions with <span className="welcome-tech">Java</span>, 
              <span className="welcome-tech">Python</span>, <span className="welcome-tech">TensorFlow</span>, 
              and <span className="welcome-tech">LLMs</span> to transform enterprise applications.
            </p>
          </div>

          <div className="welcome-focus">
            <h2 className="welcome-focus-title">Current Focus</h2>
            <ul className="welcome-bullets">
              <li><span className="bullet-icon">☕</span> Java 17+ &amp; Spring ecosystem (Boot, Security, WebFlux, Data JPA, etc)</li>
              <li><span className="bullet-icon">🤖</span> AI &amp; Machine Learning — LLMs, TensorFlow, Python</li>
              <li><span className="bullet-icon">⚡</span> Reactive programming &amp; high-concurrency I/O bound transaction processing</li>
              <li><span className="bullet-icon">🔥</span> Apache Spark, Kafka &amp; real-time data pipelines</li>
              <li><span className="bullet-icon">🗄️</span> Databases (PostgreSQL, MySQL, MongoDB) &amp; data engineering</li>
              <li><span className="bullet-icon">📊</span> Web analytics, observability &amp; microservices at scale</li>
              <li><span className="bullet-icon">☁️</span> Cloud infrastructure (AWS, Docker, Kubernetes)</li>
            </ul>
          </div>

          <div className="welcome-cta">
            <p className="welcome-cta-text">Explore my work:</p>
            <div className="welcome-links">
              <Link to="/history" className="welcome-link-btn">📖 My Story</Link>
              <Link to="/projects" className="welcome-link-btn welcome-link-primary">🚀 Projects</Link>
            </div>
          </div>
        </Zoom>


      </div>
    </section>
  );
}