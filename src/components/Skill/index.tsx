import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";
import './styles.css';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import homeLogo from '../../assets/house-check.svg';
import contactLogo from '../../assets/whatsapp.svg';
import history from '../../assets/txt.svg';
import codeLogo from '../../assets/tools.svg';
import { useState } from "react";


const imageData = [
    {
        label: "git",
        alt: "git",
        url:
            "src/assets/git.jpg"
    },
    {
        label: "java",
        alt: "java",
        url:
            "src/assets/javaAdvanced.jpg"
    },
    {
        label: "java",
        alt: "java",
        url:
            "src/assets/advancedJava.jpg"
    },
    {
        label: "java",
        alt: "java",
        url:
            "src/assets/javaIntermediate.jpg"
    },
    {
        label: "java",
        alt: "java",
        url:
            "src/assets/javaOO.png"
    },
    {
        label: "java",
        alt: "java",
        url:
            "src/assets/oop.1.jpg"
    },
    {
        label: "dsa",
        alt: "algoritmos",
        url:
            "src/assets/dsaLeetCode.jpg"
    },
    {
        label: "dsa",
        alt: "algoritmos",
        url:
            "src/assets/algoritmosLP.jpg"
    },

    {
        label: "dsa",
        alt: "dsa",
        url:
            "src/assets/dsa.jpg"
    },
    {
        label: "dsa",
        alt: "dsa",
        url:
            "src/assets/dataStructures.jpg"
    },
    {
        label: "PHP",
        alt: "PHP",
        url:
            "src/assets/phpOOP.png"
    },
    {
        label: "laravel",
        alt: "laravel",
        url: "src/assets/laravelUdemy.jpg"
    },
    {
        label: "mvc",
        alt: "mvc",
        url:
            "src/assets/mvc.jpg"
    },
    {
        label: "mongoDB",
        alt: "mongoDB",
        url:
            "src/assets/mongoDB.jpg"
    },


    {
        label: "jenkins",
        alt: "jenkins",
        url:
            "src/assets/jenkins.jpg"
    },
    {
        label: "spring",
        alt: "spring",
        url:
            "src/assets/springBoot.jpg"
    },

    {
        label: "JavaScript",
        alt: "javaScript",
        url:
            "src/assets/asyncJS.jpg"
    },
    {
        label: "JavaScript",
        alt: "javaScript",
        url:
            "src/assets/typeScript.jpg"
    },
    {
        label: "JavaScript",
        alt: "javaScript",
        url:
            "src/assets/algaJS.png"
    },

    {
        label: "UML",
        alt: "UML",
        url:
            "src/assets/uml.jpg"
    },
    {
        label: "CSS",
        alt: "CSS",
        url:
            "src/assets/css.jpg"
    },
    {
        label: "HTML",
        alt: "HTML",
        url:
            "src/assets/algaHtml.png"
    },
    {
        label: "HTML",
        alt: "HTML",
        url:
            "src/assets/html.jpg"
    },
    {
        label: "Docker",
        alt: "Docker",
        url:
            "src/assets/docker.jpg"
    },
    {
        label: "K8",
        alt: "K8",
        url:
            "src/assets/kubernets.jpg"
    },
    {
        label: "Internet",
        alt: "Internet",
        url:
            "src/assets/ccna.jpg"
    },
    {
        label: "Internet",
        alt: "Internet",
        url:
            "src/assets/ccnp.jpg"
    },
    {
        label: "Internet",
        alt: "Internet",
        url:
            "src/assets/ccda.jpg"
    },
    {
        label: "Internet",
        alt: "Internet",
        url:
            "src/assets/ccdp.jpg"
    },
    {
        label: "trello",
        alt: "trello",
        url:
            "src/assets/trello.jpg"
    },

];

const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
        <span className="legend">{image.label}</span>
    </div>
));


export default function Skill() {

    const [currentIndex, setCurrentIndex] = useState();
    function handleChange(index) {
        setCurrentIndex(index);
    }

    return (
        <section id="skill-section" className="skills-section">
            <div className="skills-section-header">
                <h3>Here are some of my key skills</h3>
            </div>
            <div>
                <Carousel
                    width={1024}
                    interval={5000}
                    showThumbs={false}
                    transitionTime={2}
                    showArrows={true}
                    autoPlay={true}
                    infiniteLoop={true}
                    selectedItem={imageData[currentIndex]}
                    onChange={handleChange}
                >
                    {renderSlides}
                </Carousel>
            </div>
            <div className="skills">
                <ul>
                    <li>
                        <Link to="https://ferreiras.dev.br/cv/eCertificateArchitect.pdf" target="_blank">
                            Oracle Cloud Certified Architect Associate<span> by www.oracle.com</span>
                        </Link>
                    </li>

                    <li>

                        <Link to="https://ferreiras.dev.br/cv/eCertificateFoundations.pdf" target="_blank">
                            Oracle Cloud Certified Foundations Associate<span> by www.oracle.com</span>
                        </Link>
                    </li>

                    <li>

                        <Link to="https://ferreiras.dev.br/cv/eCertificateFullStackUnyleya.pdf" target="_blank">
                            PGDip in Full Stack Web Development<span> by Unyleya University, DF, BR</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="https://www.scrumstudy.com/certification/verify?type=SFC&number=984118" target="_blank">
                            Scrums Foundations Certified<span> by SCRUMstudy - Accreditation Body for Scrum and Agile</span>
                        </Link>
                    </li>

                    <li>
                        <Link to='https://paragon.academy/c/18-2287' target="_blank">
                            ReactJS<span> by devsuperior.com.br</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="https://freecodecamp.org/certification/fccafad993d-1fad-465d-a551-3837fe575f0d/responsive-web-design" target="_blank">
                            Responsive Web Design<span> by freecodecamp.org</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="https://www.testdome.com/certificates/a0fda9bbcc034f0ea16c923103481670" target="_blank">OOP
                            Java Challenge<span> by testdome.com</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="https://freecodecamp.org/certification/fccafad993d-1fad-465d-a551-3837fe575f0d/javascript-algorithms-and-data-structures"
                            target="_blank">
                            Javascript - Algorithms and Data Structures<span> by freecodecamp.org</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="https://www.testdome.com/certificates/78093b6cda7a4a9a8d0525373ca606df" target="_blank">
                            Linux OS System Administration<span> by testdome.com</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="https://www.testdome.com/certificates/9c4c4b6b45c14f18b83802a08b844498" target="_blank">
                            Javascript Challenge<span> by testdome.com</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="https://www.testdome.com/certificates/484a45e105754434b7d047e962ed287e" target="_blank">
                            Laravel Challenge<span> by testdome.com</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="">PGDip in Software Engineering<span> by Unyleya University, SP, BR</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="#">BSc in Electrical Engineering<span> by Sao Judas University, SP, BR</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="#">PGDip in Computer Science<span> by Mackenzie University SP, BR</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="#">PGDip in Cryptography<span> by Fluminense Federal University, RJ, BR</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <Zoom>
                <div className="contact-me">
                    <Link to='/'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Home" src={homeLogo} /></Link>
                    <Link to='/history'><img data-toggle="tooltip" data-placement="top" data-animation="" title="History" src={history} /></Link>
                    <Link to='/projects'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Projects" src={codeLogo} /></Link>
                    <Link to='/contacts'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Contact" src={contactLogo} /></Link>
                </div>
            </Zoom>
        </section>
    );
}