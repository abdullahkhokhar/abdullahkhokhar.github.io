import React from "react";
import {
  BrowserRouter as Router, 
  Route, 
  Switch 
} from "react-router-dom";

import Layout from "./Layout";
import Main from "./Main";
import About from "./Components/About"
import Blog from "./Components/BlogView"
import Research from "./Components/Research"

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path = "/" component={Main}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/research" component={Research} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
