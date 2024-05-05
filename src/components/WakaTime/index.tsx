import './styles.css';
import { Link } from "react-router-dom";
import cloud101 from "../../assets/webp/cloud101.png.webp";
import essentials from "../../assets/webp/essential.png.webp";
import quest from "../../assets/webp/quest.png.webp";
import oca from "../../assets/webp/oca.png.webp";
import ofa from "../../assets/webp/ofa.png.webp";
import leetcode from "../../assets/webp//leetCode_logo.webp";


import Zoom from "react-reveal/Zoom";
import { ReactTyped } from "react-typed";

export default function WakaTime() {

    return (
        <section id="wakatime-section" className="wakatime-section">

            <div className="wakatimes-section-header">
                <Zoom>

                    <p className="waka-section-qanda">
                        <ReactTyped strings={["This is how I have been spending most of time..."]} typeSpeed={100} />
                    </p>
                    <p className="waka-section-qanda">
                        <ReactTyped strings={["Coding, debuging and deploying with the tools below."]} typeSpeed={100} />
                    </p>

                    <div>
                        <br></br>
                        <Link to='/Wakatime'><img className="essential-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="aws-essentials" alt="Spring" src={essentials} /></Link>
                        <Link to='/Wakatime'><img className="cert-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="aws-cloud" alt="aws" src={cloud101} /></Link>
                        <Link to='/Wakatime'><img className="quest-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="aws-practicioner" alt="Spring" src={quest} /></Link>
                        <Link to='/Wakatime'><img className="oca-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="oci-architect" alt="React" src={oca} /></Link>
                        <Link to='/Wakatime'><img className="oca-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="oci-foundations" alt="Mongo" src={ofa} /></Link>

                    </div>
                    <br></br>
                    <Link
                        rel="dns-prefetch"
                        to="https://github.com/rnhc1000"
                        target="_blank"
                    >
                    <p className="waka-section-qanda">
                        <ReactTyped strings={["My current stats at ... "]} typeSpeed={100} /><i className="fab fa-github"></i>  
                    </p>
                    </Link>
                    <br></br>
                  
                  
                    <figure>
                        <embed src="https://github-readme-stats.vercel.app/api/top-langs/?username=rnhc1000&layout=compact&theme=dark"></embed>
                    </figure>
                    <br></br>
                    <p className="waka-section-qanda">
                        <ReactTyped strings={["Or doing some challenges at leetcode! Click below to learn more!"]} typeSpeed={100} />
                    </p>
                    <br></br>

                    <Link
                        rel="dns-prefetch"
                        to="https://leetcode.com/rferreira_757/"
                        target="_blank"
                        className="contacts-details"
                    >
                        <img className="contacts-waka" alt="leetcode" src={leetcode} />
                        <p className="waka-section-qanda">https://leetcode.com/rferreira_757</p>
                    </Link>


                    <br></br>
                    <p className="waka-section-qanda">
                        <ReactTyped strings={["Data collected in real-time by https://wakatime.com..."]} typeSpeed={100} />
                    </p>
                    <div className="contacts-links">
                        <Link
                            rel="dns-prefetch"
                            to="https://wakatime.com"
                            target="_blank"
                            className="contacts-details"
                        >
                        </Link>
                    </div>
                </Zoom>

                <figure className="wakatime-img">
                    <embed src="https://wakatime.com/share/@rferreira_757/cfb117ee-0978-450f-b112-ad8398eb358a.svg"></embed>
                </figure>
            </div>
        </section>

    );
}