import React, { Component } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Home from './components/Page/Home/Home';
import About from './components/Page/About/About';
import Contact from './components/Page/Contact/Contact';
import Post from './components/Page/Post/Post';

import { Grid, Row,  } from 'react-bootstrap';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="wrapper">
          <Sidebar/>
          <Grid fluid>
              <main className="page-content-wrapper">
                  <Header/>
                  <Row id="main">
                      <Router>
                          <div>
                              <Route exact path="/" component={Home}/>
                              <Route exact path="/about" component={About}/>
                              <Route exact path="/contact" component={Contact}/>
                              <Route path="/post/:slug" component={Post}/>
                          </div>
                      </Router>
                  </Row>
              </main>
          </Grid>

      </div>
    );
  }
}

export default App;
