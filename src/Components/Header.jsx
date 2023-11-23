import { useState } from "react";
import "./Header.css";
import linkedInLogoImg from "../Assets/Images/linkedin-100.png"
import gitHubLogoImg from "../Assets/Images/github-100.png"
import cvLogoImg from "../Assets/Images/cv-100.png"

function Header() {

    return (
        <header className="sectionSpacing">
            <nav className="socialsLinksNav">
            <a className="linkedInLogoLink" 
                href="https://github.com/MrMaciejM"
                target="#" >
                  <img className="linkedInLogoImg" src={linkedInLogoImg} alt="linkedIn Logo" />
              </a>
            <a className="githubLogoLink" 
                href="https://github.com/MrMaciejM"
                target="#" >
                  <img className="gitHubLogoImg" src={gitHubLogoImg} alt="GitHub Logo" />
              </a>              
            <a className="cvLogoLink"
                href="https://github.com/MrMaciejM"
                target="#" >
                  <img className="cvLogoImg" src={cvLogoImg} alt="CV Logo" />
              </a>
            </nav>
            <nav className="pageNavLinksBox">
              <a href="https://google.co.uk">About</a>
              <a href="https://google.co.uk">Contact</a>
              <a id="projectsLink" href="https://google.co.uk">Projects</a>
            </nav>
        </header>
    )
}

export default Header; 