/**
* Libraries
*/

import React,{
   Component
} from 'react';

import {
   Route
} from 'react-router-dom';

/**
* Components
*/

import MovingBalls from './components/MovingBalls/movingBalls';
import Paint from './components/Paint/paint';
import Cube from './components/Cube/cube';

/**
* Styles
*/

import './app.scss';


/**
* App component definition and export
*/

export class App extends Component {

   /**
   * Markup
   */

   render(){
      return(
            <div className="app">
                <Route 
                  exact 
                  path="/"
                  component={ Cube }
               />
            </div>
      );
   }
}

export default App;
