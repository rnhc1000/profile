import './styles.css';

import { Zoom, Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';

export default function History() {

    return (
        <section id="history-section">
            <div className="history-container">

                <Fade>
                    <p className="history-greeting">My Journey</p>
                    <h1 className="history-title">From Code to Cloud</h1>
                    <p className="history-subtitle">25+ years building software that matters</p>
                </Fade>

                <div className="history-timeline">
                    <Zoom>
                        <div className="timeline-card">
                            <span className="timeline-icon">☕</span>
                            <h2 className="timeline-heading">Java & Enterprise Systems</h2>
                            <p className="timeline-text">
                                Deep expertise in <span className="tech-highlight">Java 17+</span> and the 
                                <span className="tech-highlight"> Spring ecosystem</span> — Boot, Security, WebFlux, Data JPA. 
                                Building high-performance backends that handle millions of transactions daily. 
                                <span className="tech-highlight">Post-Graduate in Java Applied Engineering</span> — 
                                advanced backend architecture, microservices, and enterprise patterns.
                            </p>
                        </div>
                    </Zoom>

                    <Zoom>
                        <div className="timeline-card">
                            <span className="timeline-icon">🤖</span>
                            <h2 className="timeline-heading">Artificial Intelligence</h2>
                            <p className="timeline-text">
                                Exploring <span className="tech-highlight">Machine Learning</span> and 
                                <span className="tech-highlight"> LLMs</span> for enterprise applications. 
                                Building AI-powered solutions with Python, TensorFlow, and integrating 
                                generative AI into existing workflows.
                            </p>
                        </div>
                    </Zoom>

                    <Zoom>
                        <div className="timeline-card">
                            <span className="timeline-icon">🎓</span>
                            <h2 className="timeline-heading">Continuous Learning</h2>
                            <p className="timeline-text">
                                Currently pursuing two <span className="tech-highlight">Post-Graduate MBA programs in AI</span>: 
                                one at <span className="tech-highlight">UFV</span> (Universidade Federal de Viçosa) and 
                                another at <span className="tech-highlight">UniPDS</span>. Deepening expertise in 
                                AI strategy, neural networks, and applied machine learning.
                            </p>
                        </div>
                    </Zoom>

                    <Zoom>
                        <div className="timeline-card">
                            <span className="timeline-icon">�</span>
                            <h2 className="timeline-heading">Data Engineering & Analytics</h2>
                            <p className="timeline-text">
                                Working with <span className="tech-highlight">Apache Spark</span> and 
                                <span className="tech-highlight"> Kafka</span> for real-time data pipelines. 
                                Transforming raw data into actionable insights for business intelligence and web analytics.
                            </p>
                        </div>
                    </Zoom>

                    <Zoom>
                        <div className="timeline-card">
                            <span className="timeline-icon">⚡</span>
                            <h2 className="timeline-heading">Reactive & Concurrent Systems</h2>
                            <p className="timeline-text">
                                Specializing in <span className="tech-highlight">reactive programming</span> and 
                                <span className="tech-highlight"> high-concurrency</span> patterns. Building non-blocking APIs 
                                that scale horizontally to meet demanding throughput requirements.
                            </p>
                        </div>
                    </Zoom>

                    <Zoom>
                        <div className="timeline-card">
                            <span className="timeline-icon">💳</span>
                            <h2 className="timeline-heading">Digital Payments</h2>
                            <p className="timeline-text">
                                Architecting secure <span className="tech-highlight">payment platforms</span> processing 
                                cards and Pix transactions. Compliance-first approach with PCI-DSS standards, 
                                fraud prevention, and real-time authorization flows.
                            </p>
                        </div>
                    </Zoom>

                    <Zoom>
                        <div className="timeline-card">
                            <span className="timeline-icon">🗄️</span>
                            <h2 className="timeline-heading">Databases & Persistence</h2>
                            <p className="timeline-text">
                                Expert in <span className="tech-highlight">Oracle</span>, 
                                <span className="tech-highlight"> MySQL</span>, and <span className="tech-highlight">MongoDB</span>. 
                                Designing schemas for OLTP workloads, optimizing queries, and implementing 
                                data replication strategies.
                            </p>
                        </div>
                    </Zoom>

                    <Zoom>
                        <div className="timeline-card">
                            <span className="timeline-icon">☁️</span>
                            <h2 className="timeline-heading">Cloud & DevOps</h2>
                            <p className="timeline-text">
                                Deploying on <span className="tech-highlight">AWS</span> and 
                                <span className="tech-highlight"> Oracle Cloud</span>. CI/CD with Jenkins, 
                                containerization with Docker & Kubernetes, observability with Grafana & ELK stack.
                            </p>
                        </div>
                    </Zoom>

                </div>

                <Fade>
                    <div className="history-cta">
                        <p className="history-cta-text">Want to see this in action?</p>
                        <div className="history-links">
                            <Link to="/projects" className="history-link-btn history-link-primary">🚀 View Projects</Link>
                            <Link to="/contacts" className="history-link-btn">💬 Get in Touch</Link>
                        </div>
                    </div>
                </Fade>

            </div>
        </section>
    );
}