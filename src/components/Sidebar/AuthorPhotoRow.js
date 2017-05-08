//noinspection JSUnresolvedVariable
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

export default class extends Component {

    render() {
        return (
            <Grid>
                <Row id="authorPhotoRow">
                    <Col xs={12}>

                        <p className="text-center name">
                            Thomas Cathey
                        </p>
                    </Col>
                </Row>
            </Grid>
        )
    }

}