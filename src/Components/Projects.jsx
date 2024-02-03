import "./Animations.css"
import "./Projects.css"; 
import "./Header.css"
import placeholderImg from "../Assets/Images/placeholder-500x-300y.png"
import cardChampionsImg from "../Assets/Images/cardChampions800x600.png"
import globeTrotterImg from "../Assets/Images/globeTrotter800x600.png"
import { useEffect, useState } from "react";


function Projects() {

  function createKeyframes() {
    let keyframes = "";
    for (let i = 0; i <= 100; i++) {
      keyframes += `
        ${i}% {
          background: linear-gradient(${i * 3.6}deg, #000, #525252);
        }
      `;
    }
    return keyframes;
  }
    const backgroundSpiralStyle = `
    @keyframes backgroundWave {
      ${createKeyframes()}
    }
    .titleAndParaDiv {
      animation: backgroundWave 7s infinite ease-in-out;
    }
  `;

  return (
  <section className="projectsSection" id="projectsHeading">
    <div className="headingContainer">
      <div className="headingDecorLineL fadeGreenLight"></div>
      <h2>Projects</h2>
      <div className="headingDecorLineR fadeGreenLight"></div>
    </div>
    <div className="projectsContainer">
      <div className="projectDiv">
        <img className="projectImg" src={cardChampionsImg} alt="Card Champions" />
        <div className="titleAndParaDiv">
          <style>{backgroundSpiralStyle}</style>        
          <p className="projectTitle">Card Champions</p>
          <p className="projectParagraph">A card-battling game based on the ever-popular rock, paper, scissors formula, but with a slight twist! All assets were designed, drawn, created and coded by myself from the ground up.</p>
          <p className="projectParagraph">Tech Stack | React, CSS, HTML, Krita, Sony Vegas. </p>
          <div className="projectLinksDiv">
            <a href="">GitHub</a>
            <a href="">Live Site</a>
          </div>
        </div>
      </div>
    </div>    
  </section>
  )
}
export default Projects;