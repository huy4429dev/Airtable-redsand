import React, { Component } from 'react';
import {Col, Button, Label } from 'reactstrap';

class SizeBar extends Component {
    render() {
        return (
            <Col xs="3">
            <Button outline color="light border border-0 text-left text-dark" size="lg" block>
                <h6 className="d-flex align-items-center">
                    <i className="material-icons text-dark mr-2">dashboard</i>
                                 Broads
                                 </h6>
            </Button>
            <Button outline color="light border border-0 text-left text-dark" size="lg" block>
                <h6 >
                    <i className='fab fa-flipboard mr-2'></i>
                                    Templates
                                    </h6>
            </Button>
            <Button outline color="light border border-0 text-left text-dark" size="lg" block>
                <h6 className="d-flex align-items-center">
                    <i className="material-icons text-dark mr-2">trending_up</i>
                                    Home
                                    </h6>
            </Button>
            <Label className="text-muted mt-4">TEAMS</Label>
            <Button outline color="light border border-0 text-left text-muted" size="lg" block>
                <h6 className="d-flex align-items-center">
                    <i className="material-icons text-muted mr-2">add</i>
                                    Create a teams
                                </h6>
            </Button>
            </Col>
        );
    }
}

export default SizeBar;