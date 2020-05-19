import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import './style.scss';
import Select from 'react-select';

export default class ModalAddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: null,
            selectedOption: null
        }
    }
    handleHideModalAddUser = () => {
        const { handleHideModalAddUser } = this.props;
        handleHideModalAddUser();
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.allUser) {
            const option = nextProps.allUser.map((user, index) => {
                return { value: user.id, label: user.userName }
            });
            this.setState({
                options: option
            })
        }
    }
    handleAddUserProject = () => {
        const { project } = this.props;
        // const data = {
        //     "name" : ,
        //     "thumb":,
        //     "userProjects" : [
        //         {

        //         }
        //     ]
        // }
        console.log(this.props.project);
    }
    render() {
        return (
            <React.Fragment>
                <Card className="modal-user">
                    <form>
                        <Card.Header className="text-center ">Mời vào bảng</Card.Header>
                        <i className="fas fa-times position-absolute modal-user__close" onClick={this.handleHideModalAddUser} ></i>
                        <Card.Body>
                            {/* <input placeholder="Nhập email hoặc tên" className="modal-user__input" />  */}
                            <Select
                                onChange={this.handleChange}
                                options={this.state.options}
                                isMulti={true}
                                isSearchable={true}
                            />
                        </Card.Body>
                        <Card.Footer>
                            <button className="text-center" className="modal-user__btn" onClick={this.handleAddUserProject}>Thêm user</button>
                        </Card.Footer>
                    </form>
                </Card>
            </React.Fragment>
        )
    }
}
