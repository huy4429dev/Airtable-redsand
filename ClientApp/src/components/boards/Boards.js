import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import './style.css';
import SizeBar from './SizeBar';
import ViewList from './ViewList';
import HeaderPage from '../../pages/header/HeaderPage';
class Boards extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderPage/>
                <Container>
                    <Row className="mt-5">
                        <SizeBar />
                        <ViewList />
                    </Row>
                </Container>
            </React.Fragment>

        );
    }
}

export default Boards;