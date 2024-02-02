import { useState } from "react";
import "./Animations.css"
import "./About.css"; 
import personIconImg from "../Assets/Images/person-icon-96x96.png"
import certFE from "../Assets/Images/FE-Certificate-575x440.png"
import certInfra from "../Assets/Images/Cert-Infrastructure-L3.png"
import certQA from "../Assets/Images/WYWM-Cert-QA_Testing_570x815.png"
import certPython from "../Assets/Images/WYWM-Cert-Python-570x815.png"
import certJava from "../Assets/Images/WYWM-Cert-Java-570x815.png"
import certDevOps from "../Assets/Images/WYWM-Cert-DevOps-570x815.png"
import certBigO from "../Assets/Images/WYWM-Cert-BigONotation-570x815.png"

function About() {

  function EnlargeCertImage({className, src, altDesc}) {
    const [zoomLevel, setZoomLevel] = useState(1); 
    const [isZoomed, setIsZoomed] = useState(false);
    
    const zoomHandler = () => {
      setZoomLevel(isZoomed ? 1 : 0.8); 
      setIsZoomed(!isZoomed); 
    }   
    const enlargeCertStyling = {
      transform: `scale(${zoomLevel})`,
      transition: 'transform 0.2s snap',
      position: isZoomed ? 'fixed' : 'static',
      top: isZoomed ? '5%' : 'auto',
      left: isZoomed ? '20%' : 'auto',
      transformOrigin: 'center center',
      zIndex: 2,
    } 
    return (
      <img
        className={className}
        src={src}
        alt={altDesc}
        style={enlargeCertStyling}
        onClick={zoomHandler}
      />
    );
  } 

    return (
        <section className="aboutSectionBox" id="aboutReviewsHeader">
          <h2 >About & Reviews</h2>    
          {/* <div className="evenSpacer"></div> */}
          <div className="aboutParagraphsDiv">
            <p className="aboutParagraphs">During my software development studies, I have built a multitude of projects that adhere to rigorous <span>professional requirements</span> and industry standards. I have also acquired several certificates from various educational institutions, such as <span>EdX Trilogy/2U</span> and <span>WYWM Academy</span>.</p>

            <p className="aboutParagraphs">I possess a solid understanding of the Software Development Life Cycle (SDLC) and best practices, including <span>semantic HTML, Cognitive bias in testing</span> and '<span>clean code</span>'. Additionally, I consistently strive to keep up with ever-changing technologies by learning from <span>industry professionals</span>, followed by hands-on project work. The majority of my projects can be found on my GitHub page.</p>

            <p className="aboutParagraphs">Some of the popular languages and libraries in which I have built projects include JavaScript, TypeScript, React, Python, and Java!</p>
          </div>

          <h3 className="reviewsHeader">What it's like to work with me?</h3>
          {/* <p className="aboutReviewsParagraphIntro">I could talk about my hard work ethic and what it is like to work with me, but instead, I'd much rather you read direct, <span>unaltered</span> feedback from the people I worked with.</p> */}

          {/* REVIEWS */}
          <div className="aboutReviewsDiv">      
            <div className="singleReviewBox">
              <img className="personImg" src={personIconImg} alt="person icon" />
              <p className="aboutReviewsParagraphs">
                "Thank you for always being the most helpful and friendly support there has been!" -  David, Senior Manager.
              </p>
            </div>
            <div className="singleReviewBox">
              <img className="personImg" src={personIconImg} alt="person icon" />
              <p className="aboutReviewsParagraphs">
              "It has been a pleasure working with you, Maciej, you have been absolutely outstanding in every aspect" -  Fahim, IT Director.
              </p>
            </div>
            <div className="singleReviewBox">
              <img className="personImg" src={personIconImg} alt="person icon" />
              <p className="aboutReviewsParagraphs">
              "You have been great supporting technophones like me and an inspiration. I'm so pleased our paths crossed" -  Mark, Business Development Executive.
              </p>
            </div>
            <div className="singleReviewBox">
              <img className="personImg" src={personIconImg} alt="person icon" />
              <p className="aboutReviewsParagraphs">
              "I've said it before and I'll say it again - it's been a pleasure!" -  Bethany, Cyber Lead.
              </p>
            </div>
            <div className="singleReviewBox">
              <img className="personImg" src={personIconImg} alt="person icon" />
              <p className="aboutReviewsParagraphs">
              "Maciej has always been very dedicated, and he is an extremely reliable troubleshooter when developing for both mobile and desktop devices" - Cheyenne, client.
              </p>
            </div>
            <div className="singleReviewBox">
              <img className="personImg" src={personIconImg} alt="person icon" />
              <p className="aboutReviewsParagraphs">
              "Maciej is always willing to learn, is confident in his work and completes the tasks. He is easy to work with, be it in a team or doing individual tasks" - Hadiqa, Senior Technical Associate.
              </p>
            </div>  
          </div>
          {/* CERTIFICATES */}
          {/* TO IMPLEMENT: 
            -  zoom in on certificates 
          */}
          <h3 className="certificatesHeading">My Certificates</h3>
          <div className="certificatesContainer">
            <div className="certificatesBox">
              <EnlargeCertImage className="certificatesBoxImg" src={certFE} altDesc={"Front-End Web Development Certificate"} />
              <p className="certificatesBoxParagraphs">Front-End Web Development Certificate</p>
            </div>            
            <div className="certificatesBox">
              <EnlargeCertImage className="certificatesBoxImg" src={certInfra} altDesc={"Front-End Web Development Certificate"} />
              <p className="certificatesBoxParagraphs">Infrastructure Technician Certificate</p>
            </div>            
            <div className="certificatesBox">
              <EnlargeCertImage className="certificatesBoxImg" src={certJava} altDesc={"Front-End Web Development Certificate"} />
              <p className="certificatesBoxParagraphs">Java Fundamentals Programming Certificate</p>
            </div>            
            <div className="certificatesBox">
              <EnlargeCertImage className="certificatesBoxImg" src={certPython} altDesc={"Front-End Web Development Certificate"} />
              <p className="certificatesBoxParagraphs">Python Fundamentals Programming Certificate</p>
            </div>            
            <div className="certificatesBox">
              <EnlargeCertImage className="certificatesBoxImg" src={certQA} altDesc={"Front-End Web Development Certificate"} />
              <p className="certificatesBoxParagraphs">Software Quality Assurance Testing Fundamentals Certificate</p>
            </div>            
            <div className="certificatesBox">
              <EnlargeCertImage className="certificatesBoxImg" src={certDevOps} altDesc={"Front-End Web Development Certificate"} />
              <p className="certificatesBoxParagraphs">DevOps Fundamentals Certificate</p>
            </div>            
            <div className="certificatesBox">
              <EnlargeCertImage className="certificatesBoxImg" src={certBigO} altDesc={"Front-End Web Development Certificate"} />
              <p className="certificatesBoxParagraphs">Big O Notation Time Complexities Certificate</p>
            </div>                      
          </div>
        </section>        
    )
}

export default About; 