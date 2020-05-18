import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import './style.scss';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import GooglePicker from 'react-google-picker'


class formAttachment extends Component {
    constructor(props) {
        super(props);
        this.state = {

            fileUrl: null,
            nameUrl: null,
           display:"",
           id:null,      
        }
    }
    save(e) {
      
        this.setState({ display: "none" });

       // this.handleCloseAttachment()

    }


    handleCloseAttachment = () => {
     
        const { handleCloseAttachment } = this.props;
        handleCloseAttachment();
    }



    render() 

    {


        return (

            <React.Fragment>
                <Card className="modal-deadline " style={{display:this.state.display}} index={this.props.task} >
                    <form>
                        <Card.Header className="text-center position-relative ">
                            <p className="modal-deadline__title">Attach Form</p>
                            <i className="fas fa-times position-absolute modal-deadline__close" onClick={this.handleCloseAttachment}></i>
                        </Card.Header>
                        <Card.Body>
                            <Nav className="flex-column">
                                <Nav.Link > Computer</Nav.Link>
                                <Nav.Link >
                                    <GooglePicker
                                        clientId={'136988398048-r3i3a1625h8hnrng9p2sj8chjjfurmiu.apps.googleusercontent.com'}
                                        developerKey={'AIzaSyDE7tXkC6FzOOMlaew-Y257DS9hCXYKeXg'}
                                        scope={['https://www.googleapis.com/auth/drive.readonly']}
                                        onChange={data => {
                                            data.docs ?
                                                this.setState({ fileUrl: data.docs[0].url, nameUrl: data.docs[0].name }): this.save();
                                        }}
                                        onAuthenticate={token =>{console.log('oauth token:', token)}}
                                        onAuthFailed={data => console.log('on auth failed:', data)}
                                        multiselect={true}
                                        navHidden={true}
                                        authImmediate={false}
                                      

                                        mimeTypes={['image/png', 'image/jpeg', 'image/jpg',
                                            'application/vnd.google-apps.folder',
                                            'text/xml',
                                            'application/vnd.google-apps.document',
                                            'application/pdf',
                                            'application/zip',
                                            'text/html',
                                            'audio/mp3',
                                            'audio/mpeg',
                                            'application/zip',
                                            'application/vnd.google-apps.spreadsheet',
                                            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                                            'application/vnd.ms-excel']}
                                    >
                                        <button className="choose-drive" > Google Drive</button>
                                    </GooglePicker>
                                </Nav.Link>
                            </Nav>
                        </Card.Body>
                        <Card.Footer>
                            <span>  Attach a link</span>
                            <form>
                                <FormGroup>
                                    <Input type="text" value={this.state.nameUrl} placeholder="paste any link here" name="link-attach" onChange={this.save} />
                                </FormGroup>
                            </form>
                            <button className="modal-deadline__btn">Attach</button>
                        </Card.Footer>
                    </form>
                </Card>
            </React.Fragment>

        );
    }
}

export default formAttachment;
