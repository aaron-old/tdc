import React, { Component } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Banner from './components/Navbar/Banner';
import Home from './components/Page/Home/Home';
import About from './components/Page/About/About';
import Contact from './components/Page/Contact/Contact';
import Post from './components/Page/Post/Post';

import { Grid, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';

class App extends Component {

  render() {
    return (
      <div id="wrapper" className="toggled">
          <Sidebar/>
          <div id="pageContentWrapper">
              <Grid fluid>
                  <Banner/>
                  <main id="main">
                      <Row>
                          <Router history="">
                              <Col lg={12}>
                                  <Route exact path="/" component={Home}/>
                                  <Route exact path="/about" component={About}/>
                                  <Route exact path="/contact" component={Contact}/>
                                  <Route path="/post/:slug" component={Post}/>
                              </Col>
                          </Router>
                      </Row>
                  </main>
              </Grid>
          </div>
      </div>
    );
  }
}

export default App;
