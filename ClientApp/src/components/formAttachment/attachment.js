import React, { Component } from 'react';
import {Modal,moduleName, Button, ModalFooter, ModalBody }from 'react-bootstrap'


class attachment extends Component {
constructor(props) {
    super(props);
    this.state={
        indexAttachment:null,
        
    }
}

changeComment = (e) => {
   
}
 
    deleteAttachment = (key) => {
        console.log('key' + key);
        if(window.confirm("bạn có muốn xóa file này?"))
        { const { deleteAttachment } = this.props;
      deleteAttachment(key);
      console.log("bạn đã xóa file đính kèm này");
    }
      
      
    }
    render() {
        const {attachment}= this.props;
        const {index}= this.props;
        return ( 
            <React.Fragment>
                <div className="file-attachment " >
                                        
                                        <a href={attachment.url} className="">
                                        
                                            <img class="attachment-thumbnail modal-task__desc-add " src="https://img.icons8.com/plasticine/2x/file.png" />
                                            </a>
                                      
                                            <div className="des_attachment">
        <a href={attachment.url}> <h6 className="nameFile">{attachment.name}</h6></a> 
                                             <a className="user-comment__link" key={index} onClick={()=>{this.deleteAttachment(attachment.id)}} ><span>Remove</span></a>
                                             <a className="user-comment__link"  onClick={this.changeComment(attachment.name, attachment.url)}><span>Comment</span></a>
        <p className="creatAt">Created At: {attachment.createdAt}</p>
                                        </div>



                                        
           
                                
            </div>
            </React.Fragment>
        );
    }
}

export default attachment;