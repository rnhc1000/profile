import './styles.css';
import fluxoTef from '../../assets/fluxoTEF-2022-TT.png';
import dashBoard from '../../assets/dashboard.png';
import easyPay from '../../assets/easypayFrontEnd.png';
import { Link } from 'react-router-dom';
import easyPag from '../../assets/easypayBackEnd.png';
import devOps from '../../assets/devOps.png';
import springBoot from '../../assets/code.png';
import mapa from '../../assets/mapa.png';
import zabbix from '../../assets/zbx.png';
import viaCep from '../../assets/viaCEP.png';
import Zoom from 'react-reveal/Zoom';
import Iframe from 'react-iframe';

export default function Project() {

    return (

        <section id="project-section" className="projects-section-header">
            <p>Here are a few of my latest projects!</p>
            <p>Give them a try.... Just click on each image below...</p>
            <h4>As some of them are corporate apps, call me if you want to know details...</h4>
            <Zoom>
                <div className="projects-session">
                    <div className="projects-grid">
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


                    </div>
                </div>
            </Zoom>
        </section>
    );
}