import './styles.css';

import CountUp from 'react-countup';
import logo from '../../assets/images/webp/signRferreiraBlack.png.webp';

const date = new Date();
const year = date.getFullYear();
const dob: number = 1957;

export default function Footer() {

    return (
        <footer>
            <nav id="feet-footer">
                <div className="footer-year">
                    <h4><CountUp separator="" delay={0} start={dob} end={year}/></h4>
                </div>
                <div className="footer-logo">
                    <img src={logo} alt="Ricardo Ferreira" />
                </div>
            </nav>
        </footer>
    )
}