import React, { Component } from 'react';
import { FormGroup, Form, Button, Label } from 'reactstrap';
import BoardRecentlyList from './../../../components/boards/BoardRecentlyList';
// import BoardList from './../../components/boards/BoardList';
import connect from '../../../lib/connect';
// import BoardsListItem from './../../components/boards/BoardsListItem';
import * as actions from './../../../actions/board';
import ListBoardRecentlyItem from './ListBoardRecentlyItem';
import ListBoardItem from './ListBoardItem';
import ListBoardList from './ListBoardList';
class ListBoard extends Component {
    HandFormListBoard = () => {
        this.props.onClick()
    }
    constructor(props, context) {
        super(props, context);
        this.state = {
            project: [],
            projectRecently: [],
        }
    }



    componentDidMount() {
        const { actShowProjectReques, actShowProjectReccentlyRequest } = this.props.actions;
        const { project, projectRecently } = this.props;
        const userId = localStorage.userId;
        actShowProjectReques(userId);

        if (project !== []) {
            this.setState({
                project: project
            })
        }
        actShowProjectReccentlyRequest(userId);
        if (projectRecently !== []) {
            this.setState({
                projectRecently: projectRecently
            })
        }
    }
    showProjectBoard = (project, search) => {
        var resoult = [];
        if (project.length > 0) {
                resoult = project.map((project, index) => {
                    return (
                        <ListBoardItem
                            key={index}
                            project={project}
                            index={index}
                        />
                    )
                })
        }
        return resoult;
    }
    showProjectRecently = (projectRecently) => {
        var resoult = [];
        if (projectRecently.length > 0) {
            resoult = projectRecently.map((projectRecently, index) => {
                return (
                    <ListBoardRecentlyItem
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
        var projectRecently = this.props.projectRecently;

        return (
            <Form className="header-form-board form-nacation">
                <FormGroup className="d-flex align-items-center justify-content-between mt-2">
                    <i onClick={this.HandFormListBoard} className="form-list-board-right fa fa-close "></i>
                </FormGroup>
                <FormGroup>
                    <BoardRecentlyList>
                        {this.showProjectRecently(projectRecently)}
                    </BoardRecentlyList>
                </FormGroup>
                <FormGroup >
                    <ListBoardList>
                        {this.showProjectBoard(project)}
                    </ListBoardList>
                </FormGroup>
            </Form>
        );
    }
}
export default (connect(ListBoard, state => (
    {
        project: state.boardReducer.project,
        projectRecently: state.boardReducer.projectRecently
    }
), actions));
// export default ListBoard;