import './styles.css';

export default function Header() {

    return (

        <header className="nav-container">
            <nav id="navbar" className="nav-main">
                <a href="#">Home</a>
                <a href="#">Projects</a>
                <a href="#skill-section">Skills</a>
                <a href="#contact-section">Contact</a>
            </nav>
        </header>
    );

}