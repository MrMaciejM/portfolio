import "./Header.css";
import linkedInLogo from "../Images/linkedin-100.png"
import githubLogo from "../Images/github-100.png"
import cvLogo from "../Images/cv-100.png"

function Header() {
    return (
        <header>
            <div>
              <nav>
                <div>
                <a href="#">GitHub<img className="githubLogo" src={githubLogo} alt="LinkedIn" /></a>
                </div>
                <div>
                <a href="#">LinkedIn<img src={linkedInLogo} alt="LinkedIn" /></a>
                </div>
                <div>
                <a href="#">CV<img className="cvLogo" src={cvLogo} alt="LinkedIn" /></a>
                </div>                
              </nav>
            </div>
            <div>
              <nav>
                <a href="#">Projects</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
              </nav>
            </div>
        </header>
    )
}

export default Header; 