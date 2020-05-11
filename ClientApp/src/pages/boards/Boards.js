import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import './style.css';
import SizeBar from './../../components/boards/SizeBar';
import ViewList from './../../components/boards/ViewList';
import HeaderPage from './../header/HeaderPage';
import { connect } from 'react-redux';
import { actShowProjectReques } from './../../actions/board';
// import ViewListItem from '../../components/boards/ViewListItem';
import BoardsListItem from '../../components/boards/BoardsListItem';
class Boards extends Component {
    componentDidMount() {
        const userId = localStorage.userId;
        this.props.fectProjectBoard(userId);


    }
    showProjectBoard = (project) => {
        var resoult = [];
        if (project.length > 0) {
            resoult = project.map((project, index) => {
                return (
                    <BoardsListItem
                        key={index}
                        project={project}
                        index={index}
                    />

                )
            })
        }
        return resoult;

    }

    render() {
        var project = this.props.project;
        return (

            <React.Fragment>
                <HeaderPage />
                <Container>
                    <Row className="mt-5">
                        <SizeBar />
                        <ViewList>
                            {this.showProjectBoard(project)}
                        </ViewList>
                    </Row>
                </Container>
            </React.Fragment>

        );
    }
}
function mapStateToProps(state) {
    return {
        project: state.boardReducer.project
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fectProjectBoard: (userId) => {
            dispatch(actShowProjectReques(userId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Boards);