import './styles.css';
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

export default function WakaTime() {

    return (
        <section id="wakatime-section" className="wakatime-section">

            <div className="wakatimes-section-header">
                <Zoom>
                    <p>
                        This provides you all on how long I have been spending my time doing what I love the most...coding for the past 7 days
                    </p>
                    <br></br>
                    <p>This info has been produced by https://wakatime.com...</p>
                    <div className="contacts-links">
                        <Link
                            to="https://wakatime.com"
                            target="_blank"
                            className="contacts-details"
                        >
                        </Link>
                    </div>
                </Zoom>
                <figure>
                    <embed src="https://wakatime.com/share/@rferreira_757/cfb117ee-0978-450f-b112-ad8398eb358a.svg"></embed>
                </figure>
            </div>
        </section>

    );
}