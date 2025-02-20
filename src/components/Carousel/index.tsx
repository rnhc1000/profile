import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1// optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 320 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
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
                    swipeable={true}
                    draggable={true}
                    customTransition="all 1"
                    transitionDuration={2000}
                    showDots={true}
                    infinite={true}
                    partialVisible={false}  
                    dotListClass="custom-dot-list-style"
                >
                    {sliderImageUrl.map((imageUrl, index) => {
                        return (
                            <div className="slider" key={index}>
                                <img src={imageUrl.url} style={{ marginLeft: "auto", marginRight: "auto", padding: "0 2rem 0 2rem", display: "flex", justifyContent: "center" }} alt="movie" />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </>
    );
};
export default Slider;