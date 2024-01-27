import "./About.css"; 
import profilePicture from "../Assets/Images/profilePicGitHub-735x.png"
function About() {

    return (
        <section className="aboutSectionBox">
          <h2 className="aboutHeader">About</h2>    
          {/* <div className="evenSpacer"></div> */}
          <div className="aboutParagraphsDiv">
            <p className="aboutParagraphs">During my software development studies, I have built a multitude of projects, with rigorous, professional requirements and industry standards, and acquired several certificates from various educational institutions, such as <span>EdX Trilogy</span> and <span>WYWM Academy</span>.</p>
            <p className="aboutParagraphs">I have a grasp of the entire Software Development Cycle (aka SDLC) and best practises, like <span>semantic HTML, SEO practices and 'clean code'</span>. Additionally, I continue to strive and keep up with the ever-changing technologies by learning from industry professionals, followed by <span>hands-on project work</span>, which I host vast majority of on my <span>GitHub</span> page.</p>
            <p className="aboutParagraphs">Some of the popular languages and libraries I built projects in are: JavaScript, TypeScript, React, Python and Java!</p>
            <p className="aboutParagraphs">You can also see the feedback of people I worked with, as well as the certificates earned below.</p>
          </div>
          <h3 className="reviewsHeader">What it's like to work with me?</h3>
          <div className="aboutReviewsDiv">
            <p className="aboutReviewsParagraphs">
                "Thank you for always being the most helpful and friendly support there has been!" -  David P, Senior Manager.
            </p>
            <p className="aboutReviewsParagraphs">
                "It has been a pleasure working with you, Maciej, you have been absolutely outstanding in every aspect" -  Fahim W, Director.
            </p>
            <p className="aboutReviewsParagraphs">
                "You have been great supporting technophones like me and an inspiration. I'm so pleased our paths crossed" -  Mark B, Business Development Executive.
            </p>
            <p className="aboutReviewsParagraphs">
                "I've said it before and I'll say it again - it's been a pleasure!" -  Bethany V, Cyber Lead.
            </p>
          </div>
          <div className=""></div>
        </section>
        
    )
}

export default About; 