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
            fileUrl: "",
            name: "",
            nameUrl: "",

        }

    }
    save() {
        alert("đang luiu");
    }



    render() {


        return (
            <div >
                <React.Fragment>
                    <Card className="modal-deadline">
                        <form>
                            <Card.Header className="text-center position-relative ">
                                <p className="modal-deadline__title">Attach Form</p>
                                <i className="fas fa-times position-absolute modal-deadline__close" onClick={this.handlCloseAttachment}></i>
                            </Card.Header>
                            <Card.Body>
                                <Nav className="flex-column">
                                    <Nav.Link > Computer</Nav.Link>

 <Nav.Link>
 <GooglePicker
                    clientId={'563662061441-gvj5r23t2sjt9s3q52ocrpq7j7dpvjge.apps.googleusercontent.com'}
                    developerKey={'AIzaSyALp-6PCQ3Fq1qNpTtlsVnmJtFKoKxaiws'}
                    scope={['https://www.googleapis.com/auth/drive.readonly']}
                    onChange={data => {
                        data.docs ? this.setState({ fileUrl: data.docs[0].url, nameUrl: data.docs[0].name }) : this.save();
                    }}
                    onAuthenticate={token => console.log('oauth token:', token)}
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


                </GooglePicker>
 </Nav.Link>
                                </Nav>
                              </Card.Body>
                            <Card.Footer>
                                <span>  Attach a link</span>
                                <form>
                                    <FormGroup>
                                        <Input type="text" value="" placeholder="paste any link here" name="link-attach" />
                                    </FormGroup>
                                </form>
                                <button className="modal-deadline__btn">Attach</button>
                            </Card.Footer>
                        </form>
                    </Card>

                </React.Fragment>
            </div>
        );
    }
}

export default formAttachment;
