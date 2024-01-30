import "./Animations.css"
import "./Projects.css"; 
import "./Header.css"
import cogImg from "../Assets/Images/cog.png"
import placeholderImg from "../Assets/Images/placeholder-500x-300y.png"
import cardChampionsImg from "../Assets/Images/cardChampions800x600.png"
import globeTrotterImg from "../Assets/Images/globeTrotter800x600.png"


function Projects() {

    return (<section className="projectsContainer">
        <div className="headingContainer">
          <div className="headingDecorLineL"></div>
          <h2>Projects</h2>
          <div className="headingDecorLineR"></div>
        </div>
        <div className="projectsMainBox">
            <div>
                <img className="cogImg" src={cogImg} alt="cog shape" />
                <svg className="projectsTriangle" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="22.5,4.5 40.5,40.5 4.5,40.5"/>
            </svg>
            </div>
            <div className="cardsBox">
                <div className="cardsImgDiv">
                    <a href="https://github.com/MrMaciejM/card-champions">
                      <img className="projectImg animateImg" src={cardChampionsImg} alt="" />
                    </a>
                </div>
                <p className="leftArrow">&larr;</p>
                <div className="cardsDescDiv">
                  <h4>Card Champions &trade;</h4>
                  <p>A card game based on the ever-popular Rock, Paper, Scissors game rules. All assets and coding logic were drawn, designed and programmed by myself.</p>
                  <p>HTML, CSS, React, Krita, GIF animations, Sony Vegas. </p>
                </div>
            </div>
            {/*  */}
            
        </div>

    </section>
    )
}
export default Projects;