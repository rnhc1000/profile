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
import Zoom from "react-reveal/Zoom";
import { ReactTyped } from "react-typed";

export default function WakaTime() {

    return (
        <section id="wakatime-section" className="wakatime-section">

            <div className="wakatimes-section-header">
                <Zoom>
                    <p>
                        <ReactTyped strings={["Q: How are you doing, Ricardo?"]} typeSpeed={40} /> 
                    </p>
                    <p className="waka-section-qanda">
                        <ReactTyped strings={["A: I've been doing what I love the most... "]} typeSpeed={100} />
                    </p>

                    <p className="sizeSmiley">
                        <ReactTyped strings={["😎"]} typeSpeed={500} />
                    </p>
                    <div>
                    <br></br>
                    <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="Wakatime" src={wakaLogo}/></Link>
                    <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="Spring" src={springLogo}/></Link>
                    <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="React" src={reactLogo}/></Link>
                    <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="Mongo" src={mongoLogo}/></Link>
                    <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="MySQL" src={mysqlLogo}/></Link>
                    <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="Jenkins" src={jenkinsLogo}/></Link>
                    <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="IntelliJ" src={intellijLogo}/></Link>
                    <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="Git" src={gitLogo}/></Link>
                    <Link to='/Wakatime'><img className="contacts-waka" data-toggle="tooltip" data-placement="top" data-animation="" title="WakaTime" alt="Bash" src={bashLogo}/></Link>
                    </div>
                    <br></br>
                    This info has been produced by https://wakatime.com...
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