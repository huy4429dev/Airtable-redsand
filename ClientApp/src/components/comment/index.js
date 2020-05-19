import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'

export default class Comment extends Component {
    render() {
        const { comment } = this.props;
        return (
            <React.Fragment>
                <div className="d-flex mt-1 user-comment">
                    <Image className="avatar_img" src="https://localhost:5001/static/media/bg.1761074f.jpg" roundedCircle />
                    <div>
                        <p className="ml-2  user-comment__name m-0">linh ngo</p>
                        <div className="user-comment__text ml-2">{comment.content}</div>
                        <div className="ml-1">
                            <a className="user-comment__link">chỉnh sửa</a>
                            <a className="user-comment__link">Xóa</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
