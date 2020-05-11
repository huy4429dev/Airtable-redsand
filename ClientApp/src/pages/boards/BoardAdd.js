import React, { Component } from 'react';
import { FormGroup, Button } from 'reactstrap';
import { actAddProjectRequest, actAddFileRequest } from './../../actions/board';
import { connect } from 'react-redux';
class BoardAdd extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            txtname: '',
            thumb: '',
            managerId: '',
            userId: ''
        }
    }

    showFormAdd = () => {
        this.props.onClick();
    }
    onChange = (e) => {
        var target = e.target;
        var value = target.value;
        var name = target.name;
        this.setState({
            [name]: value
        })
    }
    boardImg = (thumb) => {
        this.setState({
            thumb: thumb
        });
    }


    onSubmit = (e) => {
        var thumb = this.state.thumb;
        const userId = localStorage.userId;
        var { txtname } = this.state;
        var project = {
            name: txtname,
            thumb: thumb,
            managerId: userId,
            userProjects: [
                {
                    userId: userId
                }]
        }
        e.preventDefault();
        this.props.onAddProject(userId, project);
        this.props.onClick();

    }
    handleUploadImage = (e) => {
        const files = e.target.files;
        const formData = new FormData();
        formData.append('myFile', files[0]);
        this.props.onAddfile(formData);
    }

    render() {
        var { txtname } = this.state;
        var project = this.props.project;
        
        return (
            <React.Fragment>
                <div className="form-filter">
                    <div className="form_addproject">
                        <i onClick={this.showFormAdd} className="fa fa-close mt-1 float-right"></i>
                        <div className="mt-3 mb-5 text-center">
                            <h5 className="text-center">Create New Project</h5>
                        </div>
                        <div className="d-flex row mb-2">
                      
                            <div className="add-left col-lg-7" style={{ backgroundImage: `url('https://localhost:5001/Resources/images/${this.state.thumb}')` }} >
                                <form onSubmit={this.onSubmit}>
                                    <FormGroup className="ml-2 mb-3">
                                        <input className="w-100 p-1"
                                            placeholder="Name Project"
                                            name="txtname"
                                            value={txtname}
                                            onChange={this.onChange}
                                        />
                                    </FormGroup>
                                    <FormGroup className="ml-3">
                                        <Button type='submit' color="success" className="p-1">Create</Button>
                                    </FormGroup>
                                </form>
                            </div>
                            <div className=" add-right  col-lg-5">
                                {project.map((project, index) => {
                                    return (<img onClick={() => this.boardImg(project.thumb)} className="add-img"
                                        src={`https://localhost:5001/Resources/images/${project.thumb}`} alt="hinh"
                                        key={index} />)
                                })}
                                {this.props.img ? <img src={`https://localhost:5001/${this.props.img}`} alt="hinh"
                                    className='add-img' /> : ''}
                                <div className="upload-btn-wrapper">
                                    <button className="btn__upload"><i className="fas fa-ellipsis-h"></i></button>
                                    <input type="file" name="myfile" onChange={this.handleUploadImage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        img: state.boardReducer.img,
        project: state.boardReducer.project
    }
}

const mapDispatchToProps = (dispatch, porps) => {
    return {
        onAddProject: (userId, project) => {
            dispatch(actAddProjectRequest(userId, project))
        },
        onAddfile: (img) => {
            dispatch(actAddFileRequest(img))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardAdd);