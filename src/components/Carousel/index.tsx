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
            "src/assets/webp/eCertificateArchitect.jpg.webp"
    },
    {
        url:
            "src/assets/webp/unyLeyaFullStack.jpg.webp"
    },
    {
        url:
            "src/assets/webp/javaMultithreaded.jpg.webp"
    },  

    {
        url:
            "src/assets/webp/javaAdvanced.jpg.webp"
    },
    {
        url:
            "src/assets/webp/advancedJava.jpg.webp"
    },
    {
        url:
            "src/assets/webp/javaIntermediate.jpg.webp"
    },
    {
        url:
            "src/assets/webp/javaOO.png.webp"
    },
    {
        url:
            "src/assets/webp/oop.1.jpg.webp"
    }, 
    {
        url:
            "src/assets/webp/udemySystemDesign.jpg.webp"
    },
    {
        url:
            "src/assets/webp/cloudFoundations.jpg.webp"
    },
    {
        url:
            "src/assets/webp/cloudEssentials.jpg.webp"
    },
    {
        url:
            "src/assets/webp/aws-practicioner.jpg.webp"
    }, 
    {
        url:
            "src/assets/webp/git.jpg.webp"
    },                                                                                                                                                                                                                                                                                    
    {
        url:
            "src/assets/webp/springBoot.jpg.webp"
    },
    {
        url:
            "src/assets/webp/freeJavaScript.jpg.webp"
    },
    {
        url:
            "src/assets/webp/firebase.jpg.webp"
    },
    {
        url:
            "src/assets/webp/asyncJS.jpg.webp"
    },
    {
        url:
            "src/assets/webp/typeScript.jpg.webp"
    },
    {
        url:
            "src/assets/webp/algaJS.png.webp"
    },
    {
        url:
            "src/assets/webp/reactCertificate.jpg.webp"
    },

    {
        url:
            "src/assets/webp/uml.jpg.webp"
    },
    {
        url:
            "src/assets/webp/webResponsive.jpg.webp"
    },
    {
        url:
            "src/assets/webp/css.jpg.webp"
    },
    {

        url:
            "src/assets/webp/algaHtml.png.webp"
    },
    {
        url:
            "src/assets/webp/html.jpg.webp"
    },
    {
        url:                                                                                                                                                                                                                                                                                            
            "src/assets/webp/dsaLeetCode.jpg.webp"
    },
    {
        url:
            "src/assets/webp/algoritmosLP.jpg.webp"
    },
    {
        url:
            "src/assets/webp/dsa.jpg.webp"
    },
    {
        url:
            "src/assets/webp/dataStructures.jpg.webp"
    },
    {
        url:
            "src/assets/webp/regex.jpg.webp"
    },
    {
        url:
            "src/assets/webp/phpOOP.png.webp"
    },
    {
        url: "src/assets/webp/laravelUdemy.jpg.webp"
    },
    {
        url:
            "src/assets/webp/mvc.jpg.webp"
    },
    {
        url:
            "src/assets/webp/mongoDB.jpg.webp"
    },
    {
        url:
            "src/assets/webp/jenkins.jpg.webp"
    },
    {
        url:
            "src/assets/webp/dbExpertsPostgreS.png.webp"
    },
    {
        url:
            "src/assets/webp/docker.jpg.webp"
    },
    {
        url:
            "src/assets/webp/kubernets.jpg.webp"
    },
    {
        url:
            "src/assets/webp/ipv6Br.png.webp"
    },
    {
        url:
            "src/assets/webp/ccna.jpg.webp"
    },
    {
        url:
            "src/assets/webp/ccnp.jpg.webp"
    },
    {
        url:
            "src/assets/webp/ccda.jpg.webp"
    },
    {
        url:
            "src/assets/webp/ccdp.jpg.webp"
    },
    {
        url:
            "src/assets/webp/trello.jpg.webp"
    },
    {
        url:
            "src/assets/webp/scrum.jpg.webp"
    },

];

const Slider = () => {
    return (
        <>
            <div className="carousel-header">
                <h4>Here are some of my key skills</h4>
            </div>
            <div className="parent">
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    swipeable={true}
                    draggable={true}
                    customTransition="all 1"
                    transitionDuration={1000}
                    showDots={true}
                    infinite={true}
                    partialVisible={false}
                    dotListClass="custom-dot-list-style"
                >
                    {sliderImageUrl.map((imageUrl, index) => {
                        return (
                            <div className="slider" key={index}>
                                <img src={imageUrl.url} style={{ marginLeft: "auto", marginRight: "auto", padding: "0 2rem 0 2rem", display: "flex", justifyContent: "center"}}alt="movie" />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </>
    );
};
export default Slider;