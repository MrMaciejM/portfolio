import "./Animations.css"
import "./Header.css";
import linkedInLogoImg from "../Assets/Images/linkedin-100.png"
import gitHubLogoImg from "../Assets/Images/github-100.png"
import cvLogoImg from "../Assets/Images/CV-100-edited.png"

function Header() {
  
  function scrollToAboutReviews (e) {
    e.preventDefault();
    let about = document.getElementById("aboutReviewsHeader");
    about.scrollIntoView({behavior: "smooth", block: "start"}); 
  }
  // #aboutReviewsHeader

    return (
        <header className="sectionSpacing">
            <nav className="socialsLinksNav">
            <a className="linkedInLogoLink" 
                href="https://github.com/MrMaciejM"
                target="#" >
                  <img className="linkedInLogoImg socialsLogosImgs" src={linkedInLogoImg} alt="linkedIn Logo" />
              </a>
            <a className="githubLogoLink" 
                href="https://github.com/MrMaciejM"
                target="#" >
                  <img className="gitHubLogoImg socialsLogosImgs" src={gitHubLogoImg} alt="GitHub Logo" />
              </a>              
            <a className="cvLogoLink"
                href="https://github.com/MrMaciejM"
                target="#" >
                  <img className="cvLogoImg socialsLogosImgs" src={cvLogoImg} alt="CV Logo" />
              </a>
            </nav>
            <nav className="pageNavLinksBox">
              <a className="linkAboutReviews" href="#" onClick={scrollToAboutReviews}>About & Reviews</a>
              <a href="https://google.co.uk">Contact</a>
              <a href="https://google.co.uk">Services</a>
              <a id="projectsLink" href="https://google.co.uk">Projects</a>
            </nav>
        </header>
    )
}

export default Header; 