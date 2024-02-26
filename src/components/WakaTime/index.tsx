import './styles.css';
import { Link } from "react-router-dom";
import springLogo from "../../assets/Spring_Boot.svg";
import reactLogo from "../../assets/react.svg";
import mongoLogo from "../../assets/mongo.svg";
import mysqlLogo from "../../assets/mysql-official.svg";
import jenkinsLogo from "../../assets/Jenkins_logo.svg";
import wakaLogo from "../../assets/java-icon.svg";
import intellijLogo from "../../assets/icons/IntelliJ_IDEA_Icon.svg";
import gitLogo from "../../assets/icons/git-scm-icon.svg";
import bashLogo from "../../assets/icons/icons8-javascript.svg";
import dockerLogo from '../../assets/icons/docker-svgrepo-com.svg';
import leetcode from "../../assets/icons/leetcode-svgrepo-com.svg";
import awsLogo from "../../assets/logo-amazon.svg";

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
                        <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="Wakatime" src={wakaLogo} /></Link>
                        <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="Spring" src={dockerLogo} width="48px" height="48px" /></Link>
                        <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="Spring" src={springLogo} /></Link>
                        <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="React" src={reactLogo} /></Link>
                        <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="Mongo" src={mongoLogo} /></Link>
                        <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="MySQL" src={mysqlLogo} /></Link>
                        <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="Jenkins" src={jenkinsLogo} /></Link>
                        <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="IntelliJ" src={intellijLogo} /></Link>
                        <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="Git" src={gitLogo} /></Link>
                        <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="Bash" src={bashLogo} /></Link>
                        <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="Bash" src={awsLogo} /></Link>

                    </div>
                    <br></br>
                    <Link
                        to="https://github.com/rnhc1000"
                        target="_blank"
                    >
                    <p className="waka-section-qanda">
                        <ReactTyped strings={["My current stats at ... "]} typeSpeed={100} /><i className="fab fa-github"></i>  
                    </p>
                    </Link>
                    <br></br>
                  
                    <figure className="github-img">
                        <embed src="https://github-readme-stats.vercel.app/api/top-langs/?username=rnhc1000&layout=compact&theme=dark"></embed>
                    </figure>
                    <br></br>
                    <p className="waka-section-qanda">
                        <ReactTyped strings={["Or doing some challenges at leetcode! Click below to learn more!"]} typeSpeed={100} />
                    </p>
                    <br></br>

                    <Link
                        to="https://leetcode.com/rferreira_757/"
                        target="_blank"
                        className="contacts-details"
                    >
                        <img className="contacts-waka" alt="leetcode" src={leetcode} />
                    </Link>


                    <br></br>
                    <p className="waka-section-qanda">
                        <ReactTyped strings={["Data collected in real-time by https://wakatime.com..."]} typeSpeed={100} />
                    </p>
                    <div className="contacts-links">
                        <Link
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