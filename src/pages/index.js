import React from "react";
import { Switch, Route } from "react-router-dom";

import AboutMe from "./me";
import Projects from "./projects";
import Work from "./work";
import Education from "./education";
import Adventures from './adventures'

const Pages = () => {
  return (
    <Switch>
      <Route exact path="/">
        <AboutMe />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
      <Route exact path="/work">
        <Work />
      </Route>
      <Route exact path="/education">
        <Education />
      </Route>
      <Route exact path="/adventures">
        <Adventures />
      </Route>
    </Switch>
  );
};

export default Pages;
