import "./Footer.css";
import { Link } from 'react-router-dom'


export const Footer = () => {
  return (
    <div className="footer">
      <p>Made with <i class="fa-solid fa-heart" style={{color: "#9ce5ca"}}></i> in Sweden by <a className="gh-link" href="https://github.com/MariaKim1">Maria Kim</a> + <a className="gh-link" href="https://github.com/momowo2023">Mo Wei Wu</a> + <a className="gh-link" href="https://github.com/nadine-dawod">Nadine Dawod</a> + <a className="gh-link" href="https://github.com/Vardagsbruket">Diana Undén</a> + <a className="gh-link" href="https://github.com/SaskiaVdZ">Saskia van der Zanden</a></p>
       
    </div>
  );
};
