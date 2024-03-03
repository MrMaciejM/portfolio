import "./Animations.css"
import "./Projects.css"; 
import "./Header.css"
import "./Queries.css";

import myPixieImg from "../Assets/Images/myPixie-800x600-inDev.png"
import weatherToSms from "../Assets/Images/weather-to-sms-800x600.png"
import cardChampionsImg from "../Assets/Images/cardChampions800x600.png"
import globeTrotterImg from "../Assets/Images/globeTrotter800x600.png"
import weatherDashboardImg from "../Assets/Images/weatherApp-800x600.png"
import expenseTrackerImg from "../Assets/Images/expenses-tracker-800x600.png"
import myEmptorImg from "../Assets/Images/myEmptor-800x600.png"
import restaurantSiteImg from "../Assets/Images/restaurantSite-800x600.png"
import daySchedulerImg from "../Assets/Images/dayScheduler-800x600.png"
import teamGeneratorImg from "../Assets/Images/teamGenerator-800x600.png"
import productLandingPageImg from "../Assets/Images/landingPage-800x600.png"


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
      {/*** Project 1 ***/}
      <div className="projectDiv">
        <img className="projectImg" src={myPixieImg} alt="MyPixie social media website" />
        <div className="titleAndParaDiv">
          <style>{backgroundSpiralStyle}</style>        
          <p className="projectTitle">MyPixie</p>
          <p className="projectParagraph">A social media website with an 'AI/ML-powered pixie' that allows you to make posts, comments, view the latest news from around the world and more. </p>
          <p className="projectParagraph">Tech Stack (TBC) | AI/ML, TypeScript, React, Node, SQL/PostegreSQL, Authentication / Google / OAuth.</p>
          <div className="projectLinksDiv">
            {/* <a href="" style={{display: "none"}}>GitHub</a>
            <a href="" style={{display: "none"}}>Live Site</a> */}
          </div>
        </div>
      </div>
      {/* Project */}
      <div className="projectDiv">
        <img className="projectImg" src={weatherToSms} alt="Weather to SMS app in Python" />
        <div className="titleAndParaDiv">
          <style>{backgroundSpiralStyle}</style>        
          <p className="projectTitle">Weather To SMS</p>
          <p className="projectParagraph">A Python built app that utilises Twilio and OpenWeather APIs to send SMS to yur phone with the current weather data.</p>
          <p className="projectParagraph">Tech Stack | Python, OpenWeather API, Twilio API.</p>
          <div className="projectLinksDiv">
            <a href="https://github.com/MrMaciejM/weather-to-sms-app" target="#blank">GitHub</a>
            {/* <a href="#"  >Live Site</a> */}
          </div>
        </div>
      </div>
      {/*** Project 2 ***/}
      <div className="projectDiv">
        <img className="projectImg" src={cardChampionsImg} alt="Card Champions" />
        <div className="titleAndParaDiv">
          <style>{backgroundSpiralStyle}</style>        
          <p className="projectTitle">Card Champions</p>
          <p className="projectParagraph">A card-battling game based on the ever-popular rock, paper, scissors formula, but with a slight twist! All assets were designed, drawn, created and coded by myself from the ground up.</p>
          <p className="projectParagraph">Tech Stack | React, CSS, HTML, Krita, Sony Vegas. </p>
          <div className="projectLinksDiv">
            <a href="https://github.com/MrMaciejM/card-champions" target="#blank">GitHub</a>
            <a href="https://mrmaciejm.github.io/card-champions/" target="#blank" >Live Site</a>
          </div>
        </div>
      </div>
      {/* Project 3 */}
      <div className="projectDiv">
        <img className="projectImg" src={globeTrotterImg} alt="GlobeTrotter travel app" />
        <div className="titleAndParaDiv">
          <style>{backgroundSpiralStyle}</style>        
          <p className="projectTitle">GlobeTrotter</p>
          <p className="projectParagraph">A React team project built with various tech and presented on the final day of the edX Front-End bootcamp.</p>
          <p className="projectParagraph">Tech Stack | React, CSS, JavaScript, Kanban, API, ChakraUI. </p>
          <div className="projectLinksDiv">
            <a href="https://github.com/MrMaciejM/GlobeTrotter" target="#blank">GitHub</a>
            <a href="https://globetrotterreact.netlify.app/" target="#blank" >Live Site</a>
          </div>
        </div>
      </div>
      {/* Project 4 */}
      <div className="projectDiv">
        <img className="projectImg" src={weatherDashboardImg} alt="Weather Dashboard App" />
        <div className="titleAndParaDiv">
          <style>{backgroundSpiralStyle}</style>        
          <p className="projectTitle">Weather Dashboard</p>
          <p className="projectParagraph">Weather dashboard utilising several stacks, however, the main goal was to learn how to use the APIs and work with localStorage.</p>
          <p className="projectParagraph">Tech Stack | HTML, CSS, JavaScript, API, Moment.js, Bootstrap.</p>
          <div className="projectLinksDiv">
            <a href="https://github.com/MrMaciejM/weather-dashboard" target="#blank">GitHub</a>
            <a href="https://mrmaciejm.github.io/weather-dashboard/" target="#blank" >Live Site</a>
          </div>
        </div>
      </div>
      {/* Project 5 */}
      <div className="projectDiv">
        <img className="projectImg" src={expenseTrackerImg} alt="Expenses Tracker App" />
        <div className="titleAndParaDiv">
          <style>{backgroundSpiralStyle}</style>        
          <p className="projectTitle">Expense Tracker</p>
          <p className="projectParagraph">Expenses tracker app built with React to help keep track of expenses, as well as date of expenses and sums up the total of expenses.</p>
          <p className="projectParagraph">Tech Stack | React, HTML, CSS, JavaScript.</p>
          <div className="projectLinksDiv">
            <a href="https://github.com/MrMaciejM/expense-tracker" target="#blank">GitHub</a>
            <a href="https://mrmaciejm.github.io/expense-tracker/" target="#blank" >Live Site</a>
          </div>
        </div>
      </div>
      {/* Project 6 */}
      <div className="projectDiv">
        <img className="projectImg" src={myEmptorImg} alt="myEmptor App" />
        <div className="titleAndParaDiv">
          <style>{backgroundSpiralStyle}</style>        
          <p className="projectTitle">myEmptor</p>
          <p className="projectParagraph">A client and finance tracking dashboard built in TypeScript with several functionality such as sorting by different options, taking backups and restoring backups.</p>
          <p className="projectParagraph">Tech Stack | TypeScript, HTML, CSS, JavaScript.</p>
          <div className="projectLinksDiv">
            <a href="https://github.com/MrMaciejM/myemptor-app" target="#blank">GitHub</a>
            <a href="https://mrmaciejm.github.io/myemptor-app/" target="#blank" >Live Site</a>
          </div>
        </div>
      </div>
      {/* Project 7 */}
      <div className="projectDiv">
        <img className="projectImg" src={restaurantSiteImg} alt="Indian restaurant website" />
        <div className="titleAndParaDiv">
          <style>{backgroundSpiralStyle}</style>        
          <p className="projectTitle">Restaurant Site</p>
          <p className="projectParagraph">A restaurant site built with mobile-first approach in mind and ease of use - particularly when it comes to navigation and convenience.</p>
          <p className="projectParagraph">Tech Stack | HTML, CSS, JavaScript, Bootstrap.</p>
          <div className="projectLinksDiv">
            <a href="https://github.com/MrMaciejM/restaurant-site" target="#blank">GitHub</a>
            <a href="https://mrmaciejm.github.io/restaurant-site/" target="#blank" >Live Site</a>
          </div>
        </div>
      </div>
      {/* Project 8 */}
      <div className="projectDiv">
        <img className="projectImg" src={daySchedulerImg} alt="Work Day Scheduler" />
        <div className="titleAndParaDiv">
          <style>{backgroundSpiralStyle}</style>        
          <p className="projectTitle">Work Day Scheduler</p>
          <p className="projectParagraph">Daily scheduler app built to help keep track of tasks and show color-coded current, past and future time.</p>
          <p className="projectParagraph">Tech Stack | HTML, CSS, JavaScript, jQuery, Moment.js.</p>
          <div className="projectLinksDiv">
            <a href="https://github.com/MrMaciejM/daily-planner-app" target="#blank">GitHub</a>
            <a href="https://mrmaciejm.github.io/daily-planner-app/" target="#blank" >Live Site</a>
          </div>
        </div>
      </div>
      {/* Project 9 */}
      <div className="projectDiv">
        <img className="projectImg" src={teamGeneratorImg} alt="Team generator app in Node.js" />
        <div className="titleAndParaDiv">
          <style>{backgroundSpiralStyle}</style>        
          <p className="projectTitle">Team Generator</p>
          <p className="projectParagraph">A terminal app that was built with Node.js to collect user input and render an HTML file with the generated team based on collected inputs.</p>
          <p className="projectParagraph">Tech Stack | HTML, CSS, JavaScript, Node.js, Jest.</p>
          <div className="projectLinksDiv">
            <a href="https://github.com/MrMaciejM/team-profile-generator" target="#blank">GitHub</a>
            {/* <a href="#"  >Live Site</a> */}
          </div>
        </div>
      </div>
      {/* Project 10 */}
      <div className="projectDiv">
        <img className="projectImg" src={productLandingPageImg} alt="Product landing page" />
        <div className="titleAndParaDiv">
          <style>{backgroundSpiralStyle}</style>        
          <p className="projectTitle">Product Landing Page</p>
          <p className="projectParagraph">My first ever responsive product landing site that I have designed and built using HTML, CSS and JS.</p>
          <p className="projectParagraph">Tech Stack | HTML, CSS, JavaScript.</p>
          <div className="projectLinksDiv">
            <a href="https://github.com/MrMaciejM/product-landing-page-v1" target="#blank">GitHub</a>
            <a href="https://mrmaciejm.github.io/product-landing-page-v1/" target="#blank" >Live Site</a>
          </div>
        </div>
      </div>
      {/*  */}
    </div>    
  </section>
  )
}
export default Projects;