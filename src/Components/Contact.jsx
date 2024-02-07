import "../Components/Contact.css"; 

function Contact() {
    return(
        <section className="contactSection">
            <h2>Contact</h2>
            <div className="contactContainer">
              <div>
                <p>You can get in touch by sending me a message on <a className="contactSectionlinkedIn" href="https://www.linkedin.com/in/maciejmatulewicz/" target="#">LinkedIn</a> or email!</p>
                <p>Email me at:</p>
                <a href="mailto:maciej456@icloud.com">maciej456@icloud.com</a>
              </div>                
            </div>            
        </section>
    )
}

export default Contact; 