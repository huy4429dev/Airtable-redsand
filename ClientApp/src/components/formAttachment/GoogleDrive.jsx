import React, { Component } from 'react';
import GooglePicker from '@peergrade/react-google-picker' 

class GoogleDrive extends Component {
    render() {
        return (
            <div>
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
<button> google Drive</button>


                </GooglePicker>
            </div>
        );
    }
}

export default GoogleDrive;
