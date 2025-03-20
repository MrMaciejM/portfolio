import "./Footer.css"; 
import "./Queries.css";



function Footer() {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

    return(
        <footer>
            <p>© 2023 - {currentYear} - Maciej Matulewicz</p>
        </footer>
    )
}

export default Footer; 