//noinspection JSUnresolvedVariable
import React, {Component} from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Banner from './components/Navbar/Banner';
import Home from './components/Page/Home/Home';
import About from './components/Page/About/About';
import Contact from './components/Page/Contact/Contact';
import Post from './components/Page/Post/Post';

import {Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPageToggled: true,
            width: window.innerWidth
        }
    }

    /**
     *
     */
    componentWillMount() {
        this.updatePageDimensions();
    }

    /**
     *
     */
    componentDidMount() {
        window.addEventListener("resize", this.updatePageDimensions.bind(this));
    }

    /**
     *
     */
    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePageDimensions.bind(this));
    }

    /**
     *
     * @returns {*}
     */
    updatePageDimensions() {
        this.setState({
            width: window.innerWidth
        });
        if (this.state.width >= 768) return this.changePageToggled(true);
        if (this.state.width < 768) return this.changePageToggled(false);
    }


    /**
     *
     * @returns {string}
     */
    checkPageToggled() {
        return this.state.isPageToggled ? "toggled" : "";
    }

    /**
     *
     * @param {Boolean} toggled
     */
    changePageToggled(toggled) {
        this.setState({isPageToggled: toggled});
    }

    /**
     *
     */
    handlePageToggle() {
        this.state.isPageToggled ?
            this.changePageToggled(false) :
            this.changePageToggled(true);
    }

    render() {
        return (
            <div id="wrapper" className={this.checkPageToggled()}>
                <Sidebar/>
                <div id="pageContentWrapper" className="container-fluid">

                    <Banner
                        onClick={this.handlePageToggle.bind(this)}
                        toggled={this.state.isPageToggled}
                    />
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

                </div>
            </div>
        );
    }
}
export default App;
