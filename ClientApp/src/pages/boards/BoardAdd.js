import React, { Component } from 'react';
import { FormGroup, Button } from 'reactstrap';
// import { actAddProjectRequest, actAddFileRequest, actShowImageRequest } from './../../actions/board';
import connect from '../../lib/connect';
import * as actions from './../../actions/board';
// import { connect } from 'react-redux';
class BoardAdd extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            txtname: '',
            thumb: '',
            managerId: '',
            userId: '',
            showimg: []
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
    boardImg = (url) => {
        this.setState({
            thumb: url
        });
    }
    onSubmit = (e) => {
        var thumb = this.state.thumb;
        const userId = localStorage.userId;
        const { actAddProjectRequest } = this.props.actions;
        var { txtname } = this.state;
        // var{history}=this.props;
        var project = {
            name: txtname,
            thumb: thumb || this.props.img,
            managerId: userId,
            userProjects: [
                {
                    userId: userId
                }]
        }
        e.preventDefault();
        actAddProjectRequest(userId,project);
        this.props.onClick();

    }
    handleUploadImage = (e) => {
        // const files = e.target.files;
        // const formData = new FormData();
        // formData.append('myFile', files[0]);
        // this.props.onAddfile(formData);
    }

    componentWillMount() {
        const { actShowImageRequest, actAddProjectRequest } = this.props.actions;
        const { showimg } = this.props;
        actShowImageRequest();
        if (showimg !== []) {
            this.setState({
                showimg: showimg
            })
        }
    }

    render() {
        var { txtname } = this.state;
        var showimg = this.props.showimg;
        return (
            <React.Fragment>
                <div className="form-filter">
                    <div className="form_addproject">
                        <i onClick={this.showFormAdd} className="fa fa-close mt-1 float-right"></i>
                        <div className="mt-3 mb-5 text-center">
                            <h5 className="text-center">Create New Project</h5>
                        </div>
                        <div className="d-flex row mb-2">
                            <div className="add-left col-lg-7" style={{
                                backgroundImage: `url('https://localhost:5001/Resources/images/${this.state.thumb}')`,
                                backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
                            }} >
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
                                {showimg.map((showimg, index) => {
                                    return (<img onClick={() => this.boardImg(showimg.url)} className="add-img"
                                        src={`https://localhost:5001/Resources/images/${showimg.url}`} alt="hinh"
                                        key={index} />)
                                })}
                                {this.props.img ? <img src={`https://localhost:5001/Resources/images/${this.props.img}`} alt="hinh"
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
// const mapStateToProps = (state) => {
//     return {
//         img: state.boardReducer.img,
//         project: state.boardReducer.project,
//         showimg: state.imgReducer
//     }
// }

// const mapDispatchToProps = (dispatch, porps) => {
//     return {
//         onAddProject: (userId, project) => {
//             dispatch(actAddProjectRequest(userId, project))
//         },
//         onAddfile: (img) => {
//             dispatch(actAddFileRequest(img))
//         },
//         onshowimage: () => {
//             dispatch(actShowImageRequest())
//         }
//     }
// }
export default (connect(BoardAdd, state => (
    {
        showimg: state.imgReducer.showimg,
        project: state.boardReducer.project
    }
), actions));
// export default connect(mapStateToProps, mapDispatchToProps)(BoardAdd);