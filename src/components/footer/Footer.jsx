import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <p>
        Made with{" "}
        <i className="fa-solid fa-heart" style={{ color: "#9ce5ca" }}></i> in
        Sweden by{" "}
        <Link className="gh-link" href="https://github.com/MariaKim1">
          Maria Kim
        </Link>{" "}
        +{" "}
        <Link className="gh-link" href="https://github.com/momowo2023">
          Mo Wei Wu
        </Link>{" "}
        +{" "}
        <Link className="gh-link" href="https://github.com/nadine-dawod">
          Nadine Dawod
        </Link>{" "}
        +{" "}
        <Link className="gh-link" href="https://github.com/Vardagsbruket">
          Diana Undén
        </Link>{" "}
        +{" "}
        <Link className="gh-link" href="https://github.com/SaskiaVdZ">
          Saskia van der Zanden
        </Link>
      </p>
    </div>
  );
};
