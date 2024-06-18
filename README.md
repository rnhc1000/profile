## Professional Web Page - @Ricardo Ferreira
This is a real attempt to show my career development as a software engineer, facing a lot of different projects, most of which turned out to be very successful products and helped companies I worked for increase their profitability and productivity. Here are some of the technologies I have dealt with
- ReactJS, HTML, CSS & JavaScript
- Java & Spring Boot & Maven
- PHP, MySQL & Apache/Nginx
- MongoDB
- Zabbix & Nagios
- ElasticSearch, Prometheus, Grafana 
- Jenkins & SonarQube
- Drivers for SCSI mass storage devices
- Networking, DNS, Firewall
- OpenBSD & FreeBSD & Linux
- etc...
## _Table of contents_
- [Professional Web Page - @Ricardo Ferreira](#professional-web-page---ricardo-ferreira)
- [_Table of contents_](#table-of-contents)
- [_Overview_](#overview)
- [_Screenshot_](#screenshot)
- [_Links_](#links)
- [_Built with_](#built-with)
- [_How I did it_](#how-i-did-it)
- [_Continued development_](#continued-development)
  - [_Useful resources_](#useful-resources)
- [_Author_](#author)
- [Acknowledgments](#acknowledgments)
## _Overview_
These web pages were coded using ReactJS exploring hooks such as useState, useLocation, useEffect:
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

[![My Skills](https://skillicons.dev/icons?i=git,react,vite,yarn,typescript,html,css,javascript,vscode,redhat,aws)](https://skillicons.dev)



 ## _How I did it_
```jsx
import  './styles.css';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

import skillLogo from '../../assets/svg/mortarboard.svg';
import contactLogo from '../../assets/svg/whatsapp.svg';
import codeLogo from '../../assets/svg/tools.svg';
import history from '../../assets/svg/txt.svg';

export default function Signature() {
    return (
        <section>
            <Zoom>
                <div id="signature">
                    <Link to='/history'><img data-toggle="tooltip" data-placement="top" data-animation="" title="History" src={history} alt="History" /></Link>
                    <Link to='/skills'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Skills" src={skillLogo} alt="Skills" /></Link>
                    <Link to='/projects'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Projects" src={codeLogo} alt="Projects" /></Link>
                    <Link to='/contacts'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Contact" src={contactLogo} alt="Contact" /></Link>
                </div>
                <div>
                    <p id="sign-rights">
                        <CountUp separator="" delay={2} end={2024} />
                    </p>
                    <p id="sign-rights">&copy;Ricardo Ferreira - All rights reserved</p>
                </div>
            </Zoom>
        </section>

    )

}
``` 

## _Continued development_
- Use SMACSS methodology
### _Useful resources_
- [https://reactjs.org] React lets you build user interfaces out of individual pieces called components!.
- [https://yarnpkg.org/] Open-source package manager used to manage dependencies in  JavaScript.
- [https://vitejs.dev/guide/] Build tool that aims to provide a faster and leaner development experience for modern web projects.
## _Author_
- Website - [https://ferreiras.dev.br] 
## Acknowledgments
- 
