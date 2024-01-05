import "./Footer.css";
import { Link } from 'react-router-dom'


export const Footer = () => {
  return (
    <div className="footer">
      <p>Made with <i class="fa-solid fa-heart" style={{color: "#9ce5ca"}}></i> in Sweden by <a className="gh-link" href="https://github.com/MariaKim1" target="_blank">Maria Kim</a> + <a className="gh-link" href="https://github.com/momowo2023" target="_blank">Mo Wei Wu</a> + <a className="gh-link" href="https://github.com/nadine-dawod" target="_blank">Nadine Dawod</a> + <a className="gh-link" href="https://github.com/Vardagsbruket" target="_blank">Diana Undén</a> + <a className="gh-link" href="https://github.com/SaskiaVdZ" target="_blank">Saskia van der Zanden</a></p>
       
    </div>
  );
};
