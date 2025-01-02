
import  './styles.css';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";

import skillLogo from '../../assets/svg/mortarboard.svg';
import contactLogo from '../../assets/svg/whatsapp.svg';
import codeLogo from '../../assets/svg/tools.svg';
import history from '../../assets/svg/book.svg';
import gitLogo from '../../assets/svg/code-slash.svg';

const date =  new Date();
const year = date.getFullYear();
const dob:number = 1957;

console.log(year);
console.log(dob);
export default function Signature() {
    return (
        <section>
            <Fade>
                <div id="signature">
                    <Link to='/history'><img data-toggle="tooltip" data-placement="top" data-animation="" title="History" src={history} alt="History" /></Link>
                    <Link to='/skills'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Skills" src={skillLogo} alt="Skills" /></Link>
                    <Link to='/projects'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Projects" src={codeLogo} alt="Projects" /></Link>
                    <Link to='/contacts'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Contact" src={contactLogo} alt="Contact" /></Link>
                    <Link to='/wakatime'><img data-toggle="tooltip" data-placement="top" data-animation="" title="Code" src={gitLogo} alt="Code" /></Link>
                </div>
                <div>
                    <p id="sign-rights">
                        <CountUp separator="" delay={0} start={dob} end={year} />
                    </p>
                    <p id="sign-rights">&copy;Ricardo Ferreira - All rights reserved</p>
                </div>
            </Fade>
        </section>

    )

}