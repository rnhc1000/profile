import "./styles.css";
import React from "react";
import Design from "../Design";
import dashBoard from "../../assets/webp/dashboard.png.webp";
import captura from "../../assets/webp/captura.jpg.webp";
import conciliador from "../../assets/webp/conciliadorSimatef.jpg.webp";
import easyPag from "../../assets/webp/simatefPay.png.webp";
import devOps from "../../assets/webp/devOps.png.webp";
import mapa from "../../assets/webp/mapa.png.webp";
import viaCep from "../../assets/webp/viaCEP.png.webp";
import anatel from "../../assets/webp/anablock-page.png.webp";
import leetcode from "../../assets/webp/leetcode.png.webp";
import todolist from "../../assets/webp/todo.webp";
import calculator from "../../assets/webp/calculatorWebUI.png.webp";
import draperpcosta from "../../assets/webp/draPerpCostaReadme.png.webp";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";

class Designs extends React.Component {
  render() {
    return (
      <section id="articles">
        <h1 className="articles-title">Here are a few of my latest projects!</h1>
        <Zoom>
          <div>
            <Design
              provider="Digital Payment - Software as a Service"
              description="simaTef© is a SaaS platform for collecting digital payments using credit, 
              debit cards and instantaneous payments (Pix©), available to thousands of retail 
              stores scattered the country. Fully dockerized and cloud-based, this SaaS platform uses 
              the most advanced and robust secure communications channel to allow a safe 
              operation in fully accordance to the financial industry security requirements. 
              Running Oracle as an OLTP database as core of the platform and Java 17+ both on transaction 
              server and client application, positioned the vompany as a innovative payment services provider 
              that has offered to retail stores, access to the most modern digital payments tools such 
              as digital wallets products and traditional credit and debit cards payments thriving 
              their productivity and profitability."
              thumbnail={captura}
            />
            <Link
              rel="dns-prefetch"
              to="https://sotech.com.br/solucoes/vendas-com-cartao-tef"
              target="_blank"
              className="linkTo"
            // textDecoration="inherit"
            >
              <p>payments.simatef.com.br</p>
            </Link>
          </div>
        </Zoom>

        <Zoom>
          <div>
            <Design
              provider="FinOps Platform"
              description="Set of applications that allow Observability and Service Engineering teams to track
          every microservice operational status of the Transfer Funds Platform as a Service. Developed using 
          Laravel framework, Oracle&copy;, SSL NGINX Reverse Proxy, Redis and NoSQL databases, based on
          microservices software engineering approach these applications collect metadata in realtime from each OLTP database 
          and Java services backend where the financial transactions data are persisted and forward them to the Service Desk teams that provide 
          technical support 24 x 7 for the platform."
              thumbnail={dashBoard}
            />
            <Link
              rel="dns-prefetch"
              to="https://dashboard.simatef.com.br"
              target="_blank"
              className="linkTo"
            // textDecoration="inherit"
            >
              <p>FinOps.simatef.com.br</p>
            </Link>
          </div>
        </Zoom>

        <Zoom>
          <div>
            <Design
              provider="Payments Applications - simatefPAY&copy;"
              description="simatefPAY&copy; is a payment app that provides a payment 
          link(URL), to make payments easier for retail stores that do home delivery and 
          telephone sales. It has all the necessary resources to accept the most 
          important cards on the market, allowing retail stores scattered over the country to quickly collect sales payments. 
          You create a link with all necessary information to collect the payment and send it to the customer
          via SMS, social media app or email. The app connects retail store customers to acquirers through a 
          robust and secure communications channel, offering them security levels in compliance 
          with the most demanding requirements of the financial industry. simatefPAY&copy; has been powered 
          by Java 17, Spring Boot, Spring Security, Spring JPA, rabbitMQ, MongoDB, ReactJS and PHP8+.  "
              thumbnail={easyPag}
            />
            <Link
              rel="dns-prefetch"
              to="https://easypag.simatef.com.br"
              target="_blank"
              className="linkTo"
            // textDecoration="inherit"
            >
              <p>simatefPAY&copy;</p>
            </Link>
          </div>
        </Zoom>

        <Zoom>
          <div>
            <Design
              provider="Financial and Banking Auditing Application"
              description="It is a bank and financial reconciliation system that automatically reconciles 
              sales done ​​with cards ou instantaneous payments (Pix&copy;), with information provided 
              by the acquiring networks, by the banks used by the retail store, and
              by the ERP software, ensuring and validating whether the sales credits were duly credited 
              by the acquiring networks to the retail store bank account and whether the contracted rates 
              are in accordance with the contract, avoiding financial losses and reducing the cost and time 
              of verification and financial auditing on the receivables. 
              The solution also monitors and checks credits related to cancellations, cashbacks, and 
              refunds, enabling better management of receivables provisioning. It is a multitenant and monolith
              application developed using .Net, Boostrap, C# and MySQL database, and connected to banking networks to collect data from bank accounts. "
              thumbnail={conciliador}
            />
            <Link
              rel="dns-prefetch"
              to="https://sotech.com.br/solucoes/conciliacao-bpo"
              target="_blank"
              className="linkTo"
            // textDecoration="inherit"
            >
              <p>conciliador.simatef.com.br</p>
            </Link>
          </div>
        </Zoom>

        <Zoom>
          <div>
            <Design
              provider="Calculator WEB API"
              description="The goal is to evaluate how I faced the challenge of building a 
              RESTful API to be consumed by a ReactJS-based app available below. 
              The API must ofer endpoints to offer basic math operations and providing a random string generator. 
              There are some specific requirements to be met, such as authentication and authorization, data persistence, 
              paginated data recovery, consume endpoints of another API, &minus; https://random.org &minus, authenticated 
              access to endpoints and some others.The app has been coded using Java 21, Spring Boot 3.3.2, Gradle, Javadoc, Spring Security, Spring JPA, 
              Spring Webflux, Flyway, Jackson, Lombok, OpenAPI, MySQL, Docker and hosted in an AWS EC2 instance with 
              secure access provided by a NGINX SSL proxy reverse. Give it a shot at &#128071;
"
              thumbnail={calculator}
            />
            

            <Link
              rel="dns-prefetch"
              to="https://calculatorweb.ferreiras.dev.br"
              target="_blank"
              className="linkTo"
            // textDecoration="inherit"
            >
              
              <p>username: example@example.com</p>
              <p>password: example.com</p>
              <p>https://calculatorweb.ferreiras.dev.br</p>
            </Link>
            <Link
              rel="dns-prefetch"
              to="https://github.com/rnhc1000/calculatorWeb"
              target="_blank"
              className="linkTo"
            // textDecoration="inherit"
            >
              <p>API WebCalculator</p>
            </Link>
          </div>
        </Zoom>

        <Zoom>
          <div>
            <Design
              provider="Daily Task Assistent"
              description="An assistant app to add small reminders for the tasks you need 
          to tackle every single day. Simply jot down a quick note about a task, add it to a list, 
          and you're done. There are tons of nice notes apps out there but at each new version the UI/UX is getting
          a bit more complex to deal with specially if you are in a hurry. How about a simpler one like Post-Its notes.
          Quick, fast and intuitive. So, I decided on my free time to create an easier and customized
          online tool for quickly noting my tasks, using modern web applications development tools.
          It's implemented using Angular 17+ in the frontend framework and Java 17, Spring Boot, 
          Spring Security, MySQL, Docker, AWS ECS in the backend.
          To learn details, click in the repository link below!"
              thumbnail={todolist}
            />

            <Link
              rel="dns-prefetch"
              to="https://github.com/rnhc1000/daily-tasks.git"
              target="_blank"
              className="linkTo"
            // textDecoration="inherit"
            >
              <p>https://github.com/rnhc1000/daily-tasks.git</p>
            </Link>
          </div>
        </Zoom>

        <Zoom>
          <div>
            <Design
              provider="DNS RPZ - URL Blocked by DNS"
              description="The goal here is to provide a RESTful API that allows Internet Service Providers 
          that have BIND as their Domain Name Servers engines (DNS) to be fully compliant with the legal system of the country.
          In order to meet brazilian authorities requirements to block suspect URLs being used by the general public,
          this is an application that automates the creation of DNS Zones using BIND 9 and superior according to 
          Anatel ( Federal Regulatory Agency ) guidance and data available at a public API.  
          It has been developed using Java 17, Spring Boot, Spring Security, Swagger, MySQL and Docker and can
          be consumed to generate DNS Bind Resource Recors through a ReactJS SPA.
          "
              thumbnail={anatel}
            />

            <Link
              rel="dns-prefetch"
              to="https://github.com/rnhc1000/dnsBlockURL.git"
              target="_blank"
              className="linkTo"
            // textDecoration="inherit"
            >
              <p>https://github.com/rnhc1000/dnsBlockURL.git</p>
            </Link>
          </div>
        </Zoom>

        <Zoom>
          <div>
            <Design
              provider="Zero Framework and  Best Practices"
              description="This is an app that allows you to get a detailed address information given a valid 
          ZIP code (valid only in Brazil), available at [https://apicep.ferreiras.dev.br]. 
          The goal here is to dive into software engineering best practices, even in a small project as 
          a single page app, where you can take advantage of a design pattern that includes services, 
          models and controllers with a close eye to SOLID principles, specially the SRP and Dependency Injection, to fetch data from an API [https://viacep.com.br] and start dealing 
          with states, objects, asynchronous events, catching exceptions, exploring the CSS and HTML5 intricacies
          and prepare the app for JavaScript orchestrate the UI/UX without the usage of any framework."
              thumbnail={viaCep}
            />

            <Link
              rel="dns-prefetch"
              to="https://github.com/rnhc1000/viaCEP.git"
              target="_blank"
              className="linkTo"
            // textDecoration="inherit"
            >
              <p>https://github.com/rnhc1000/viaCEP.git</p>
            </Link>
          </div>
        </Zoom>

        <Zoom>
          <div>
            <Design
              provider="Leetcode Challenges"
              description="In order to meet and even exceed the current demand for skillful developers 
              capable of tackling the data structure and algorithms beasts we gotta keeping in touch with 
              the complexities of modern data structures such as trees, graphs, maps and modern algoritms 
              such as Dynamic Programming, Breadth First Search and Depth First Search, Binary Search,
              Two Pointers and so many others not less important. Keeping up with the coding challenges at leetcode every single day."
              thumbnail={leetcode}
            />

            <Link
              rel="dns-prefetch"
              to="https://github.com/rnhc1000/challenge75.git"
              target="_blank"
              className="linkTo"
            // textDecoration="inherit"
            >
              <p>https://github.com/rnhc1000/challenge75.git</p>
            </Link>
          </div>
        </Zoom>

        <Zoom>
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
              to="https://grafana.fibercon.com.br:3000/login"
              target="_blank"
              className="linkTo"
            // textDecoration="inherit"
            >
              <p>Grafana+Elasticsearch+Zabbix</p>
            </Link>
          </div>
        </Zoom>

        <Zoom>
          <div>
            <Design
              provider="Retail Stores GeoIP Location"
              description="This application was developed using PERL, GeoHash libraries and Apache proxy server, using IPv4/IPv6 address geolocation of 
          each retail store that has the payment application running all over the country. This app provides real-time 
          visualization point of sales, allowing proactive identification of the functionality and availability of the 
          payment application, issuing alerts in real-time that are forwarded to the service desk 
          to deal with the necessary techical support actions proactively and preventively."
              thumbnail={mapa}
            />
            <Link
              rel="dns-prefetch"
              to="https://sotech.com.br"
              target="_blank"
              className="linkTo"
            // textDecoration="inherit"
            >
              <p>https://sotech.com.br</p>
            </Link>
          </div>
        </Zoom>

        <Zoom>
          <div>
            <Design
              provider="Health Educational Portal"
              description="Educational page for a university professor specializing in Genetics and also working 
          in the areas of Cytology, Histology, Pathology and Biochemistry. The purpose of this portal is to 
          share teaching materials, scientific articles, tutorials and updates on scientific research. 
          The platform aims to offer an intuitive interface to facilitate access to educational resources, 
          promoting learning and the exchange of knowledge between students and professionals in the field.
          This pportal is powered by AWS, Angular 18 as frontend and Spring Boot, Spring JPA and PostgreSQL 
          as the backend."
              thumbnail={draperpcosta}
            />

            <Link
              rel="dns-prefetch"
              to="https://github.com/rnhc1000/draperpcosta.git"
              target="_blank"
              className="linkTo"
            // textDecoration="inherit"
            >
              <p>https://github.com/rnhc1000/draperpcosta.git</p>
            </Link>
          </div>
        </Zoom>
      </section>
    );
  }
}

export default Designs;
