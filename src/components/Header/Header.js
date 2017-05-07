import React, { Component } from 'react'
import { Navbar } from "react-bootstrap"

export default class extends Component {

    render() {
        return (
            <Navbar id="banner" fixedTop>
                <Navbar.Header>
                </Navbar.Header>
                <Navbar.Toggle/>
                <h2 className="page-title">Tdoggs Corner</h2>
            </Navbar>
        )
    }
}