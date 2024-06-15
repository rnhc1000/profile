
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