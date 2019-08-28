import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Header.css';
import Footer from './Footer';
import Header from './Header';
import Card from './Card';


function App() {
  return (
    <Router>
      <div>
      <Header/>
      <br/>
      <div>
        <Switch>
          <Route path= "/about" component={About} />
          <Route path= "/home" component={Home} />
          <Route path= "/topics" component={Topics} />
        </Switch>
      </div>
     
      {/* <Footer/> */}
      {/* <Card/> */}

    </div>  

    </Router>
    
   
  );
}

export default App;
