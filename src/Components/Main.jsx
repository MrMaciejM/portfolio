import "./Main.css"; 
import profilePicture from "../Assets/Images/profilePicGitHub-735x.png"
function Main() {

    return (
        <main>
            <section className="heroSectionBox">
            <svg className="triangleH1" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="22.5,4.5 40.5,40.5 4.5,40.5"/>
            </svg>
            <svg className="triangleH2" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="22.5,4.5 40.5,40.5 4.5,40.5"/>
            </svg>
            <svg className="triangleH3" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="22.5,4.5 40.5,40.5 4.5,40.5"/>
            </svg>
            <svg className="triangleV1" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="22.5,4.5 40.5,40.5 4.5,40.5"/>
            </svg>
            <svg className="triangleV2" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="22.5,4.5 40.5,40.5 4.5,40.5"/>
            </svg>
            <svg className="triangleV3" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="22.5,4.5 40.5,40.5 4.5,40.5"/>
            </svg>
            <div className="heroBox">
                <h1>Hi! I'm <span>Maciej</span>.</h1>
                <p>An aspiring software and web developer.</p>
                <img className="profilePicture spinning-border" src={profilePicture} alt="profile visual art" />
            </div>
            <div className="verticalLineSeparator"></div>
            <div className="shortAboutBox">
                <p>Highly dedicated aspiring software & web developer with stellar attention to detail, committed to delivering <span>excellence</span> in every project.</p>
                <p>Previously, I worked as an IT professional in the tech/app support field. When I'm not pushing code to my GitHub page, you can find me studying some cool technology, programming language, or working on a personal project.</p>
            </div>
            </section>
        </main>
    )
}

export default Main; 