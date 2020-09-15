import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";


import card from "./components/card.component";
import createCard from "./components/create-card.component";

import test from "./components/test.component";

function App() {
  return (
    <Router>
      <Route path ="/" exact component = {card} />
      <Route path ="/create" exact component = {createCard} />
      <Route path = "/test" exact component = {test} />



  </Router>
  );
}

export default App;
