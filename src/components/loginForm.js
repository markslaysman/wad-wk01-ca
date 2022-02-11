import React from 'react';
import TextInputField from './textInputField';
import SecuredInputField from './securedInputField'

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="login-form-outline">
                    <h3 className="cont-item">Log In</h3>
                    <div className="row cont-item">
                        <label>Username: </label>
                        <TextInputField />
                    </div>
                    <div className="row cont-item">
                        <label>Password: </label>
                        <SecuredInputField />
                    </div>
                </div>
            </div>
        );
    }
}