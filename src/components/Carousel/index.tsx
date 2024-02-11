import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
    {
        url:
            "src/assets/eCertificateArchitect.jpg"
    },
    {
        url:
            "src/assets/unyLeyaFullStack.jpg"
    },
    {
        url:
            "src/assets/scrum.jpg"
    },
    {
        url:
            "src/assets/git.jpg"
    },
    {
        url:
            "src/assets/javaAdvanced.jpg"
    },
    {
        url:
            "src/assets/advancedJava.jpg"
    },
    {
        url:
            "src/assets/javaIntermediate.jpg"
    },
    {
        url:
            "src/assets/javaOO.png"
    },
    {
        url:
            "src/assets/oop.1.jpg"
    },
    {
        url:
            "src/assets/dsaLeetCode.jpg"
    },
    {
        url:
            "src/assets/algoritmosLP.jpg"
    },
    {
        url:
            "src/assets/dsa.jpg"
    },
    {
        url:
            "src/assets/dataStructures.jpg"
    },
    {
        url:
            "src/assets/phpOOP.png"
    },
    {
        url: "src/assets/laravelUdemy.jpg"
    },
    {
        url:
            "src/assets/mvc.jpg"
    },
    {
        url:
            "src/assets/mongoDB.jpg"
    },
    {
        url:
            "src/assets/jenkins.jpg"
    },
    {
        url:
            "src/assets/springBoot.jpg"
    },
    {
        url:
            "src/assets/freeJavaScript.jpg"
    },

    {
        url:
            "src/assets/asyncJS.jpg"
    },
    {
        url:
            "src/assets/typeScript.jpg"
    },
    {
        url:
            "src/assets/algaJS.png"
    },

    {
        url:
            "src/assets/uml.jpg"
    },
    {
        url:
            "src/assets/webResponsive.jpg"
    },
    {
        url:
            "src/assets/css.jpg"
    },
    {

        url:
            "src/assets/algaHtml.png"
    },
    {
        url:
            "src/assets/html.jpg"
    },
    {
        url:
            "src/assets/docker.jpg"
    },
    {
        url:
            "src/assets/kubernets.jpg"
    },
    {
        url:
            "src/assets/ccna.jpg"
    },
    {
        url:
            "src/assets/ccnp.jpg"
    },
    {
        url:
            "src/assets/ccda.jpg"
    },
    {
        url:
            "src/assets/ccdp.jpg"
    },
    {
        url:
            "src/assets/trello.jpg"
    },

];

const Slider = () => {
    return (
      <div className="parent">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {sliderImageUrl.map((imageUrl, index) => {
            return (
              <div className="slider" key={index}>
                <img src={imageUrl.url} alt="movie" />
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  };
  export default Slider;