import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Slider from './Components/Slider/Slider';
import Footer from './Components/Footer/Footer';
import FoodContent from './Components/Food-content/Food-content';
import FoodNav from './Components/Food-nav/FoodNav';
import Breakfast from './Components/Breakfast/Breakfast';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Lunch from './Components/Lunch/Lunch';
import Dinner from './Components/Dinner/Dinner';

function App() {
  return (
    <div >
     <Header></Header>
      <Slider></Slider>
      <FoodNav></FoodNav>
    
      
      <Router>
          <Switch>
              <Route exact path="/">
                  <Breakfast></Breakfast>
              </Route>
              <Route path="/breakfast">
                  <Breakfast></Breakfast>
              </Route>
              <Route path="/Lunch">
                  <Lunch></Lunch>
              </Route>
              <Route path="/Dinner">
                  <Dinner></Dinner>
              </Route>
          </Switch>
      </Router>

      <FoodContent></FoodContent>
      <Footer></Footer>      

    </div>
  );
}

export default App;
