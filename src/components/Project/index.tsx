import './styles.css';
import dashBoard from '../../assets/dashboard.png';
import { Link } from 'react-router-dom';
import easyPag from '../../assets/easypayBackEnd.png';
import devOps from '../../assets/devOps.png';
import springBoot from '../../assets/code.png';
import mapa from '../../assets/mapa.png';
import zabbix from '../../assets/zbx.png';
import viaCep from '../../assets/viaCEP.png';
import Zoom from 'react-reveal/Zoom';
import Iframe from 'react-iframe';
import homeLogo from '../../assets/house-check.svg';
import skillsLogo from '../../assets/mortarboard.svg';
import contactLogo from '../../assets/whatsapp.svg';
import history from '../../assets/txt.svg';


export default function Project() {

    return (
        
            <section id="project-section" className="projects-section-header">
                <h4>Here are a few of my latest projects!</h4>
                <p>Give them a try.... Just click on each image below...</p>
                <p>As some of them are corporate apps, call me if you want to know details...</p>
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
                            <Link to="https://zabbixx.simatef.com.br" target="_blank" className="project project-tile">
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
                        <Link to='/'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Home" src={homeLogo} /></Link>
                        <Link to='/history'><img data-toggle="tooltip" data-placement="top" data-animation="" title="History" src={history} /></Link>
                        <Link to='/skills'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Skills" src={skillsLogo} /></Link>
                        <Link to='/contacts'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Contact" src={contactLogo} /></Link>
                    </div>
                </Zoom>
            </section>

        
    );
}