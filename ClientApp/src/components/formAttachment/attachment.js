import React, { Component } from 'react';

class attachment extends Component {
constructor(props) {
    super(props);
    this.state={
        indexAttachment:null,
    }
}

static getDerivedStateFromProps(nextProps, prevState) {
 
    if (prevState.indexAttachment === null) {


        return { indexAttachment: null };
    }
    else return null;
}
componentDidUpdate(prevProps, prevState) {
 alert('vao com dia')
    if (prevState.indexAttachment !== this.state.indexAttachment) {
       
     //   this.setState({ indexAttachment: this.state.fileUrl, nameUrl: this.state.nameUrl })
        this.  deleteAttachment()
    }
}

    deleteAttachment = (key) => {
      //  alert(key)
        console.log('key' + key);
       // const { deleteAttachment } = this.props;
       //  deleteAttachment(key);
    }
    render() {
        const {attachment}= this.props;
        const {index}= this.props;
        return (
           
            <React.Fragment>
                <div className="file-attachment " key={index}>
                                        
                                        <a href={attachment.url} className="">
                                        
                                            <img class="attachment-thumbnail modal-task__desc-add " src="https://img.icons8.com/plasticine/2x/file.png" />
                                            </a>
                                      
                                            <div className="des_attachment">
        <a href={attachment.url}> <h6 className="nameFile">{attachment.name}</h6></a> 
                                             <a  key={index} onClick={this.deleteAttachment( index)}><span>Remove</span></a>
        <p className="creatAt">Created At: {attachment.createdAt}</p>
                                        </div>
                    

                                
            </div>
            </React.Fragment>
        );
    }
}

export default attachment;