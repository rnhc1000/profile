## Professional Web Page - @Ricardo Ferreira
Here you have an attempt to have an idea of trajetory as a Software Engineer facing a lot of different projects most of them very turned put to be very succesful products and helped companies I worked for to increate their profitability and productivity.
Here are some of the technologies I have dealt with
- SCSI - Small Ccomputer Interfaces
- C language
- OSI Networking Model
- OpenBSD
- FreeBSD
- Linux
- Cisco IOS
- DNS - Bind
- Apache/Nginx
- MySQL
- PHP
- HTML
- CSS
- Javascript
- Java
- Spring Boot
- MongoDB
- OpenVPN
- Firewall
- Zabbix
- Nagios
- Prometheus
- Grafana
- Jenkins
- Maven
- SonarQube
- etc...
## _Table of contents_
- [Professional Web Page - @Ricardo Ferreira](#professional-web-page---ricardo-ferreira)
- [_Table of contents_](#table-of-contents)
- [_Overview_](#overview)
- [_Screenshot_](#screenshot)
- [_Links_](#links)
- [_Built with_](#built-with)
- [_What I practiced_](#what-i-practiced)
- [_Continued development_](#continued-development)
  - [_Useful resources_](#useful-resources)
- [_Author_](#author)
- [Acknowledgments](#acknowledgments)
## _Overview_
The portfolio is coded using ReactJS, using hooks such as useState, useLocation, useEffect:
- src|
    - App.tsx
    - assets|
    - components|
      - Contact
      - Footer
      - Header
      - Project
      - Skill
      - welcome
    - routes
      - Contacts
      - Feet
      - Home
      - Intro
      - Projects
      - Skills
    - utils
   - App.tsx
   - index.css
   - main.tsx
   - index.html
   - tsconfig.json
   - tsconfig.node.json
   - vite.config.js
   - yarn.lock
- public|

## _Screenshot_
[![](./portfolio.png)]()
## _Links_
- Live Site URL: [https://www.ferreiras.dev.br] 
## _Built with_

 ![](https://ferreiras.dev.br/assets/images/icons/git-scm-icon.svg) | ![](https://ferreiras.dev.br/assets/images/icons/react.svg) | ![](https://ferreiras.dev.br/assets/images/icons/vite.svg) | ![](https://ferreiras.dev.br/assets/images/icons/yarn-title.svg) | ![](https://ferreiras.dev.br/assets/images/icons/ts-logo.svg) | ![](https://ferreiras.dev.br/assets/images/icons/icons8-javascript.svg) | ![](https://ferreiras.dev.br/assets/images/icons/icons8-visual-studio-code.svg) | ![](https://ferreiras.dev.br/assets/images/icons/axios-logo.svg)| ![](https://ferreiras.dev.br/assets/images/icons/react-router-stacked-color-inverted.svg) | ![](https://ferreiras.dev.br/assets/images/icons/oauth_logo_final.svg)

 ## _What I practiced_
```jsx
export default function Project() {

    return (
        <>
            <section id="project-section" className="projects-section-header">
                <p>Here are a few of my latest projects!</p>
                <p>Give them a try.... Just click on each image below...</p>
                <h4>As some of them are corporate apps, call me if you want to know details...</h4>
                <div className="projects-session">
                    <div className="projects-grid">
                        <Zoom>
                            <Iframe url="https://www.youtube.com/embed/zA-wZsEwoJ8"
                                width="480px"
                                height="240px"
                                id=""
                                className="project-title"
                            />
                            <Iframe url="https://www.youtube.com/embed/CIT60s-Adrs"
                                width="480px"
                                height="240px"
                                id=""
                                className="project-title"
                            />
                        </Zoom>
                        <Zoom>
                            <Link to="https://dashboard.simatef.com.br" target="_blank" className="project project-tile">
                                <img className="project-image" src={dashBoard} alt="project"></img>
                                <p className="project-title">
                                    <span className="code">&lt;</span>
                                    Financial OPs
                                    <span className="code">/&gt;</span>
                                </p>
                            </Link>
                            <Link to="https://easypay.simatef.com.br" target="_blank" className="project project-tile">
                                <img className="project-image" src={easyPay}
                                    alt="project"></img>
                                <p className="project-title">
                                    <span className="code">&lt;</span>
                                    &copy;easyPAY backEnd
                                    <span className="code">/&gt;</span>
                                </p>
                            </Link>
                        </Zoom>
                        <Zoom>
                            <Link to="https://easypag.simatef.com.br" target="_blank" className="project project-tile">
                                <img className="project-image" src={easyPag}
                                    alt="project"></img>
                                <p className="project-title">
                                    <span className="code">&lt;</span>
                                    &copy;easyPAY frontEnd
                                    <span className="code">/&gt;</span>
                                </p>
                            </Link>
                            <Link to="https://alerta.simatef.com.br/nagios" target="_blank" className="project project-tile">
                                <img className="project-image" src={devOps} alt="project"></img>
                                <p className="project-title">
                                    <span className="code">&lt;</span>
                                    devOps
                                    <span className="code">/&gt;</span>
                                </p>
                            </Link>
                        </Zoom>
                        <Zoom>
                            <Link to="https://github.com/rnhc1000" target="_blank" className="project project-tile">
                                <img className="project-image" src={springBoot} alt="project"></img>
                                <p className="project-title">
                                    <span className="code">&lt;</span>
                                    code
                                    <span className="code">/&gt;</span>
                                </p>
                            </Link>
                            <Link to="https://mapadeclientes.simatef.com.br" target="_blank" className="project project-tile">
                                <img className="project-image" src={mapa} alt="project"></img>
                                <p className="project-title">
                                    <span className="code">&lt;</span>
                                    GeoIP - Merchants
                                    <span className="code">/&gt;</span>
                                </p>
                            </Link>
                        </Zoom>
                        <Zoom>
                            <Link to="https://zabbix.enormity.com.br" target="_blank" className="project project-tile">
                                <img className="project-image" src={zabbix} alt="project"></img>
                                <p className="project-title">
                                    <span className="code">&lt;</span>
                                    devOPs
                                    <span className="code">/&gt;</span>
                                </p>
                            </Link>
                            <Link to="https://notas.ferreiras.dev.br" target="_blank" className="project project-tile">
                                <img className="project-image" src={viaCep} alt="project"></img>
                                <p className="project-title">
                                    <span className="code">&lt;</span>
                                    ZIP code - BR
                                    <span className="code">/&gt;</span>
                                </p>
                            </Link>
                        </Zoom>
                    </div>
                </div>
                <Zoom>
                    <div className="contact-me">
                        <Link to="/"> <img src={homeLogo}></img></Link>
                        <Link to="/skills">   <img src={skillsLogo}></img></Link>
                        <Link to="/contacts"> <img src={contactLogo}></img></Link>
                    </div>
                </Zoom>
            </section>

        </>
    );
}
``` 

## _Continued development_
- Next step: Show diplomas, certificates and achievements using an animaited carrousel.
### _Useful resources_
- [https://reactjs.org] React lets you build user interfaces out of individual pieces called components!.
- [https://yarnpkg.org/] Open-source package manager used to manage dependencies in  JavaScript.
- [https://vitejs.dev/guide/] Build tool that aims to provide a faster and leaner development experience for modern web projects.
## _Author_
- Website - [https://ferreiras.dev.br] 
## Acknowledgments
- 
