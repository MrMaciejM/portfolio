import "./Projects.css"; 
import "./Header.css"
import placeholderImg from "../Assets/Images/placeholder-500x-300y.png"
import cardChampionsImg from "../Assets/Images/cardChampions800x600.png"
import globeTrotterImg from "../Assets/Images/globeTrotter800x600.png"


function Projects() {

    return (<section className="projectsContainer">
        <div className="headingContainer">
          <div className="headingDecorLineL"></div>
          <h3>Projects</h3>
          <div className="headingDecorLineR"></div>
        </div>
        <div className="projectsMainBox">
            <div className="cardsBox">
                <div className="cardsImgDiv">
                    <a href="https://github.com/MrMaciejM/card-champions">
                      <img className="projectImg" src={cardChampionsImg} alt="" />
                    </a>
                </div>                
                <p className="leftArrow">👈</p>
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