import React, { Component } from 'react';
import { Container, Row, Form } from 'reactstrap';
import './style.css';
import SizeBar from './../../components/boards/SizeBar';
import BoardList from './../../components/boards/BoardList';
import HeaderPage from './../header/HeaderPage';
// import { connect } from 'react-redux';
import { actShowProjectReques, actShowProjectReccentlyRequest } from './../../actions/board';
import BoardsListItem from '../../components/boards/BoardsListItem';
import BoardRecentlyList from '../../components/boards/BoardRecentlyList';
import BoardRecentlyItem from '../../components/boards/BoardRecentlyItem';
import * as actions from './../../actions/board';
import connect from '../../lib/connect';
class Boards extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            project:[],
            projectRecently:[]
        }
    }
    


    componentDidMount() {
        const { actShowProjectReques ,actShowProjectReccentlyRequest } = this.props.actions;
        const { project,projectRecently } = this.props;
        const userId = localStorage.userId;
        actShowProjectReques(userId);
        
        if (project !== []) {
            this.setState({
                project: project
            })
        }
        actShowProjectReccentlyRequest(userId);
        if(projectRecently !==[]){
            this.setState({
                projectRecently:projectRecently
            })
        }
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
export default (connect(Boards, state => (
    {
        project:state.boardReducer.project,
        projectRecently:state.boardReducer.projectRecently
    }
), actions));