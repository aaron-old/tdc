import React, { Component } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import { Grid, Row,  } from 'react-bootstrap';


class App extends Component {

  render() {
    return (
      <div className="wrapper">
          <Sidebar/>
          <Grid fluid>
              <main className="page-content-wrapper">
                  <Header/>
                  <Row id="main">

                  </Row>
              </main>
          </Grid>

      </div>
    );
  }
}

export default App;
