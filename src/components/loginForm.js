import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="login-form-outline">
                    <h3 className="cont-item">Log In</h3>
                    <div className="row cont-item">
                        <label>Username: </label>
                        <input id="password-field" type="password" placeholder="Password"></input>
                    </div>
                    <div className="row cont-item">
                        <label>Password: </label>
                        <input type="text" id="username-field" placeholder="User Name"></input>
                        
                    </div>
                </div>
            </div>
        );
    }
}