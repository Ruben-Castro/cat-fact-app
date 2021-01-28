import { Router, Scene } from "react-native-router-flux";
import { Home } from "./Screens/Home";
import { Detail } from "./Screens/Detail";
import React from 'react';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Home" component={Home} title="Cat Facts" initial />
        <Scene key="Detail" component={Detail} title="Cat Fact Detail" />
      </Scene>
    </Router>
  );
};

export default App;
