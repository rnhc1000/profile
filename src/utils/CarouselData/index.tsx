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

export default renderSlides;