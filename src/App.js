
import './App.css';
import React, { useEffect } from 'react';
import Header from './Frontend/Header/Header';
import { BrowserRouter as Router,Switch,Route, BrowserRouter } from 'react-router-dom';
import Stackoverflow from './Frontend/Stackoverflow/index'
import ViewQuestion from './Frontend/ViewQuestion/MainQuestion'
import Question from './Frontend/Add-Question/Question'
import Authenticate from './Frontend/Authenticate'

function App() {
 
  
  return (
    <div>
    <BrowserRouter>
      <Header />
      <Router>
        <Switch>
        <Route exact path='/authenticate'    component={Authenticate} />
        <Route exact path='/add-question' component={Question} />
        <Route exact path='/question' component={ViewQuestion} />
          <Route exact path='/' component={Stackoverflow} />
         </Switch>
      </Router>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
