import "./Main.css"; 
import profilePicture from "../Assets/Images/profilePicGitHub-735x.png"
function Main() {

    return (
        <main>
            <section className="heroSectionBox">
            <div className="heroBox">
                <h1>Hi! I'm <span>Maciej</span>.</h1>
                <p>An aspiring full-stack developer.</p>
                <img className="profilePicture" src={profilePicture} alt="profile visual art" />
            </div>
            <div className="verticalLineSeparator"></div>
            <div className="shortAboutBox">
                <p>Recent Front-End Bootcamp graduate with an IT background. I'm aspiring to become a full-stack developer and I'm working on my skills daily.</p>
                <p>When I don't push commits to my GitHub, it means I am studying some cool technology.</p>
            </div>
            </section>
        </main>
    )
}

export default Main; 