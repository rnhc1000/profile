import './styles.css';

export default function Welcome() {

    return (
        <>
            <section id="welcome-section">
                <div className="welcome-container">
                    <p className="welcome-important">Hi everyone! I am a
                        <a href="https://www.ferreiras.dev.br/cv/ResumeRicardoFerreira.pdf" target="_blank" className="contact-details"></a>
                        <span> Full Stack Software Engineer </span>,
                        designing, coding and supporting the lifecycle of cloud-based payment applications using
                        languages and frameworks such as PHP, JS, HTML, CSS, Bootstrap, ReactJS for frontend and Laravel, Java, Spring Boot for frontend, code version
                        control as Git, SQL and NoSQL databases as MySQL, MongoDB and tools such as Docker, Portainer, Kubernetes,
                        Nginx, CI/CD tools as Jenkins, SonarQube, Selenium, working fulltime as a Sr Software Engineer for a digital payments services provider for
                        the past years with an extensive hands-on experience doing ...
                    </p>
                    <ul className="welcome-bullets">
                        <li>Design, Development and Deployment of web-based digital payment applications,</li>
                        <li>Development and Deployment of OOP applications, </li>
                        <li>Creating and maintaining a Jenkins-based pipeline for CI/CD,</li>
                        <li>Writing Clean Code using Design Patterns as SOLID, MVC, etc</li>
                        <li>Extensive knowledge of CSS, HTML, Javascript and ReactJS for front-end app,</li>
                        <li>Extensive knowledge of MySQL, PHP, Java and Spring Boot for backend app</li>
                        <li>Extensive knowledge of Linux, Bash, Script-based Automation, Reverse Proxy and DNS</li>
                        <li>Extensive knowledge of IntelliJ and VSCode</li>
                    </ul>
                    <p>
                        If you want to go down to the nitty-gritty of my
                        challenging career as
                        a solutions developer drop me a quick message,
                        clicking on the social media icons shown below or
                        even take a look at my current 
                        <a href="https://www.ferreiras.dev.br/cv/ResumeRicardoFerreira.pdf" target="_blank" className="contact-details">
                           <span className="resume">
                                 Resume...
                            </span>
                        </a>
                    </p>
                </div>
            </section>
        </>
    );
}