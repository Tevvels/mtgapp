import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";


import Card from "./components/card.component";
import createCard from "./components/create-card.component";


function App() {
  return (
    <Router>
      <Route path ="/" exact component = {Card} />
      <Route path ="/create" exact component = {createCard} />
      



  </Router>
  );
}

export default App;
