import './styles.css';
import CountUp from 'react-countup';
import { Fade } from "react-awesome-reveal";
import logo from '../../assets/images/webp/signRferreiraBlack.png.webp';

const date = new Date();
const year = date.getFullYear();
const dob: number = 1957;

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function Signature() {
    return (
        <section className="signature-section">
            <Fade>
                <div className="signature-container">
                    <button 
                        className="scroll-to-top" 
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                    >
                        <span className="scroll-arrow">↑</span>
                        <span className="scroll-text">Back to top</span>
                    </button>
                    
                    <div className="signature-divider"></div>
                    
                    <div className="signature-brand">
                        <img src={logo} alt="Ricardo Ferreira" className="signature-logo" />
                        <p className="signature-year">
                            <CountUp separator="" delay={0} start={dob} end={year}/>
                        </p>
                    </div>
                </div>
            </Fade>
        </section>
    );
}