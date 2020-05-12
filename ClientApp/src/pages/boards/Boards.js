import React, { Component } from 'react';
import { Container, Row, Form } from 'reactstrap';
import './style.css';
import SizeBar from './../../components/boards/SizeBar';
import BoardList from './../../components/boards/BoardList';
import HeaderPage from './../header/HeaderPage';
import { connect } from 'react-redux';
import { actShowProjectReques, actShowProjectReccentlyRequest } from './../../actions/board';
import BoardsListItem from '../../components/boards/BoardsListItem';
import BoardRecentlyList from '../../components/boards/BoardRecentlyList';
import BoardRecentlyItem from '../../components/boards/BoardRecentlyItem';
class Boards extends Component {
    
    componentDidMount() {
        const userId = localStorage.userId;
        this.props.fectProjectBoard(userId);
        this.props.fetchBoardRecently(userId);
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
    showProjectRecently=(projectRecently)=>{
        var resoult = [];
        if(projectRecently.length>0){
            resoult = projectRecently.map((projectRecently,index)=>{
                return(
                    <BoardRecentlyItem
                    key={index}
                    projectRecently={projectRecently}
                    index={index}
                    />
                )
            })
        }
        return resoult;
    }
    render() {
        var project = this.props.project;
        var projectRecently= this.props.projectRecently;
        return (
            <React.Fragment>
                <HeaderPage />
                <Container>
                    <Row className="mt-5">
                        <SizeBar />
                        <div className="col__item">
                            <BoardRecentlyList>
                                {this.showProjectRecently(projectRecently)}
                            </BoardRecentlyList>
                            <BoardList>
                                {this.showProjectBoard(project)}
                            </BoardList>
                        </div>

                    </Row>
                </Container>
            </React.Fragment>

        );
    }
}
function mapStateToProps(state) {
    return {
        project: state.boardReducer.project,
        projectRecently: state.boardReducer.projectRecently
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fectProjectBoard: (userId) => {
            dispatch(actShowProjectReques(userId));
        },
        fetchBoardRecently: (userId) => {
            dispatch(actShowProjectReccentlyRequest(userId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Boards);