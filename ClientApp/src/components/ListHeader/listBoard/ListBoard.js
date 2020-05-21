import React, { Component } from 'react';
import { FormGroup, Form, Button, InputGroupAddon, Input, InputGroup } from 'reactstrap';
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
            noidungsearch: ''
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
    searchBoard = (e) => {
        this.setState({
            noidungsearch: e.target.value
        })
    }
    showProjectBoard = (project, search) => {
        var resoult = [];
        var search = this.state.noidungsearch;
        if (project.length > 0) {
            if (search.length > 0) {
                resoult = project.map((project, index) => {
                    if (project.name.indexOf(search) !== -1) {
                        return (
                            <ListBoardItem
                                key={index}
                                project={project}
                                index={index}
                            />
                        )
                    }
                })
            } else
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
    showProjectRecently = (projectRecently, search) => {
        var resoult = [];
        var search = this.state.noidungsearch;
        if (projectRecently.length > 0) {
            if (search.length > 0){
                resoult = projectRecently.map((projectRecently, index) => {
                    if (projectRecently.name.indexOf(search) !== -1) {
                    return (
                        <ListBoardRecentlyItem
                            key={index}
                            projectRecently={projectRecently}
                            index={index}
                        />
                    )
                    }
                })
            }else
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
        // console.log(this.state.noidungsearch);

        return (
            <Form className="header-form-board form-nacation">
                <FormGroup className="d-flex align-items-center justify-content-between mt-2">
                    <i onClick={this.HandFormListBoard} className="form-list-board-right fa fa-close "></i>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <Input onChange={(e) => this.searchBoard(e)} />
                    </InputGroup>
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