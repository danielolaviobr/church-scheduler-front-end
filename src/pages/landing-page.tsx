import React from "react";
import { Link } from "react-router-dom";

import "../styles/pages/landing-page.css";

function LandingPage() {
  return (
    <div id="landing-page">
      <div className="content-wrapper">
        <main>
          <h1>Jovens Presbiteriana do Recreio</h1>
          <p>Agende sua visita</p>
        </main>
        <footer>
          <Link to="/celula" className="redirect-button">
            Célula
          </Link>
          <Link to="/galeria" className="redirect-button">
            Galeria
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
