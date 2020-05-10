import React from "react";
import ReactGA from 'react-ga';

import "./styles.css";
import SideNavigation from "./navigation";

export default function App() {

  React.useEffect(() => {
    ReactGA.initialize('UA-166063982-1');
    ReactGA.pageview('/portfolio');
  }, [])

  return (
    <React.Fragment>
      <SideNavigation />
    </React.Fragment>
  );
}
