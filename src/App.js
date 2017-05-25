//noinspection JSUnresolvedVariable
import React, {Component} from 'react';
import PageContainer from './components/Page/PageContainer';
import Sidebar from './components/Sidebar/Sidebar';
import Banner from './components/Navbar/Banner';

import {BrowserRouter as Router} from 'react-router-dom'

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPageToggled: true,
            width: window.innerWidth
        }
    }

    // TODO: Remove the lifecycle methods for resizing to a HoC.
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
            <Router history="">
                <div id="wrapper" className={this.checkPageToggled()}>
                    <Sidebar
                    />
                    <div id="pageContentWrapper" className="container-fluid">
                        <Banner
                            onClick={ this.handlePageToggle.bind(this) }
                            toggled={ this.state.isPageToggled }
                        />
                        <PageContainer/>
                    </div>
                </div>
            </Router>
        );
    }
}
export default App;
