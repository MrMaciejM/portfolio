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
            <p className="aboutParagraphs">You can see the technologies I worked with, as well as the certificates earned below.</p>
          </div>
          <div className=""></div>
        </section>
        
    )
}

export default About; 