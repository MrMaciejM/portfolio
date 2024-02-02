import "./Animations.css"
import "./Header.css";
import linkedInLogoImg from "../Assets/Images/linkedin-100.png"
import gitHubLogoImg from "../Assets/Images/github-100.png"
import cvLogoImg from "../Assets/Images/CV-100-edited.png"
import { useEffect, useState } from "react";

function Header() {
  
  function scrollToHome(e) {
    e.preventDefault();
    window.scrollTo({top: 0, left:0, behavior: "smooth"});
    console.log("clicked!")
  }

  function scrollToAboutReviews(e) {
    e.preventDefault();
    let getElement = document.getElementById("aboutReviewsHeader");
    getElement.scrollIntoView({behavior: "smooth", block: "start"}); 
  }

  function scrollToProjects(e) {
    e.preventDefault();
    let getElement = document.getElementById("projectsHeading");
    getElement.scrollIntoView({behavior: "smooth", block: "start"}); 
  }

  function ShowScrollButton() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY; 
        const triggerPoint = 250; // in pixels
        setIsVisible(scrollY > triggerPoint); 
      }; 
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      }
    }, [])
    return (
      <button className={`ShowScrollButton ${isVisible ? "visible" : ""}`} onClick={scrollToHome}>&uarr;</button>
    );
  }
    return (
        <header className="sectionSpacing">
            <nav className="socialsLinksNav">
            <a className="linkedInLogoLink" 
                href="https://github.com/MrMaciejM"
                target="#">
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
              <a href="#">Contact</a>
              <a href="#">Services</a>
              <a id="projectsLink" href="#" onClick={scrollToProjects}>Projects</a>
            </nav>
            <ShowScrollButton />
        </header>
    )
}

export default Header; 