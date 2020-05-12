import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import './style.scss';

export default class ModalAddUser extends Component {
    handleHideModalAddUser = () => {
        const { handleHideModalAddUser } = this.props;
        handleHideModalAddUser();
    }
    render() {
        return (
            <React.Fragment>
                    <Card className="modal-user">
                        <form>
                            <Card.Header className="text-center ">Mời vào bảng</Card.Header>
                            <i className="fas fa-times position-absolute modal-user__close" onClick={this.handleHideModalAddUser} ></i>
                            <Card.Body>
                                <input placeholder="Nhập email hoặc tên" className="modal-user__input" />
                            </Card.Body>
                            <Card.Footer>
                                <button className="text-center" className="modal-user__btn">Gửi lời mời</button>
                            </Card.Footer>
                        </form>
                    </Card>
            </React.Fragment>
        )
    }
}
