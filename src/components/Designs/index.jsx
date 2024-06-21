import "./styles.css";
import React from "react";
import Design from "../Design";
import Iframe from "react-iframe";
import dashBoard from "../../assets/webp/dashboard.png.webp";
import easyPag from "../../assets/webp/easypay.png.webp";
import devOps from "../../assets/webp/devOps.png.webp";
import mapa from "../../assets/webp/mapa.png.webp";
import viaCep from "../../assets/webp/viaCEP.png.webp";
import anatel from "../../assets/webp/anablock-page.png.webp";
import leetcode from "../../assets/webp/leetcode.png.webp";
import todolist from "../../assets/webp/todo.webp";
import draperpcosta from "../../assets/webp/draPerpCostaReadme.png.webp";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";

class Designs extends React.Component {
  render() {
    return (
      <section id="articles">
        <div>
          <Design
            provider="Daily Task Assistent"
            description="This is a personal app assistant to add small reminders for the tasks you need 
          to tackle every single day. Simply jot down a quick note about a task, add it to a list, 
          and you're done. It's implemented using Angular 17+ as the frontend framework and Java 17,Spring Boot, 
          Spring Security, MySQL, Docker, AWS ECS as the backend. Take a look at https://todo-list.ferreiras.dev.br
          So, tired of a thousand clicks and a complex UI just to have an easy reminder as Post-it I decided
          to create an uncomplicated online tool for quickly noting my tasks, as a proof of concept for
          modern web applications development."
            thumbnail={todolist}
          />

          <Link
            rel="dns-prefetch"
            to="https://github.com/rnhc1000/daily-tasks.git"
            target="_blank"
            className="linkTo"
            textDecoration="inherit"
          >
            <p>https://github.com/rnhc1000/daily-tasks.git</p>
          </Link>
        </div>

        <div>
          <Design
            provider="DNS RPZ - URL Blocked by DNS"
            description="The goal here is to provide an API that allow Internet Service Providers 
          that have BIND as their DNS Engines to be fully compliant with the legal system of the country.
          In order to meet brazilian authorities requirements to block suspect URLs being used by the general public,
          this is an application that automates the creation of DNS Zones using BIND 9 and superior in 
          sync with the Anatel ( Regulatory Agency ) guidance and data available at a public API.  
          It has been developed using Java 17, Spring Boot, Spring Security, MySQL and Docker.
          requirements."
            thumbnail={anatel}
          />

          <Link
            rel="dns-prefetch"
            to="https://github.com/rnhc1000/dnsBlockURL.git"
            target="_blank"
            className="linkTo"
            textDecoration="inherit"
          >
            <p>https://github.com/rnhc1000/dnsBlockURL.git</p>
          </Link>
        </div>

        <div>
          <Design
            provider="No Framework"
            description="This is an app that allows you to get a detailed address information given a valid 
          ZIP code, (Valid only in Brazil), available at [https://apicep.ferreiras.dev.br]. 
          The goal here is to dive into software engineering best practices, even in a small project as 
          a single page app, where you can take advantage of a design pattern that includes services, 
          models and controllers with a close eye to SOLID principles, specially the SRP, heavily 
          influenced by @devsuperior, to fetch data from an API [https://viacep.com.br] and start dealing 
          with states, objects, asynchronous events, catching exceptions, exploring the css and html intricacies
          and prepare the app for JavaScript orchestrate the UI/UX without the usage of any framework."
            thumbnail={viaCep}
          />

          <Link
            rel="dns-prefetch"
            to="https://github.com/rnhc1000/viaCEP.git"
            target="_blank"
            className="linkTo"
            textDecoration="inherit"
          >
            <p>https://github.com/rnhc1000/viaCEP.git</p>
          </Link>
        </div>

        <div>
          <Design
            provider="Leetcode Challenges"
            description="The only way to keep your game at a very high level is being challenged every day. 
          In order to meet and even exceed the current demand for skillful developers capable of tackling
          the data structure and algorithm beast the only is to keep in touch with the complexities of
          modern data structures such as trees, graphs and modern techniques sucs as Dynamic Programming,
          Braedth First Search and Depth First Search and so many others such as Binary Search, 
          Two Pointers, etc. Keeping up with the coding challenges at leetcode every single day."
            thumbnail={leetcode}
          />

          <Link
            rel="dns-prefetch"
            to="https://github.com/rnhc1000/challenge75.git"
            target="_blank"
            className="linkTo"
            textDecoration="inherit"
          >
            <p>https://github.com/rnhc1000/challenge75.git</p>
          </Link>
        </div>
        <div>
          <Design
            provider="FinOps Platform"
            description="Set of applications that allow Observability and Service Engineering teams to track
          every microservice operational status of the Transfer Funds Platform as a Service. Developed using 
          Laravel framework and NoSQL databases, these applications collect metadata  in realtime from each OLTP database 
          and Java services backend where the financial transactions data are persisted and forward them to the Service teams that provide 
          support 24 x 7 for the platform"
            thumbnail={dashBoard}
          />
          <Link
            rel="dns-prefetch"
            to="https://github.com/rnhc1000/challenge75.git"
            target="_blank"
            className="linkTo"
            textDecoration="inherit"
          >
            <p>https://github.com/rnhc1000/challenge75.git</p>
          </Link>
        </div>
        <div>
          <Design
            provider="Digital Payments Platform as a Service"
            description="simatefPAY is a payment app that creates a payment 
          link(URL), allowing to make sales easily and securely for those retail stores that do home sales and 
          telephone sales. It has all the necessary resources to accept the most 
          diverse cards on the market, allowing your retail store to make sales easily and quickly. 
          You create a link with all necessary information to collect the payment data and send it to the customer
          via any social networks and even via email. The application connects to acquirers using a 
          highly robust encrypted private network, offering its users security levels in compliance 
          with the most demanding requirements of the card industry."
            thumbnail={easyPag}
          />
          <Link
            rel="dns-prefetch"
            to="https://github.com/rnhc1000/challenge75.git"
            target="_blank"
            className="linkTo"
            textDecoration="inherit"
          >
            <p>https://github.com/rnhc1000/challenge75.git</p>
          </Link>
        </div>
        <div>
          <Design
            title=""
            provider="Observability, Monitoring and Management of Logs"
            description="By integrating Grafana, Elasticsearch, and Zabbix, I developed a comprehensive observability stack. 
          Elasticsearch can handle the storage and indexing of large volumes of log data, Zabbix can monitor 
          the infrastructure and application metrics, and Grafana can provide a unified visualization layer. 
          This combination allows for immediate insight into the current state of the application and infrastructure,
          helping to understand trends and patterns over time to prevent future issues, proactive identification and 
          resolution of potential problems.
          A single-pane-of-glass view of the entire system, facilitating quick and informed decision-making,
          enhancing the ability to detect and diagnose issues swiftly but also empowers teams to 
          optimize performance, ensure uptime, and deliver a seamless user experience."
            thumbnail={devOps}
          />
          <Link
            rel="dns-prefetch"
            to="https://github.com/rnhc1000/challenge75.git"
            target="_blank"
            className="linkTo"
            textDecoration="inherit"
          >
            <p>https://github.com/rnhc1000/challenge75.git</p>
          </Link>
          <Design
            provider="Retail Stores GeoIP Location"
            description="This application was developed using PERL and using  IPv4/IPv6 address geolocation of 
          each retail store that has the payment application running all over the country. This app provides real-time 
          visualization point of sales allowing proactive identification of the functionality and availability of the 
          payment application, issuing alerts in real-time that are forwarded to the service desk 
          to deal with the necessary techical support actions proactively and preventively."
            thumbnail={mapa}
          />
        </div>
        <div>
          <Design
            provider="Health Educational Portal"
            description="Educational page for a university professor specializing in Genetics and also working 
          in the areas of Cytology, Histology, Pathology and Biochemistry. The purpose of this portal is to 
          share teaching materials, scientific articles, tutorials and updates on scientific research. 
          The platform aims to offer an intuitive interface to facilitate access to educational resources, 
          promoting learning and the exchange of knowledge between students and professionals in the field."
            thumbnail={draperpcosta}
          />

          <Link
            rel="dns-prefetch"
            to="https://github.com/rnhc1000/challenge75.git"
            target="_blank"
            className="linkTo"
            textDecoration="inherit"
          >
            <p>https://github.com/rnhc1000/challenge75.git</p>
          </Link>
        </div>
        <Zoom>
          <Iframe
            url="https://www.youtube.com/embed/zA-wZsEwoJ8"
            width="480"
            height="240px"
            id="teste"
            loading="eager"
            className="project-title"
            title="A youtube video on React hooks"
          />
        </Zoom>

        <Zoom>
          <Iframe
            url="https://www.youtube.com/embed/CIT60s-Adrs"
            width="480px"
            height="240px"
            id=""
            loading="eager"
            className="project-title"
            title="A youtube video on React hooks"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
          />
        </Zoom>
      </section>
    );
  }
}

export default Designs;
