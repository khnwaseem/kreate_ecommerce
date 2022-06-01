import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Routers from "./Routes"

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <Routers />
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
