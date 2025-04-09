import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import { Fade } from 'react-awesome-reveal';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1

    }
};

const sliderImageUrl = [
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/eCertificateArchitect.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/unyLeyaFullStack.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/javaMultithreaded.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/udemyParallelJava.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/udemyMicroServices.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/spring-ai-udemy.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/dsaLeetCode.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/javaAdvanced.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/advancedJava.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/javaIntermediate.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/javaInterview.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/javaOO.png.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/springBoot.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/springExpert.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/apacheKafkaUdemy.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/rabbitMQ.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/udemyRabbitMQ.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/udemyTestsSpringBoot.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/oop.1.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/udemySystemDesign.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/udemyClojure.jpg.webp'
    },

    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/algoritmosLP.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/dsa.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/dataStructures.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/dynamicProgramming.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/cloudFoundations.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/cloudEssentials.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/aws-practicioner.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/git.jpg.webp'
    },

    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/freeJavaScript.jpg.webp'
    },

    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/asyncJS.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/typeScript.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/algaJS.png.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/reactCertificate.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/mongoDB.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/firebase.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/dbExpertsPostgreS.png.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/docker.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/kubernets.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/uml.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/webResponsive.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/css.jpg.webp'
    },
    {

        url:
            'https://www.ferreiras.dev.br/assets/images/webp/algaHtml.png.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/html.jpg.webp'
    },

    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/regex.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/phpOOP.png.webp'
    },
    {
        url: 'https://www.ferreiras.dev.br/assets/images/webp/laravelUdemy.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/mvc.jpg.webp'
    },

    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/jenkins.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/ipv6Br.png.webp'
    },

    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/ccna.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/ccnp.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/ccda.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/ccdp.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/trello.jpg.webp'
    },
    {
        url:
            'https://www.ferreiras.dev.br/assets/images/webp/scrum.jpg.webp'
    },

];

const Slider = () => {
    return (
        <>
            <div className="carousel-header">
                <h1>Here are some of my key skills</h1>
            </div>
            <div className="parent">
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    swipeable={true}
                    draggable={true}
                    transitionDuration={2000}
                    showDots={true}
                    infinite={true}
                    partialVisible={false}
                    dotListClass="custom-dot-list-style"
                    ssr={true}
                    keyBoardControl={true}
                    customTransition="transform 2000ms ease-in-out"
                >
                    {sliderImageUrl.map((imageUrl, index) => {
                        return (
                            <Fade key={index} direction="up" triggerOnce>
                                <div className="slider" key={index}>
                                    <img 
                                    src={imageUrl.url} 
                                    style={{ 
                                    marginLeft: "auto", 
                                    marginRight: "auto", 
                                    padding: "0 2rem 0 2rem", 
                                    display: "flex", 
                                    justifyContent: "center",
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '10px'
                                    }} alt="movie" />
                            </div>
                            </Fade>
                        );
                    })}
                </Carousel>
            </div>
        </>
    );
};
export default Slider;