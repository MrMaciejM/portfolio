import "../Components/Services.css"; 
import codingIcon from "../Assets/Images/coding-icon-100x100.png"
import webDesignIcon from "../Assets/Images/web-design-icon-100x100.png"
import wrenchIcon from "../Assets/Images/wrench-icon-100x100.png"

function Services() {

    return (
        <section className="servicesSection">
            <h2 id="servicesHeading">Services</h2>
            <div className="servicesContainer">
                <article className="servicesCards">
                    <img className="servicesCardsImg" src={codingIcon} alt="coding icon" />
                    <h3 className="servicesCardsHeading">Programming</h3>
                    <ul className="servicesCardsList">
                        <li>Code websites, web apps from ground up</li>
                        <li>Find and fix bugs and errors</li>
                        <li>Collaborate effectively within teams</li>
                    </ul>
                </article>
                <article className="servicesCards">
                    <img className="servicesCardsImg" src={webDesignIcon} alt="web design icon" />
                    <h3 className="servicesCardsHeading">Translate Designs</h3>
                    <ul className="servicesCardsList">
                        <li>Translate designs into pixel-perfect websites</li>      
                        <li>Make sites fully responsive on all device types</li>      
                        <li>Use semantic and SEO-friendly tags</li>
                    </ul>
                </article>
                <article className="servicesCards">
                    <img className="servicesCardsImg" src={wrenchIcon} alt="wrench icon" />
                    <h3 className="servicesCardsHeading">Technical Support</h3>
                    <ul className="servicesCardsList">
                        <li>Technical support for software and apps</li>      
                        <li>Write technical guides</li>
                        <li>Provide diagnosis for systems/apps</li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services; 