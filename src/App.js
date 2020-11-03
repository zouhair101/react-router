import React,{Component} from 'react';
import './App.css'
import Nav from './Nav';
import Shop from './Shop';
import About from './About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render(){
   
    return (
      <Router>
        <div>
          <Nav/>
          <Switch>
              <Route path="/"  exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/shop"  exact component={Shop} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const Home = () => {
  return (
    <div>
        <h1>Home page</h1>      
    </div>
  )
}

export default App;