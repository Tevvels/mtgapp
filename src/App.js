import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";


import Card from "./components/card.component";
import createCard from "./components/create-card.component";


function App() {
  return (
    <Router>
      <Route path ="/" exact component = {Card} />
      <Route path ="/create" exact component = {createCard} />
      


    <article className="card">
      <h2 className="card_name">Card Name</h2>   
      <p className="card_cost card_color">cost/color</p>
      <p className="card_attribute">type/attribute</p>
      <p className="card_set card_rarity">set/rarities</p>
      <p className="card_desc">descriptions</p>
  </article>
  </Router>
  );
}

export default App;
