//https://zeph.co/google-analytics-react-router
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GAListener from "./components/GAListener";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import CharactersPage from "./pages/Characters";
import CharacterDetailsPage from "./pages/CharacterDetails";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <Router>
      <GAListener trackingId={"UA-148909178-1"}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/wtf" component={AboutPage} />
          <Route exact path="/characters" component={CharactersPage} />
          <Route exact path="/character/:id" component={CharacterDetailsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </GAListener>
    </Router>
  );
}

export default App;
