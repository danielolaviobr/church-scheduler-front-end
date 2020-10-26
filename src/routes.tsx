import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import LandingPage from "./pages/landing-page";
import GaleriaPage from "./pages/galeria-page";
import CultoPage from "./pages/celula-page";
import AdminCelulaPage from "./pages/admin-celula-page";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/galeria" component={GaleriaPage} />
        <Route path="/celula" component={CultoPage} />
        <Route path="/admin/celula" component={AdminCelulaPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
