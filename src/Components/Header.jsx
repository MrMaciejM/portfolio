import "./Animations.css"
import "./Header.css";
import "./Queries.css";
import { useEffect, useState } from "react";

import linkedInLogoImg from "../Assets/Images/linkedin-100.png"
import gitHubLogoImg from "../Assets/Images/github-100.png"
import cvLogoImg from "../Assets/Images/CV-100-edited.png"
import sideMenuImg from "../Assets/Images/menuIcon100x100.png"


function Header() {
  
  function scrollToHome(e) {
    e.preventDefault();
    window.scrollTo({top: 0, left:0, behavior: "smooth"});
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

  function scrollToServices(e) {
    e.preventDefault();
    let getElement = document.getElementById("servicesHeading");
    getElement.scrollIntoView({behavior: "smooth", block: "start"}); 
  }
  function scrollToContact(e) {
    e.preventDefault();
    let getElement = document.getElementById("contactSection");
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

  // Toggle side menu on mobile / smaller devices - 856px
  function HandleSideMenu() {
    const menuIconImg = document.getElementById("menuIconImg");
    const socialsLinksNav = document.getElementById("socialsLinksNav"); 
    const pageNavLinksBox = document.getElementById("pageNavLinksBox"); 
    const header = document.getElementById("header"); 

    if (socialsLinksNav.classList.contains("hide")) {
      socialsLinksNav.classList.remove("hide");
      pageNavLinksBox.classList.remove("hide");
      menuIconImg.classList.add("menuIconIsClicked");
    } else {
      socialsLinksNav.classList.add("hide");
      pageNavLinksBox.classList.add("hide");
      menuIconImg.classList.remove("menuIconIsClicked");
    }    
    // close side menu upon selecting an option
    header.addEventListener("click", () => {
      if (!socialsLinksNav.classList.contains("hide")) {
        socialsLinksNav.classList.add("hide");
        pageNavLinksBox.classList.add("hide");
        menuIconImg.classList.remove("menuIconIsClicked");
      }     
    })
    header.addEventListener("mouseleave", () => {
      if (!socialsLinksNav.classList.contains("hide")) {
        socialsLinksNav.classList.add("hide");
        pageNavLinksBox.classList.add("hide");
        menuIconImg.classList.remove("menuIconIsClicked");
      }     
    })
  }

    return (
        <header className="sectionSpacing" id="header">            
            <img className="menuIconImg" id="menuIconImg" src={sideMenuImg} alt="menu icon" onClick={HandleSideMenu} aria-label="menu button" />            
            <nav className="socialsLinksNav hide" id="socialsLinksNav">
            <a className="linkedInLogoLink" 
                href="https://www.linkedin.com/in/maciejmatulewicz/"
                target="#">
                  <img className="linkedInLogoImg socialsLogosImgs" src={linkedInLogoImg} alt="linkedIn Logo" />
              </a>
            <a className="githubLogoLink" 
                href="https://github.com/MrMaciejM"
                target="#" >
                  <img className="gitHubLogoImg socialsLogosImgs" src={gitHubLogoImg} alt="GitHub Logo" />
              </a>              
            <a className="cvLogoLink"
                href={"MaciejMatulewiczCV.pdf"}
                target="_self">
                  <img className="cvLogoImg socialsLogosImgs" src={cvLogoImg} alt="CV Logo" />
              </a>
            </nav>
            <nav className="pageNavLinksBox hide" id="pageNavLinksBox">
              <a className="linkAboutReviews" href="#" onClick={scrollToAboutReviews}alt="Navigate to About & Reviews">About & Reviews</a>
              <a href="#" onClick={scrollToContact} alt="Navigate to Contact">Contact</a>
              <a href="#" onClick={scrollToServices} alt="Navigate to Services">Services</a>
              <a id="projectsLink" href="#" onClick={scrollToProjects} alt="Navigate to Projects">Projects</a>
            </nav>
            <ShowScrollButton />
        </header>
    )
}

export default Header; 