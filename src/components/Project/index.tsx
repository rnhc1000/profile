import './styles.css';

export default function Project() {

    return (

        <section id="project-section" className="projects-section-header">
            <h3>Here are a few of my latest projects</h3>
            <h4>Give them a try.... Just click on each image below...</h4>
            <h5>As some of them are corporate apps, call me if you want to know details...</h5>

            <div className="projects-session">
                <div className="projects-grid">
                    <a href="https://sotech.com.br" target="_blank" className="project project-tile">
                        <img className="project-image" src="assets/images/fluxoTEF-2022-TT.png" width="500px" height="250px"
                            alt="project">
                            <p className="project-title">
                                <span className="code">&lt;</span>
                                &copy;simaTEF
                                <span className="code">/&gt;</span>
                            </p>
                    </a> <a href="https://dashboard.simatef.com.br" target="_blank" className="project project-tile">
                        <img className="project-image" src="assets/images/dashboard.png" width="500px" height="250px" alt="project">
                            <p className="project-title">
                                <span className="code">&lt;</span>
                                Financial OPs
                                <span className="code">/&gt;</span>
                            </p>
                    </a>
                    <a href="https://easypay.simatef.com.br" target="_blank" className="project project-tile">
                        <img className="project-image" src="assets/images/easypayBackEnd.png" width="500px" height="250px"
                            alt="project">
                            <p className="project-title">
                                <span className="code">&lt;</span>
                                &copy;easyPAY backEnd
                                <span className="code">/&gt;</span>
                            </p>
                    </a>
                    <a href="https://easypag.simatef.com.br" target="_blank" className="project project-tile">
                        <img className="project-image" src="assets/images/easypayFrontEnd.png" width="500px" height="250px"
                            alt="project">
                            <p className="project-title">
                                <span className="code">&lt;</span>
                                &copy;easyPAY frontEnd
                                <span className="code">/&gt;</span>
                            </p>
                    </a>
                    <a href="https://alerta.simatef.com.br/nagios" target="_blank" className="project project-tile">
                        <img className="project-image" src="assets/images/devOps.png" width="500px" height="250px" alt="project">
                            <p className="project-title">
                                <span className="code">&lt;</span>
                                devOps
                                <span className="code">/&gt;</span>
                            </p>
                    </a>
                    <a href="https://github.com/rnhc1000" target="_blank" className="project project-tile">
                        <img className="project-image" src="assets/images/springBoot.png" width="500px" height="250px" alt="project">
                            <p className="project-title">
                                <span className="code">&lt;</span>
                                code
                                <span className="code">/&gt;</span>
                            </p>
                    </a>
                    <a href="https://mapadeclientes.simatef.com.br" target="_blank" className="project project-tile">
                        <img className="project-image" src="assets/images/mapa.png" width="500px" height="250px" alt="project">
                            <p className="project-title">
                                <span className="code">&lt;</span>
                                GeoIP - Merchants
                                <span className="code">/&gt;</span>
                            </p>
                    </a>
                    <a href="https://zabbix.enormity.com.br" target="_blank" className="project project-tile">
                        <img className="project-image" src="assets/images/zbx.png" width="500px" height="250px" alt="project">
                            <p className="project-title">
                                <span className="code">&lt;</span>
                                devOPs
                                <span className="code">/&gt;</span>
                            </p>
                    </a>
                    <a href="https://notas.ferreiras.dev.br" target="_blank" className="project project-tile">
                        <img className="project-image" src="assets/images/viaCEP.png" alt="project">
                            <p className="project-title">
                                <span className="code">&lt;</span>
                                ZIP code - BR
                                <span className="code">/&gt;</span>
                            </p>
                    </a>
                </div>
            </div>
        </section>
    );
}