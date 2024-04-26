import './styles.css';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import Iframe from 'react-iframe';
import dashBoard from '../../assets/webp/dashboard.png.webp';
import easyPag from '../../assets/webp/easypayBackEnd.png.webp';
import devOps from '../../assets/webp/devOps.png.webp';
import springBoot from '../../assets/webp/code.png.webp';
// import leetcode from '../../assets/webp/leetcodeProject.png.webp';
import mapa from '../../assets/webp/mapa.png.webp';
import zabbix from '../../assets/webp/zbx.png.webp';
import viaCep from '../../assets/webp/viaCEP.png.webp';
import homeLogo from '../../assets/svg/house-check.svg';
import skillsLogo from '../../assets/svg/mortarboard.svg';
import contactLogo from '../../assets/svg/whatsapp.svg';
import history from '../../assets/svg/txt.svg';


export default function Project() {

    return (

        <section id="project-section">
            <div className="projects-container">
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
                            </Zoom>
                            
                            <Zoom>
                            
                            <Iframe url="https://www.youtube.com/embed/CIT60s-Adrs"
                                width="480px"
                                height="240px"
                                id=""
                                className="project-title"
                                
                            />
                            
                            </Zoom>
                        
                        <Zoom>
                            <Link rel="dns-prefetch" to="https://dashboard.simatef.com.br" target="_blank" className="project project-tile">
                                <img className="project-image" src={dashBoard} alt="project"></img>
                                <p className="project-title">
                                <span className="code">
                                    &lt;Transctions Portal</span>
                                    <span className="code">/&gt;</span>
                                </p>
                            </Link>
                        </Zoom>
                        <Zoom>
                            <Link rel="dns-prefetch" to="https://easypag.simatef.com.br" target="_blank" className="project project-title">
                                <img className="project-image" src={easyPag}
                                    alt="project"></img>
                                <p className="project-title">
                                <span className="code">
                                    &lt;easyPAY</span>
                                    <span className="code">/&gt;</span>
                                </p>
                            </Link>
                            <Link rel="dns-prefetch" to="https://github.com/rnhc1000/viaCEP.git" target="_blank" className="project project-title">
                                <img className="project-image" src={viaCep} alt="project"></img>
                                <p className="project-title">
                                <span className="code">
                                    &lt;Zip Code</span>
                                    <span className="code">/&gt;</span>
                                </p>
                            </Link>

                        </Zoom>
                        <Zoom>
                            
                            <Link rel="dns-prefetch" to="https://github.com/rnhc1000/challenge75.git" target="_blank" className="project project-title">
                                <img className= "projects-grid-leetcode" src={springBoot} alt="project"></img>
                                <p className="project-title">
                                <span className="code">
                                    &lt;LeetCode</span>
                                    <span className="code">/&gt;</span>
                                </p>
                            </Link>
                            
                            <Link rel="dns-prefetch" to="https://mapadeclientes.simatef.com.br" target="_blank" className="project project-title">
                                <img className="project-image" src={mapa} alt="project"></img>
                                <p className="project-title">
                                <span className="code">
                                    &lt;GeoIP-Merchants</span>
                                    <span className="code">/&gt;</span>
                                </p>
                            </Link>
                        </Zoom>
                        <Zoom>
                            <Link rel="dns-prefetch" to="https://zabbixx.simatef.com.br" target="_blank" className="project project-title">
                                <img className="project-image" src={zabbix} alt="project"></img>
                                <p className="project-title">
                                <span className="code">
                                    &lt;devOps</span>
                                    <span className="code">/&gt;</span>
                                </p>
                            </Link>
                            <Link rel="dns-prefetch" to="https://alerta.simatef.com.br/nagios" target="_blank" className="project project-title">
                                <img className="project-image" src={devOps} alt="project"></img>
                                <p className="project-title">
                                    <span className="code">
                                    &lt;devOps</span>
                                    <span className="code">/&gt;</span>
                                </p>
                            </Link>

                        </Zoom>
                    </div>
                </div>
                <Zoom>
                    <div className="contact-me">
                        <Link to='/'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Home" alt="Home" src={homeLogo} /></Link>
                        <Link to='/history'><img data-toggle="tooltip" data-placement="top" data-animation="" title="History" alt="History" src={history} /></Link>
                        <Link to='/skills'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Skills" alt="Skills" src={skillsLogo} /></Link>
                        <Link to='/contacts'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Contact" alt="Contact" src={contactLogo} /></Link>
                    </div>
                </Zoom>
            </div>
        </section >
    );
}