import React, { Component } from 'react';
import './style.css';
import { Button } from 'reactstrap';
import Header from '../../pages/header/Header';
import * as actions from './../../actions/header';
import connect from '../../lib/connect';
class Profile extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            txtUser:'',
            txtEmail:'',
            nbPhone:'',
            userId:'',
            project_profile: []
        }
    }

    componentWillMount() {
        const { FectProfile } = this.props.actions;
        const { project_profile } = this.props;
        const userId = localStorage.userId;
        FectProfile(userId);
        if (project_profile !== []) {
            this.setState({
                project_profile: project_profile
            })
        }
    }
    onChange=()=>{

    }
    onSubmit=()=>{

    }
    render() {
        var { project_profile } = this.props;
        var {txtEmail,txtUser,nbPhone}=this.state;
        return (
            <React.Fragment>
                <Header />
                <div className="container">

                    <div className="col-10 mt-5 form_profile">
                        <div className="well well-sm">
                            <div className="row">
                                <div className="col-3">
                                    <img src="data:image/jpeg;base64,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" alt="" className="img-rounded img-responsive" />
                                </div>
                                <div className="col-6 bg-dark text-white">
                                    <form onSubmit={this.onSubmit}>
                                        <span className="mt-3">Tên đăng nhập : </span>
                                        <input className="form_profile_name" 
                                        placeholder={project_profile.userName} 
                                        value={txtUser}
                                        onChange={this.onChange}
                                        />

                                        <p className="mt-3 mb-3">
                                            <i className="glyphicon glyphicon-envelope mt-3" />Email: <input className="form_profile_name" 
                                            placeholder={project_profile.email} 
                                            value={txtEmail}
                                            onChange={this.onChange}
                                            />
                                            <br />
                                            <i className="glyphicon glyphicon-globe mt-3" />SDT: <input className="form_profile_name"
                                             placeholder={project_profile.phoneNumber}
                                             value={nbPhone}
                                             onChange={this.onChange}
                                             />
                                            <br />
                                            <i className="glyphicon glyphicon-gift mt-3" />June 02, 1988</p>
                                        <Button className="btn-login mt-5" color="success" type="submit" bssize="lg" block>Saver</Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

// export default Profile;
export default (connect(Profile, state => (
    {
        project_profile: state.headerReducer.project_profile
    }
), actions));